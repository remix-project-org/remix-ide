const fs = require("fs");
const path = require("path");
const DOCS_DIR = path.join(__dirname, "../../docs");

const IS_GH_ACTIONS = process.env.GITHUB_ACTIONS === "true";
const errors = [];

function checkMetadata() {
  if (!fs.existsSync(DOCS_DIR)) {
    console.error(`Docs directory not found: ${DOCS_DIR}`);
    process.exit(1);
  }

  const docFiles = fs
    .readdirSync(DOCS_DIR, { recursive: true })
    .filter((fileName) => {
      const ext = path.extname(fileName);
      // filter for md/rst and exclude hidden folders at any depth
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
      errors.push({ file, error: `Could not read file: ${err.message}` });
      return;
    }

    if (path.extname(file) === ".md") {
      if (hasMDFrontmatter(fileContent)) {
        processMD(fileContent, file);
      } else {
        errors.push({ file, error: `Page metadata is missing from ${file}` });
      }
    } else {
      if (fileContent.includes("meta::")) {
        processRST(fileContent, file);
      } else {
        errors.push({ file, error: `Page metadata is missing from ${file}` });
      }
    }
  });

  if (errors.length > 0) {
    errors.forEach(({ file, error }) => {
      if (IS_GH_ACTIONS) {
        console.error(`::error file=docs/${file}::${error}`);
      } else {
        console.error(`  FAIL  ${file}: ${error}`);
      }
    });
    console.error(
      `\n${errors.length} error(s) in ${docFiles.length} file(s) checked.`,
    );
    process.exit(1);
  } else {
    console.log(`${docFiles.length} file(s) checked — all metadata valid.`);
    process.exit(0);
  }
}

function hasMDFrontmatter(fileContent) {
  const splitByLine = fileContent.split(/\r?\n/);
  if (splitByLine[0].trim() !== "---") return false;

  const closingIdx = splitByLine.findIndex(
    (el, i) => i > 0 && el.trim() === "---",
  );
  if (closingIdx === -1) return false;

  const frontmatter = splitByLine.slice(1, closingIdx).join("\n");
  return frontmatter.includes("myst:") && frontmatter.includes("html_meta:");
}

function processMD(fileContent, file) {
  const splitByLine = fileContent.split(/\r?\n/);
  let inFrontmatterRange = false;
  const storageArr = [];

  splitByLine.forEach((el, indx) => {
    if (el.trim() === "---" && indx === 0) {
      inFrontmatterRange = true;
      return;
    }

    if (el.trim() === "---" && indx > 0 && inFrontmatterRange) {
      inFrontmatterRange = false;
      return;
    }

    if (
      inFrontmatterRange &&
      !["myst:", "html_meta:"].includes(el.trim())
    ) {
      storageArr.push(el);
    }
  });

  if (storageArr.length > 0) {
    const result = Object.fromEntries(
      storageArr
        .map((el) => el.trim())
        .filter(Boolean)
        .map((el) => {
          const parts = el.split(":");
          const key = parts[0].replace(/"/g, "").trim();
          const value = parts.slice(1).join(":").replace(/"/g, "").trim();

          return [key, value];
        }),
    );

    checkObjectForKeys(result, file);
  } else {
    errors.push({
      file: file,
      error: `Page metadata is missing from ${file}`,
    });
  }
}

function processRST(fileContent, file) {
  const splitByLine = fileContent.split(/\r?\n/);

  let inFrontmatterRange = false;
  const storageArr = [];

  splitByLine.forEach((el) => {
    if (el.includes(".. meta::")) {
      inFrontmatterRange = true;
      return;
    }

    if (inFrontmatterRange) {
      if (!el.startsWith("   :")) {
        inFrontmatterRange = false;
        return;
      }
      storageArr.push(el.trim());
    }
  });

  if (storageArr.length > 0) {
    const result = Object.fromEntries(
      storageArr.map((el) => {
        const parts = el.split(":");

        const key = parts[1];
        const value = parts.slice(2).join(":").trim();

        return [key, value];
      }),
    );

    checkObjectForKeys(result, file);
  } else {
    errors.push({
      file: file,
      error: `Page metadata is missing from ${file}`,
    });
  }
}

function checkObjectForKeys(result, file) {
  if (!Object.hasOwn(result, "description") || !result.description) {
    errors.push({
      file: file,
      error: `Description is missing from the frontmatter in ${file}`,
    });
  }

  if (!Object.hasOwn(result, "keywords") || !result.keywords) {
    errors.push({
      file: file,
      error: `Keywords is missing from the frontmatter in ${file}`,
    });
  }
}

checkMetadata();
