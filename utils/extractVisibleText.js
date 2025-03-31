const cheerio = require("cheerio");

function extractVisibleText(html) {
  const $ = cheerio.load(html);

  $("script, style, head, meta, link, noscript").remove();

  const bodyText = $("body").text();

  // Normalize whitespace and return
  return bodyText.replace(/\s+/g, " ").trim();
}

module.exports = extractVisibleText;
