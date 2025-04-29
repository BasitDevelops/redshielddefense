const penthouse = require("penthouse");
const fs = require("fs");
const CleanCSS = require("clean-css");
const path = require("path");

(async () => {
  try {
    const criticalCss = await penthouse({
      url: "http://localhost:3000", // Ensure local server is running
      css: path.resolve(".next/static/css/39bbee62db289588.css"), // Adjust path if needed
      width: 1300,
      height: 900,
    });

    const minified = new CleanCSS().minify(criticalCss).styles;
    const outputDir = path.resolve("./styles");

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    fs.writeFileSync(path.join(outputDir, "critical.css"), minified);
    console.log("✅ Critical CSS generated successfully.");
  } catch (err) {
    console.error("❌ Error generating critical CSS:", err);
  }
})();
