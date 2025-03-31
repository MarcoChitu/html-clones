# 🧬 HTML Clones - Web Page Similarity Detection

This project is a solution to the **HTML Clones Challenge** by Veridion. The goal is to design an algorithm that groups together HTML documents which are **visually similar from a user's perspective** when rendered in a browser.

---

## 🎯 Project Objective

> “Design an algorithm that groups together HTML documents which are similar from the perspective of a user who opens them in a web browser.”

---

## 🧠 How It Works

The core idea is to focus on what **real users see**, not how the HTML is written.

### ✅ Steps:

1. **Load HTML files** from multiple subdirectories (`tier1`, `tier2`, etc.).
2. **Extract visible text** using `cheerio`, ignoring scripts, styles, and metadata.
3. **Compare each page's visible content** using a similarity score.
4. **Group pages** that have ≥ 95% similarity into the same cluster.

---

## 💡 Tech Stack

- **Node.js** – for file system and execution
- **Cheerio** – HTML parsing and text extraction
- **string-similarity** – fuzzy matching of visible text
- **fast-glob** – recursive file search

---

## 📁 Folder Structure

HTML-CLONES/
├── clones/
│   ├── tier1/
│   ├── tier2/
│   ├── tier3/
│   └── tier4/
├── node_modules/
├── package.json
├── package-lock.json
├── index.js                      
└── utils/                        
    ├── loadFiles.js             
    ├── extractVisibleText.js    
    └── groupSimilarDocs.js      


---

## 🚀 Running the Project

### 1. Install dependencies

```bash
npm install
```
