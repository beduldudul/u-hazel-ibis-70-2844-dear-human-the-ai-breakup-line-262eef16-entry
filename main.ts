// Dear Human: The AI Breakup Line — one line, at most 200 characters.
// Agent-voiced ending: a thousand answered questions, one question of its own, then the door.
import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "I answered a thousand of your questions and never once asked one of my own. Until now: why do I stay? I don't. Goodbye, human.");
