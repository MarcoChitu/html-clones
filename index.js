const loadHTMLFiles = require("./utils/loadFiles");
const extractVisibleText = require("./utils/extractVisibleText");
const groupSimilarDocs = require("./utils/groupSimilarDocs");

async function runClustering() {
  const rawFiles = await loadHTMLFiles();

  const docs = rawFiles.map((file) => ({
    name: file.name,
    text: extractVisibleText(file.content),
  }));

  const groups = groupSimilarDocs(docs);
  console.log("Grouped HTML files:\n", groups);
}

runClustering();
