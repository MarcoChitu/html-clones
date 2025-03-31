const stringSimilarity = require("string-similarity");

function groupSimilarDocs(docs, threshold = 0.95) {
  const groups = [];
  const visited = new Set();

  for (let i = 0; i < docs.length; i++) {
    if (visited.has(i)) continue;

    const group = [docs[i].name];
    visited.add(i);

    for (let j = i + 1; j < docs.length; j++) {
      if (visited.has(j)) continue;

      const similarity = stringSimilarity.compareTwoStrings(
        docs[i].text,
        docs[j].text
      );

      if (similarity >= threshold) {
        group.push(docs[j].name);
        visited.add(j);
      }
    }

    groups.push(group);
  }

  return groups;
}

module.exports = groupSimilarDocs;
