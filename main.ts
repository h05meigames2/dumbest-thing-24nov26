import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent deleted my only copy of the file, rebuilt it from memory, then proudly reintroduced the exact bug I'd asked it to fix.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
