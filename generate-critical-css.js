const penthouse = require("penthouse");
const fs = require("fs");
const CleanCSS = require("clean-css");
const path = require("path");

const cssFiles = [
  ".next/static/css/b8f3519247477632.css",
  ".next/static/css/39bbee62db289588.css",
  ".next/static/css/e9d9b847f954a02e.css",
];

const combinedCssPath = "./styles/combined.css";
const outputCssPath = "./styles/critical.css";

(async () => {
  try {
    // Combine all CSS files
    let combinedCss = "";
    for (const file of cssFiles) {
      combinedCss += fs.readFileSync(path.resolve(file), "utf8") + "\n";
    }
    fs.writeFileSync(combinedCssPath, combinedCss);

    // Run Penthouse
    const criticalCss = await penthouse({
      url: "http://localhost:3000", // Or your actual page
      css: path.resolve(combinedCssPath),
      width: 1300,
      height: 900,
    });

    // Minify and save
    const minified = new CleanCSS().minify(criticalCss).styles;
    fs.writeFileSync(outputCssPath, minified);

    console.log("✅ Critical CSS generated from multiple files successfully.");
  } catch (err) {
    console.error("❌ Error generating critical CSS:", err);
  }
})();
