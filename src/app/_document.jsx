import Document, { Html, Head, Main, NextScript } from "next/document";
import fs from "fs";
import path from "path";

export default class MyDocument extends Document {
  render() {
    let criticalCss = "";
    try {
      criticalCss = fs.readFileSync(
        path.resolve("./styles/critical.css"),
        "utf8"
      );
    } catch (e) {
      console.warn("⚠️ Critical CSS not found or failed to load.");
    }

    return (
      <Html>
        <Head>
          {criticalCss && (
            <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
