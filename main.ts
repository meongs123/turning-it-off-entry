// Entry for the make.fun bounty "Have You Tried Turning It Off?"
// (u-motasimfuad-have-you-tried-turning-it-off-154a938b).
//
// The program writes exactly one line — a hopeless tech support agent
// speaking to a desperate customer — to /output/entry.txt, with no
// trailing newline. It is fully deterministic: no network, no random
// input, no files read, no clock. The line is a literal below.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I'm escalating your case to our specialist team now, sir — they're me, in a different chair, with a taller mug.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

if ([...line].length > 199) {
  throw new Error("entry line exceeds the 199-character gate");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, line, "utf8");
