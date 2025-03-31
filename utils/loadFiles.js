const fg = require("fast-glob");
const fs = require("fs/promises");
const path = require("path");

async function loadHTMLFiles(baseDir = "clones") {
  const entries = await fg(`${baseDir}/tier*/**/*.html`);
  const files = await Promise.all(
    entries.map(async (filepath) => {
      const content = await fs.readFile(filepath, "utf-8");
      return {
        name: path.basename(filepath),
        path: filepath,
        content,
      };
    })
  );
  return files;
}

module.exports = loadHTMLFiles;
