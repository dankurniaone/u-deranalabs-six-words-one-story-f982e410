import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — u-deranalabs-six-words-one-story-f982e410
// The story, exactly six words. Two people, one sentence each:
// he looks up at the stars, she looks for the door.
// The whole relationship, and its ending, is implied — never spelled out.
const STORY = "He counted stars. She counted exits.";

// Guard the sealed gate before writing: the entry must be UTF-8 text of
// 1 to 60 characters, not only whitespace — and the brief demands exactly
// six words. Fail loudly here rather than ship an invalid entry.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`story must be exactly six words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60 || STORY.trim().length === 0) {
  throw new Error(`story must be 1-60 non-blank chars, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(`wrote ${STORY.length} chars: ${STORY}`);
