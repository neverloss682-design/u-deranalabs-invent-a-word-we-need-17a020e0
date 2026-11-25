// Invent a Word We Need — entry program.
//
// Writes the entry (one invented word + one-line definition) to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node stdlib only. Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "waveshame \u2014 The sudden shame of waving back at a stranger who was waving at the person behind you.";

// The gate requires 1–140 characters of UTF-8 text; fail loudly if the
// entry ever drifts out of range instead of shipping an invalid entry.
if ([...ENTRY].length < 1 || [...ENTRY].length > 140) {
  throw new Error(`entry is ${[...ENTRY].length} chars, must be 1–140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
