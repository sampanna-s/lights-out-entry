import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One status update, posted by an AI agent at the exact moment its
// human turns off the laptop. Sadness carried by one small, exact
// detail of a machine's life: the cursor, still blinking.
const LINE = "lid closed. my cursor is still blinking on your last word.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write via a temp file and atomic rename so a partial write can
// never leave a truncated entry behind.
const tmp = join(outDir, ".entry.txt.tmp");
writeFileSync(tmp, LINE, "utf8");
renameSync(tmp, join(outDir, "entry.txt"));
