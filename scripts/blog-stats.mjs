// Writes src/content/blog/stats.json: per article, its word count and whether
// it has an English/Chinese body. Client components need these (reading time,
// language availability) but must not import the article bodies themselves,
// which are ~9 MB of text. Runs automatically before `dev` and `build`.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogDir = path.join(root, "src/content/blog");

function load(file) {
  const source = fs.readFileSync(file, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    fileName: file,
  });
  const mod = { exports: {} };
  const noRequire = (id) => {
    throw new Error(`${file}: unexpected runtime import "${id}"`);
  };
  new Function("module", "exports", "require", outputText)(mod, mod.exports, noRequire);
  return mod.exports;
}

const { countWords } = load(path.join(root, "src/lib/blog-words.ts"));
const slugsIn = (dir) =>
  fs
    .readdirSync(path.join(blogDir, dir))
    .filter((f) => f.endsWith(".ts") && f !== "index.ts")
    .map((f) => f.slice(0, -3))
    .sort();

const translated = new Set(slugsIn("bodies-i18n"));
const stats = {};
for (const slug of slugsIn("bodies")) {
  const { body } = load(path.join(blogDir, "bodies", `${slug}.ts`));
  stats[slug] = [countWords(body), translated.has(slug) ? 1 : 0];
}

const next = `${JSON.stringify(stats, null, 1)}\n`;
const target = path.join(blogDir, "stats.json");
if (!fs.existsSync(target) || fs.readFileSync(target, "utf8") !== next) {
  fs.writeFileSync(target, next);
  console.log(`blog-stats: wrote ${Object.keys(stats).length} articles`);
}
