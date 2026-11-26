import { mkdirSync, writeFileSync } from "node:fs";

// Roast the Smart Fridge: one line, best laugh wins.
// Judge brief: roast a smart home gadget in one line; laugh first,
// originality of the angle second; specific real behaviour, no stock
// joke, no second sentence. The line below is 92 characters.
//
// Candidates scored (laugh / originality / specificity, 1-5):
//  - door-alarm beep / smoke alarm with abandonment issues: 4 / 5 / 5 —
//    the winner: a real smart-fridge behaviour (the door-open beep after
//    a minute), a fresh image nobody has used, and the sting lands last.
//  - egg census, acts surprised at the last egg: 4 / 4 / 5 — close second,
//    but the census image is a setup that takes longer to land.
//  - dims its own light at 2am, can't bear to watch: 4 / 4 / 4.
//  - camera inside watches leftovers more than life choices: 4 / 4 / 4.
//  - neighbour knocks over the door alarm, deciding on cheese: 4 / 4 / 5,
//    funnier payoff but 111 chars and a clunkier two-clause build.
//  - single olive in the door, Wi-Fi + touchscreen + opinions: 3 / 4 / 4.
//  - shopping list emailed, now we just hum at each other: 3 / 4 / 3.
//  - plays innocent over the last slice of cake: 3 / 3 / 4 — familiar trope.
const LINE =
  ((s: string) => { if (!s || s.length < 1 || s.length > 160 || s.includes("\n")) throw new Error("entry must be a single line, 1-160 chars"); return s; })("My fridge beeps if its door stays open a minute, like a smoke alarm with abandonment issues.");

// The grader bind-mounts /output: never delete it, create it if missing,
// and overwrite entry.txt in place.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
