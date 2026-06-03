const fs = require("fs");
const path = require("path");

const DOCS_DIR = path.join(__dirname, "../../docs");
const IS_GH_ACTIONS = process.env.GITHUB_ACTIONS === "true";
const errors = [];

function checkImageAltText() {
  if (!fs.existsSync(DOCS_DIR)) {
    console.error(`Docs directory not found: ${DOCS_DIR}`);
    process.exit(1);
  }

  const docFiles = fs
    .readdirSync(DOCS_DIR, { recursive: true })
    .filter((fileName) => {
      const ext = path.extname(fileName);
      return (
        (ext === ".md" || ext === ".rst") &&
        !fileName.split(path.sep).some((p) => p.startsWith("."))
      );
    });

  if (docFiles.length < 1) {
    console.log("No md/rst files found — nothing to check.");
    process.exit(0);
  }

  docFiles.forEach((file) => {
    let fileContent;
    try {
      fileContent = fs.readFileSync(path.join(DOCS_DIR, file), {
        encoding: "utf8",
      });
    } catch (err) {
      errors.push({ file, line: null, error: `Could not read file: ${err.message}` });
      return;
    }

    if (path.extname(file) === ".md") {
      checkMD(fileContent, file);
    } else {
      checkRST(fileContent, file);
    }
  });

  if (errors.length > 0) {
    errors.forEach(({ file, line, error }) => {
      const location = line != null ? `${file}:${line}` : file;
      if (IS_GH_ACTIONS) {
        console.error(`::error file=docs/${file},line=${line ?? 1}::${error}`);
      } else {
        console.error(`  FAIL  ${location}: ${error}`);
      }
    });
    console.error(
      `\n${errors.length} error(s) in ${docFiles.length} file(s) checked.`,
    );
    process.exit(1);
  } else {
    console.log(`${docFiles.length} file(s) checked — all images have alt text.`);
    process.exit(0);
  }
}

// Matches ![alt](url) — flags when alt is empty or whitespace-only.
// Skips images inside fenced code blocks.
function checkMD(content, file) {
  const lines = content.split(/\r?\n/);
  let inCodeBlock = false;

  lines.forEach((line, i) => {
    if (/^```/.test(line)) {
      inCodeBlock = !inCodeBlock;
      return;
    }
    if (inCodeBlock) return;

    const imagePattern = /!\[([^\]]*)\]\([^)]+\)/g;
    let match;
    while ((match = imagePattern.exec(line)) !== null) {
      const alt = match[1].trim();
      if (!alt) {
        errors.push({
          file,
          line: i + 1,
          error: `Image is missing alt text`,
        });
      }
    }
  });
}

// Checks .. image:: and .. figure:: directives for a :alt: field.
function checkRST(content, file) {
  const lines = content.split(/\r?\n/);

  lines.forEach((line, i) => {
    if (!/^\.\.\s+(image|figure)::/.test(line)) return;

    // Scan the directive block for :alt:
    let hasAlt = false;
    let j = i + 1;
    while (j < lines.length) {
      const next = lines[j];
      // Directive options are indented; a non-indented, non-blank line ends the block
      if (next.trim() === "") {
        j++;
        continue;
      }
      if (!/^\s/.test(next)) break;
      if (/^\s+:alt:\s+\S/.test(next)) {
        hasAlt = true;
        break;
      }
      j++;
    }

    if (!hasAlt) {
      errors.push({
        file,
        line: i + 1,
        error: `Image directive is missing :alt:`,
      });
    }
  });
}

checkImageAltText();
