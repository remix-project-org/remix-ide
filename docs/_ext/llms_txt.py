"""
Sphinx extension to auto-generate llms.txt and llms-full.txt on build.

llms.txt  — structured index with page titles, URLs, and descriptions.
llms-full.txt — same structure but with full page content included.
"""
import os
import re
import yaml
from pathlib import Path

BASE_URL = "https://remix-ide.readthedocs.io/en/latest/"


# ---------------------------------------------------------------------------
# Source file parsers
# ---------------------------------------------------------------------------

def _extract_md(source_path: Path):
    """Return (title, description, body) from a MyST markdown file."""
    content = source_path.read_text(encoding="utf-8")
    description = ""
    body = content

    if content.startswith("---"):
        end = content.find("---", 3)
        if end != -1:
            try:
                fm = yaml.safe_load(content[3:end].strip())
                if fm and "myst" in fm and "html_meta" in fm["myst"]:
                    description = fm["myst"]["html_meta"].get("description", "")
            except Exception:
                pass
            body = content[end + 3:].strip()

    title = ""
    for line in body.splitlines():
        stripped = line.strip()
        if stripped.startswith("# "):
            title = stripped[2:].strip()
            break

    return title, description, body


def _extract_rst(source_path: Path):
    """Return (title, description, body) from a reStructuredText file."""
    content = source_path.read_text(encoding="utf-8")
    lines = content.splitlines()

    title = ""
    for i, line in enumerate(lines):
        if (
            i + 1 < len(lines)
            and lines[i + 1]
            and all(c in "=-~^#" for c in lines[i + 1])
            and len(lines[i + 1]) >= len(line.rstrip())
        ):
            title = line.strip()
            break

    m = re.search(r"\.\. meta::\s*\n\s+:description:\s*(.+)", content)
    description = m.group(1).strip() if m else ""

    return title, description, content


# ---------------------------------------------------------------------------
# Toctree parser
# ---------------------------------------------------------------------------

def _parse_toctree(index_path: Path):
    """
    Parse all .. toctree:: directives in index_path.

    Returns a list of dicts:
        [{"caption": str, "entries": [str, ...]}, ...]
    """
    lines = index_path.read_text(encoding="utf-8").splitlines()
    sections = []
    i = 0

    while i < len(lines):
        if lines[i].strip() == ".. toctree::":
            caption = None
            entries = []
            i += 1
            # consume options and entries (all indented lines)
            while i < len(lines):
                raw = lines[i]
                stripped = raw.strip()
                if not raw or raw[0] in (" ", "\t"):
                    if stripped.startswith(":caption:"):
                        caption = stripped[len(":caption:"):].strip()
                    elif stripped.startswith(":"):
                        pass  # other directive option
                    elif stripped:
                        entries.append(stripped)
                    i += 1
                else:
                    break  # end of this toctree block
            if caption and entries:
                sections.append({"caption": caption, "entries": entries})
        else:
            i += 1

    return sections


# ---------------------------------------------------------------------------
# Build event handler
# ---------------------------------------------------------------------------

def _build_llms_files(app, exception):
    if exception:
        return
    if app.builder.name not in ("html", "dirhtml"):
        return

    docs_dir = Path(app.srcdir)
    out_dir = Path(app.outdir)
    index_path = docs_dir / "index.rst"

    sections = _parse_toctree(index_path)

    global_description = app.config.llms_txt_description
    project = app.config.project

    # ---- llms.txt (index only) --------------------------------------------
    txt_lines = [
        f"# {project}",
        "",
        f"> {global_description}",
        "",
        f"Full content: {BASE_URL}llms-full.txt",
        "",
    ]

    # ---- llms-full.txt (index + all page content) -------------------------
    full_lines = [
        f"# {project}",
        "",
        f"> {global_description}",
        "",
    ]

    for section in sections:
        txt_lines.append(f"## {section['caption']}")
        txt_lines.append("")
        full_lines.append(f"---")
        full_lines.append(f"## {section['caption']}")
        full_lines.append("")

        for entry in section["entries"]:
            md_path = docs_dir / f"{entry}.md"
            rst_path = docs_dir / f"{entry}.rst"

            if md_path.exists():
                title, description, body = _extract_md(md_path)
            elif rst_path.exists():
                title, description, body = _extract_rst(rst_path)
            else:
                continue

            page_url = f"{BASE_URL}{entry}.html"
            desc_suffix = f": {description}" if description else ""
            txt_lines.append(f"- [{title}]({page_url}){desc_suffix}")

            full_lines += [
                f"### [{title}]({page_url})",
                "",
                *(description and [f"> {description}", ""] or []),
                body,
                "",
            ]

        txt_lines.append("")
        full_lines.append("")

    llms_path = out_dir / "llms.txt"
    llms_full_path = out_dir / "llms-full.txt"

    llms_path.write_text("\n".join(txt_lines), encoding="utf-8")
    llms_full_path.write_text("\n".join(full_lines), encoding="utf-8")

    print(f"\nGenerated {llms_path}")
    print(f"Generated {llms_full_path}")


# ---------------------------------------------------------------------------
# Extension entry point
# ---------------------------------------------------------------------------

def setup(app):
    app.add_config_value("llms_txt_description", "Remix IDE documentation.", "html")
    app.connect("build-finished", _build_llms_files)
    return {"version": "0.1", "parallel_read_safe": True, "parallel_write_safe": True}
