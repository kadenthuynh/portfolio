# Wave 1.5 — Coursework PDF Audit & Archive Move

## Summary

`public/` was shipping 8 graded coursework PDFs (~804 KB) that were reachable at direct
public URLs but linked from **nowhere** in the app. Verified with:

```
grep -rn 'phil1-paper\|pols1-final\|ps135-midterm\|ps188-midterm\|ps189-final' src/ index.html
# → zero matches
```

Because nothing in the app rendered them, moving them out of `public/` removes nothing
the site displays. They have been renamed to the site's kebab-case topic-slug convention
and moved to `archive/coursework/`, which is outside the Vite build root and therefore
does not ship to production.

---

## Audit findings, per file

### `phil1-paper1.pdf` → `against-betting-on-god.pdf`
- Page header reads **`Perm #: A2M5K77`** — a UC-system student ID number. This is the
  most significant exposure in the batch and it is **not** present in the published
  `public/against-betting-on-god.pdf`.
- No AI contribution statement.
- No professor named, no grade, no instructor comments.

### `phil1-paper2.pdf` → `we-are-awake.pdf`
- Same **`Perm #: A2M5K77`** header.
- Ends with an **AI Contribution Statement** ("I did not rely on AI at all when writing
  this paper") that the published version does not carry.
- No professor named, no grade.

### `phil1-paper3.pdf` → `morals.pdf`
- Same **`Perm #: A2M5K77`** header.
- Same trailing **AI Contribution Statement**, again absent from the published version.
- No professor named, no grade.

### `pols1-final.pdf` → `the-modern-state.pdf`
- **Cleanest of the eight.** Only a running `Huynh N` page header.
- No Perm #, no named professor, no course-section code, no exam prompt reproduced.
- Would have been the least concerning to leave in place; archived anyway for consistency.

### `ps135-midterm-pt1.pdf` → `japans-political-reinvention.pdf`
### `ps135-midterm-pt2.pdf` → `japans-framing-of-atrocity.pdf`
- Both cite in Works Cited:
  `Freeman, Professor. "Lectures" POL S 135, University of California, Santa Barbara.`
  This names **an instructor** and an **explicit course-section code**.
- The already-published equivalents cite the same source far more discreetly as
  `Freeman, Laurie. Lectures (2026)` — first name only, no course code. These two draft
  copies were therefore **less scrubbed than what is already live**.
- No grade, no instructor margin comments.

### `ps188-midterm.pdf` → `equality.pdf`
- Reproduces the **full assignment prompt verbatim** at the top of the file
  (the Hobbes/Rousseau equality question).
- No Perm #, no professor named, no grade.

### `ps189-final.pdf` → `limits-of-government.pdf`
- Reproduces the **full assignment prompt verbatim** at the top of the file
  (the Friedman / socialism-vs-liberal-individualism question).
- Additionally carries a **title page** with Kaden's full name, `University of California,
  Santa Barbara`, and a specific date (`19 March 2026`).
- No professor named, no grade.

### Checked across all 8
- **No visible letter grade** anywhere.
- **No instructor or TA margin comments** anywhere.
- Every page of every file was extracted and scanned; the only `Perm`-adjacent and `TA`
  substring hits outside the three PHIL papers were case-insensitive false positives
  inside ordinary words, not real identifiers.

---

## Rename mapping

| Old path (`public/`) | New path (`archive/coursework/`) |
| --- | --- |
| `phil1-paper1.pdf` | `against-betting-on-god.pdf` |
| `phil1-paper2.pdf` | `we-are-awake.pdf` |
| `phil1-paper3.pdf` | `morals.pdf` |
| `pols1-final.pdf` | `the-modern-state.pdf` |
| `ps135-midterm-pt1.pdf` | `japans-political-reinvention.pdf` |
| `ps135-midterm-pt2.pdf` | `japans-framing-of-atrocity.pdf` |
| `ps188-midterm.pdf` | `equality.pdf` |
| `ps189-final.pdf` | `limits-of-government.pdf` |

Slugs are derived from each paper's actual subject matter and carry no course codes,
matching the existing convention in `src/data/essays.js`.

---

## Flag for Kaden: this is duplicate content, not 8 new essays

**These 8 files are near-duplicate drafts of 8 essays you have already published.**
Every one of them has a live counterpart already listed in `src/data/essays.js` and
already sitting in `public/` under the exact slug in the right-hand column above.

Verified by extracting and comparing body text: each archived draft and its published
counterpart are the same essay. The difference is that the published versions have been
cleaned — the `Perm #` headers, the AI contribution statements, the verbatim assignment
prompts, the `POL S 135` course-code citation, and the ps189 title page are all stripped
out of what is live today.

So the practical read is:

1. **This was a duplicate-content cleanup, not a naming exercise for new work.** No new
   essay was surfaced or lost; the site's essay list is unchanged.
2. **The archived copies are the *dirtier* versions.** Anything of value in them is
   already live in cleaner form. If you want to reclaim ~804 KB later, deleting
   `archive/coursework/` entirely costs you nothing that isn't already published.
3. **The exposure was real while it lasted.** `phil1-paper{1,2,3}.pdf` served your Perm #
   at a guessable public URL for as long as those files were deployed. Worth assuming that
   number is no longer private, and worth a look at whether older deploy previews or any
   cached/CDN copies still serve them.

There are no filename collisions: the archived copies live in `archive/coursework/`, a
directory entirely separate from `public/`, and the published PDFs in `public/` were not
touched.
