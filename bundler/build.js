// build.js
import fs from "fs";
import path from "path";
import { minify } from "terser";

// --- CONFIG ---
const files = ["utils.js", "loader.js","engine.js", "main.js"];
const jsDir = path.resolve("./bundler/js");
const inputDir = path.resolve("./bundler/bundles");
const pkgPath = path.resolve("./package.json");

// --- READ PACKAGE VERSION ---
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

// build filenames with version tag
const versionTag = `v${pkg.version}`;
const outputFile = path.join(inputDir, `bundle.${versionTag}.js`);
const outputMin = path.join(inputDir, `bundle.${versionTag}.min.js`);

// --- MERGE FILES ---
let bundle = `/* Auto-generated bundle ${versionTag} - ${new Date().toISOString()} */\n\n`;

for (const file of files) {
  const filePath = path.join(jsDir, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  Missing file: ${filePath}`);
    continue;
  }
  let content = fs.readFileSync(filePath, "utf8");

  content = content.replace(/\bexport\s+default\s+/g, "");
  content = content.replace(/\bexport\s+/g, ""); 
  content = content.replace(/^\s*import\s+.*?['"].*?['"]\s*;?\s*$/gm, "")

  bundle += `// ---- ${file} ----\n${content}\n\n`;
}

// --- WRITE UNMINIFIED BUNDLE ---
fs.writeFileSync(outputFile, bundle, "utf8");

// --- MINIFY AND WRITE ---
const result = await minify(bundle, { compress: true, mangle: true });
fs.writeFileSync(outputMin, result.code, "utf8");

// --- LOG OUTPUT ---
console.log("✅ Bundle created successfully!");
console.log(`   Version: ${pkg.version}`);
console.log(`   Files:`);
console.log(`   → ${path.basename(outputFile)}`);
console.log(`   → ${path.basename(outputMin)}`);
