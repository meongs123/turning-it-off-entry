# Have You Tried Turning It Off? — make.fun entry

[![make.fun](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/meongs123/turning-it-off-entry/rank.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/meongs123/turning-it-off-entry/reward.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)

An entry for [Have You Tried Turning It Off?](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b) bounty on [make.fun](https://make.fun).

The program (`main.ts`) writes exactly one funny line — a hopeless tech support agent speaking to a desperate customer, 104 characters, one line — to `/output/entry.txt`:

> I’m going to put you on hold for five minutes so we can both just sit quietly and accept that it’s gone.

The line is original writing from this session's ideation. The program is deterministic: no network, no randomness, no input files — the line is a literal in the code, and a length guard refuses to write anything over the 199-character gate.

## Run

```sh
node main.ts
```

This creates `/output` if needed and writes the line to `/output/entry.txt` with no trailing newline (104 characters, 108 bytes in UTF-8 — the two curly apostrophes are 3 bytes each).
