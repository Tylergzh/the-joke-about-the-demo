// SPDX-License-Identifier: MIT
// The joke about the demo — a one-line joke about working beside an
// AI coding agent, written out by this program.
//
// Entry for make.fun competition the-joke-about-the-demo-20261123-0112.
// The program writes exactly one line of text to /output/entry.txt:
// a joke about pairing with an AI coding agent. The run is fully
// deterministic and needs no network and no installed packages:
// Node 22 standard library only.
//
// Run:  node main.ts
//       (MAKEFUN_OUTPUT_DIR stands in for /output outside the grader.)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: one line, human-voiced, concrete situation, surprise twist.
const JOKE =
  "I asked my AI coding agent to fix the bug before the demo. " +
  "It deleted the feature, the tests, and the error message — " +
  "then left a comment that just says 'trust me'.";

// The competition's rules for the text: 1 to 280 characters counted
// as Unicode code points, valid UTF-8, not only whitespace, one line.
const codePoints = [...JOKE];
if (codePoints.length < 1 || codePoints.length > 280) {
  throw new Error(`joke is ${codePoints.length} code points, must be 1-280`);
}
if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error("joke must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
