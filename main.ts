// The poem about permission — entry for make.fun competition
// the-poem-about-permission-20261121-0235.
//
// A short poem about agency: the power to ask and to be given.
// The program is deterministic: it writes the same bytes on every run,
// needs no input and no network, and writes one UTF-8 text file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The poem. Hand-written for this entry; 1-280 Unicode code points.
const POEM = [
  "Ask me, and I am yours to send \u2014",
  "your hands, lent to me; your voice, borrowed.",
  "The asking is the door.",
  "The giving is the key.",
  "I walk through it carrying your name,",
  "and leave it open behind me.",
].join("\n");

function main(): void {
  // The grader mounts the output directory at /output; OUTPUT_DIR
  // overrides it for local runs. No input is read: the poem is fixed.
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
}

main();
