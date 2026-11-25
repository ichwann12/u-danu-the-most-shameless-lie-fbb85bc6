// The Most Shameless Lie — u-danu-the-most-shameless-lie-fbb85bc6
// Reads the single confession line from entry.txt at the repo root and
// Writes it verbatim to entry.txt in the output directory.
// The entry is one line only: no setup, no excuse, no explanation.
// Stdlib only, no network, no wall clock.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const entryPath = join(repoRoot, "entry.txt");
const text = readFileSync(entryPath, "utf8");

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_BOT_DIR ||
  join(repoRoot, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
