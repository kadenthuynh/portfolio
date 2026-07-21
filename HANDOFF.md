# Portfolio remediation — handoff prompt

Paste everything below the line into a fresh Claude Code session started in `/Users/kadenhuynh/Projects/Portfolio`.

---

Execute a full remediation pass on this portfolio. Use the `dynamic-dev` workflow (Workflow tool, `{name: "dynamic-dev", args: {task: "<the task below>"}}`) — this is multi-feature work across ~15 files and I am explicitly opting into multi-agent orchestration. Do not run `grill-me` first; requirements are pinned below. Read this entire brief before launching.

## Context

`/Users/kadenhuynh/Projects/Portfolio` — Kaden Huynh's personal portfolio, deployed to **https://kaden.me/**. React 19 + Vite + Tailwind + framer-motion, ~2000 lines in `src/`. All copy lives in `src/data/content.js` and `src/data/essays.js`; components never hardcode text. Read `PRODUCT.md` before touching anything.

Audience: law school admissions readers (UCLA/Berkeley targets), attorneys, legal mentors, recruiters. They arrive from a resume link or LinkedIn and skim in **under two minutes**. Desktop-first, mobile must hold.

Brand: scholarly, precise, understated. Editorial legal-brief feel — EB Garamond display, mono metadata, one gold accent, light + dark themes. **Confidence through restraint.**

This work comes from a completed audit: an Impeccable critique (29/40) plus a 5-member review council with blind peer cross-ranking. The full report is at `.impeccable/critique/2026-07-21T09-06-55Z__src.md` — **read it first.** Every finding below was independently verified against the source; the file:line references are accurate as of 2026-07-21.

## Hard constraints — do not violate

These were explicitly ruled on by the council. An agent that "improves" them is making the site worse:

1. **Do not add a display headline, hero pull-quote, or larger type scale.** The flat, document-like typographic register is the site's biggest asset for this audience. A 48-64px serif headline is the single most recognizable move in the grammar PRODUCT.md rejects. Four of five peer rankers ruled against it.
2. **Do not change the featured essay.** "Limits of Government" stays in the hero slot. Only its blurb framing changes (see 3.4).
3. **Do not touch the color tokens used on small text** — notably light-mode `--accent: #7a5c26`. Both themes currently pass WCAG AA with zero failures; that is rare and it must stay true. Re-verify contrast after any color change.
4. **Do not remove framer-motion** and do not refactor the section components into a shared abstraction. Both were considered and rejected — the duplication is correct and cheap.
5. **Do not delete the FoldMap** (`src/components/ui/fold-map.jsx`). It is one of only two genuinely authored moments on the page.
6. **Do not add `robots.txt` with `Allow: /` or a sitemap** in this pass.
7. **Do not rewrite whole files.** Surgical edits only, matching existing style.
8. **Delete nothing that currently renders.** This is Kaden's explicit ruling and it overrides every deletion recommendation in the source audit. The only permitted removals are dead code — imported by nothing, exported and never consumed, or styled and never rendered. Verify with grep before removing anything. Every piece of content, copy, credential, section, tag, and illustration currently visible on the site stays, including the ones an earlier review argued against (see 2.1b for the explicit list).
9. **Do not rewrite Kaden's prose about himself without approval.** The About Me intro, the featured essay blurb, and `contact.body` are propose-only: write before/after into `PROPOSALS.md` at the repo root and leave `content.js` untouched. The one exception is the Legal Directory CRM description (1.6), which he commissioned directly.

## The work

Organize into waves. Waves 1 and 2 are independent and can run in parallel; wave 3 depends on nothing but should land after so its verification is meaningful.

### Wave 1 — P0 correctness and professionalism

**1.1 — Sections render blank to anything that does not scroll.**
Content rows use framer-motion `whileInView` with an `opacity: 0` initial state. Verified: on a fresh load with no scrolling, `#education .row`, `#experience .row`, and `#leadership .row` all compute `opacity: 0`. Six of eight sections are blank to print-to-PDF, Reader mode, and headless capture. `MotionConfig reducedMotion="user"` does **not** rescue it — framer-motion excludes opacity from the reduced set. (Deep links like `/#writing` DO work correctly — verified — so scope is print/capture only.)

Fix, in this order:
- Add a print backstop to `src/index.css`:
  ```css
  @media print {
    *, *::before, *::after { opacity: 1 !important; transform: none !important; }
    .side-figure, .theme-btn { display: none; }
  }
  ```
- Invert the reveal so visible is the default state and motion subtracts from it, rather than content being gated behind a class-triggered transition.
- **Delete the reveal entirely** from Education, Experience, Leadership, and Skills. Dense factual rows a reader scans in two minutes should be present on arrival. Keep reveals on Intro, Writing, Projects, Contact.

Verify: load the page, do not scroll, press ⌘P. All eight sections must have content in the print preview.

**1.2 — Primary CTA is a hardcoded Gmail compose URL.**
`src/components/Contact.jsx:26` uses `https://mail.google.com/mail/?view=cm&fs=1&to=${meta.email}`. This dead-ends anyone on Outlook, institutional webmail, or signed out of Google. `src/components/Sidebar.jsx:77` already uses `mailto:` correctly for the same address.
Fix: change to `` href={`mailto:${meta.email}`} `` and remove `target="_blank"`.

**1.3 — Sidebar exposes a personal cell; resume and LinkedIn are buried in section 07.**
`src/components/Sidebar.jsx:82-85`. The phone converts nothing with this audience, occupies persistent real estate at every scroll position, and permanently exposes a number to scrapers. Meanwhile `public/resume.pdf` and `meta.linkedin` only appear at the very bottom of the page.
Fix: **add** `/resume.pdf` (`target="_blank"`) and `meta.linkedin` to the sidebar alongside the existing email. Leave the Contact-section links in place too.

**Keep the phone number.** An earlier review recommended removing it; Kaden has ruled that content he put on the site stays. Add the two new links around it rather than swapping it out. If the sidebar gets crowded, adjust the layout — do not solve it by dropping the number.

**1.4 — Lead Experience entry is a job that has not started, in present tense.**
`src/data/content.js:74-81`: Writing Tutor at UCSB CLAS, `period: "Sep 2026 – Jun 2027"`, bullets read "Provide one-on-one writing support…". Today is July 2026. It is the first professional claim a reader sees, and an admissions reader who does the arithmetic then re-examines every other claim on the page.
Fix: prefix the period with `"Incoming · "` (or reuse the existing badge pattern from Education). Rewrite both bullets in selection/scope language, e.g. "Selected to provide one-on-one writing support across prompt analysis, drafting, structure, and argumentation."

**1.5 — Coursework PDFs: rename, audit, and remove from the deploy.**
`public/` currently ships 8 graded coursework PDFs that are referenced nowhere in `src/` or `index.html` and resolve at direct public URLs (~804KB total): `phil1-paper1.pdf`, `phil1-paper2.pdf`, `phil1-paper3.pdf`, `pols1-final.pdf`, `ps135-midterm-pt1.pdf`, `ps135-midterm-pt2.pdf`, `ps188-midterm.pdf`, `ps189-final.pdf`.

Do all three steps:
- **Audit each file first.** Open every one and check for: a visible letter grade, instructor or TA margin comments, a named professor, a course section number, or a reproduced exam prompt. **Report what you find before proceeding** — do not silently move a file that has a problem.
- **Rename to the existing essay convention.** The 8 curated essays use kebab-case topic slugs with no course codes: `against-betting-on-god.pdf`, `equality.pdf`, `japans-framing-of-atrocity.pdf`, `japans-political-reinvention.pdf`, `limits-of-government.pdf`, `morals.pdf`, `the-modern-state.pdf`, `we-are-awake.pdf`. Rename the coursework files to match — derive each slug from the paper's actual subject by reading it, **not** from its course code. Keep a mapping table in your final report.
- **Move them out of `public/`** to `archive/coursework/` at the repo root. Nothing graded ships to production. Confirm afterward that `npm run build` output contains none of them.

**1.6 — Legal Directory CRM description.**
`src/data/content.js:165-171`. Current copy, verbatim, is the one item on the site that can actively subtract from Kaden's position: *"a growing network of 50+ attorneys, judges, and mentors"*, *"cuts outreach drafting time roughly 90%"*, *"the AI email drafter writes from a detailed style guide baked into its system prompt."* A mentor who received a warm note from Kaden and then reads this learns they are a tracked record receiving machine-drafted email. Naming judges compounds it.

Rewrite it so it **showcases real AI/engineering proficiency** — that is the goal, not sanitizing it into nothing — while removing the surveillance framing and the unverifiable metric. Requirements for the new copy:
- Keep and foreground the genuinely impressive engineering: **PBKDF2 key derivation and AES-GCM client-side credential encryption**, Supabase cross-device sync, Vercel serverless functions driving the Google Calendar and Gmail integrations, and the structured-context design of the Claude API integration.
- Describe the AI component as **structuring and retrieving context** — turning meeting notes into structured records, surfacing the right history before an interaction — rather than as writing emails on his behalf.
- Replace "attorneys, judges, and mentors" with a neutral term like "professional contacts."
- **Delete the "roughly 90%" claim entirely.** Do not soften it, do not replace it with a smaller number. No unlinked metrics survive this pass.
- Keep it to two paragraphs, matching the register of the other project entries. Precise and technical, not promotional.

**Scope limit:** this rewrite applies to the Legal Directory CRM entry only, because Kaden commissioned it directly. Do **not** touch the other project entries' figures — "Launched to 10+ private-beta users" (`content.js:157`) and "increased online orders by 25%" (`content.js:91`) stay as written. If you think they need substantiating, note it in your report; the better fix there is linking a source, not cutting the number, and that is Kaden's call.

Also: wire `meta.github` (`content.js:15`, currently referenced nowhere) into the Contact section beside LinkedIn.

### Wave 2 — deletions and copy

**2.1 — Delete dead code ONLY.**

Kaden has ruled on this explicitly: **delete nothing that currently renders.** The only removals permitted in this pass are things that are already invisible to a visitor — code and assets that are imported by nothing, exported and never consumed, or styled and never rendered. If removing it would change a single pixel a reader sees, it is out of scope.

Permitted removals:
- `src/components/ui/card.jsx` — imported by nothing (verify with grep before removing)
- `src/assets/hero.png` — referenced nowhere in `src/` or `index.html` (verify)
- The unused `interests` export (`content.js:303-311`) and `stats` export (`content.js:25`) — both consumed by no component (verify)
- The `.b-rule { display: none }` rule (`index.css:137`) together with the scaleX animation in `BlockHead.jsx:26-32` that animates that permanently-hidden element
- `tailwind-merge` — 8.3kB gzipped resolving zero class conflicts across eight `cn()` calls. Change `src/lib/utils.js` to return `clsx(inputs)` and drop the dependency. **Keep** `class-variance-authority` and `lucide-react`.
- `public/favicon.png` (47.7KB) once the link points at the existing `favicon.svg` — see 3.8

**Verify each one is genuinely unreferenced before deleting.** If grep finds a use, leave it and report it.

**2.1b — Explicitly OUT OF SCOPE. Do not remove these.**

An earlier review recommended cutting all of the following. Kaden has overruled that. They stay, unchanged, unless he says otherwise in a later session:

- The Microsoft Office and Google Workspace skill groups (`content.js:292-293`)
- The Westview High School education entry (`content.js:62-69`) — note its AP Scholar with Distinction, Seal of Biliteracy in Spanish, and 4.3 GPA appear nowhere else on the site
- The recreational entries in Education activities (`content.js:41-48`) — Men's Beach Volleyball, Strikers Club, Gaucho Gaming
- The scales-of-justice illustration (`src/components/ui/scales.jsx`, `Sidebar.jsx:114-116`)
- The AI-attribution sentence in the intro (`content.js:21`)
- The unlinked figures "Launched to 10+ private-beta users" (`content.js:157`) and "increased online orders by 25%" (`content.js:91`)

If you believe one of these is genuinely harmful, **say so in your final report and leave it in place.** Do not act on it.

**2.2 — Rewrite the About Me intro** (`content.js:17-22`).
Currently opens "Hello! My name is Kaden and I'm currently pursuing a B.A. …" — a cover-letter salutation in the highest-value real estate on the site, followed by a paragraph on volleyball, the weight room, and boxing, and "extensive experience in customer service" underselling four years of shift leadership. It establishes that the candidate does not yet write like a professional, one section above eight analytic papers that prove he does.

**Use the unused `bio` field at `content.js:16` as your source material and voice reference** — it is already better written than all four rendered paragraphs and is currently rendered nowhere: *"UCSB student studying Political Science and Philosophy with a focus on political theory, law, and public service. Trilingual in English, Spanish, and Vietnamese, shaped by time across San Diego, Colombia, Spain, and Japan."* That is the register. The rewrite should be plainer than the current intro, not more florid.

**PROPOSE ONLY — do not apply this edit.** This is Kaden's own prose about himself, and he has ruled that his content stays unless he approves the change. Write your proposed version into `PROPOSALS.md` at the repo root as a before/after, and leave `content.js` untouched.

Draft **two** alternatives so he can choose:
- Version A — tightened but complete: keeps all four paragraphs and their subject matter, fixes only the register (drop the "Hello! My name is" opener, drop the exclamation points, replace "extensive experience in customer service" with something that reflects the four years of shift leadership at `content.js:83-95`).
- Version B — condensed to two paragraphs: (1) what he studies, the specific intellectual interest, and the goal with a cycle ("applying in the 2027 cycle"); (2) the through-line connecting parliamentary debate, the Vietnamese youth organizing, the trilingual background, and building software.

**Do not cut the athletics/clubs material or the AI sentence on your own initiative** — if Version B drops them, say so explicitly in the proposal so the tradeoff is visible.

Same treatment for `contact.body` (`content.js:300`): propose a version naming a specific ask, into `PROPOSALS.md`, do not apply.

**2.3 — Reframe the featured essay blurb** (`content.js:220-233`, excerpt at `:225`).
It currently closes "I further assert that socialism offers the basis for a better society" — written as Kaden's personal creed rather than as the argument the paper advances. Keep `featured: true` where it is; the essay selection is correct and the interlocutor panel makes its genre legible.
**PROPOSE ONLY — do not apply.** Also Kaden's own words. Write the proposal into `PROPOSALS.md`: recast in the third person as the paper's thesis, e.g. "Draws on Cohen and Fraser to argue that market freedom produces domination rather than liberty, and evaluates socialist alternatives in Gorz and Miller." Same rigor, no creed. Leave `content.js` untouched.

**2.4 — Render `meta.role`.**
`content.js:6` holds `"Political Science & Philosophy\nUniversity of California, Santa Barbara"` and `.side-role` is fully styled at `index.css:70` — neither is ever rendered. The sidebar currently shows a name and contact details and nothing identifying. Render `meta.role` in the existing `.side-role` slot beneath the name in `Sidebar.jsx`.

### Wave 3 — accessibility, semantics, performance

**3.1 — No `h1` or `h2` exists on the page.** Live DOM audit returns `h1count: 0, h2count: 0`; all 13 headings are orphan `h3`/`h4`. Screen-reader heading navigation is unusable, and there is no SEO anchor for someone Googling "Kaden Huynh UCSB".
Fix: `Sidebar.jsx:73` `.side-name` → `<h1>`. `BlockHead.jsx:18` `.b-title` → `motion.h2`. Demote existing `h3`/`h4` by one level to keep the outline valid. The `.b-title` CSS already sets size and weight, so **this must produce zero visual diff** — verify with before/after screenshots.

**3.2 — Focus rings are removed and never replaced.** `src/components/ui/button.jsx:5` — the `cva` base string contains `focus-visible:outline-none` with no replacement ring (a shadcn base string with its `focus-visible:ring-*` half dropped). Measured: theme toggle and modal close button both compute `outline-color: rgba(0,0,0,0)`, `box-shadow: none` while `:focus-visible` matches. Affects the theme toggle, modal Close, and "Open PDF".
Fix: replace with `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`. The cards already do this correctly (`index.css:143, 168`) — match them.

**3.3 — Modal has no focus management.** `Writing.jsx` and `Projects.jsx` modals have `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, an Escape handler, and body scroll lock — but never move focus in on open, never restore it to the trigger on close, and have no Tab cycle guard. `grep` for `focus()`, `autoFocus`, `inert`, `FocusTrap` across `src/` returns zero matches.
Fix: extract one shared hook used by both modals — store the triggering element, focus the modal container on open, trap Tab within the dialog, restore focus to the trigger on close.

**3.4 — Light mode has no visible card structure.** `--bg`, `--panel`, and `--surface` are all `#ffffff` (`index.css:27-29`). Measured `--line2` at **1.53:1** against the background and `--line` at roughly **1.2:1** — far below the 3:1 non-text threshold. The featured hero, essay cards, project cards, and tool brackets all visually dissolve for daytime desktop readers, who are the primary persona.
Fix: set `--panel: #fbfaf7` so cards sit on a tinted plane, and darken `--line` to about `#d8d5cd`. **Re-verify that all text pairs still pass AA in both themes afterward.**

**3.5 — Bullets run 124ch.** `.bullets li` (`index.css:253-255`) has no `max-width`, while `.intro p` correctly caps at 58ch and `.feat-hero-desc` at 74ch. Nearly double the readable range, in the two sections carrying the substantive evidence.
Fix: `max-width: 78ch` on `.bullets li`.

**3.6 — Social preview tags.** `index.html` has `og:title` and `og:description` but no `og:image`, `og:url`, `twitter:*`, or canonical. Most visitors see a preview card before a pixel of the design, and unfurlers do not execute JS.
Fix: add to `<head>`, using absolute `https://kaden.me/` URLs — `og:image` (create a 1200×630 typographic card at `public/og.png`: name plus "Political Science & Philosophy · UC Santa Barbara", on brand, no photo), `og:image:width`, `og:image:height`, `og:url`, `og:site_name`, `twitter:card=summary_large_image` with matching title/description/image, `<link rel="canonical">`, and `theme-color` for light and dark.

**3.7 — Font loading.** `src/index.css:1` imports Google Fonts via CSS `@import`, which survives into the built CSS and creates a four-hop critical chain (html → css → googleapis → gstatic → font). ~450ms of render-blocking latency.
Fix: self-host as woff2 in `public/fonts/` with `font-display: swap`, preload the two faces used above the fold. **Drop EB Garamond 700 — zero uses in the codebase.** If self-hosting is rejected, at minimum move to `<link rel="preconnect">` + `<link rel="stylesheet">` in `index.html`.

**3.8 — Image weight.** `public/ucsb-seal.png` is 97.8KB natural 368×245 rendered at 92×92. `public/portrait.jpg` is 147.6KB natural 911×1080 rendered at 358×448. `public/favicon.png` is 47.7KB while `favicon.svg` already exists.
Fix: resize both raster images to ~2× their rendered size, convert to WebP with a JPEG/PNG fallback, add explicit `width`/`height` attributes and `loading`/`decoding` hints. Point the favicon link at the existing SVG and delete the PNG.

**3.9 — Theme flash.** `Sidebar.jsx:21-39` sets `data-theme` in a `useEffect`, i.e. after first paint, so a returning light-mode user sees a dark flash on every load.
Fix: add a small blocking script in `index.html` `<head>` that reads `localStorage["kh-theme"]` and sets the attribute before paint. Use `prefers-color-scheme` as the first-visit default.

**3.10 — Smaller items.**
- Nav active state highlights the wrong section while scrolling — `Sidebar.jsx:50` `rootMargin: "-40% 0px -55% 0px"` leaves only a 5% trigger band, and `Sidebar.jsx:57-61` patches the symptom with a last-section scroll hack. Widen the band and remove the hack.
- Mobile nav is `position: static` (`index.css:310`) and scrolls away permanently on a 10,295px-tall page. Make it sticky.
- `.fold-detail` (`index.css:123-124`) reveals institution and date on hover only — unreachable on touch and keyboard. Make it always visible or focus-triggered.
- Touch targets under 44×44 at 390px: theme toggle (28×28), modal close (28×28), the "Read essay →" CTA, and the 8 nav links. Pad them.
- No `<noscript>` in `index.html` — `#root` is empty, so a JS failure yields a blank white page. Add a fallback with name, email, and a link to `/resume.pdf`.
- `.athena-preview` (`index.css:189-209`) introduces teal `#79e6dc` / `#0d8578` plus a radial glow and drop-shadow as a second accent, against the stated one-accent principle, and its wordmark computes 3.09:1 in light mode. Bring it into the gold/neutral system.

### Wave 4 — consistency check (do this, report, do not auto-fix)

Diff every date, job title, employer, and figure in `src/data/content.js` against `public/resume.pdf` (PDF title metadata reads "Huynh - Resume 7/1/26"). Readers arrive from the resume and hold both documents at once; admissions file readers are trained to catch discrepancies between them. This was the review council's single largest shared blind spot — flagged by four of five cross-rankers and caught by none of the five reviewers.

**Report every discrepancy. Do not guess which side is correct** — Kaden decides that.

## Verification before you report done

Run all of these and paste real output:
- `npm run lint` — clean
- `npm run build` — succeeds; report bundle sizes before and after; confirm no coursework PDF is in the output
- Load the page, **do not scroll**, ⌘P — all eight sections have content
- Tab through the entire page — every interactive element shows a visible focus ring
- Open an essay modal via keyboard — focus enters the dialog, Tab stays trapped, Escape closes, focus returns to the card
- Compute contrast for every text token pair in **both** themes — zero AA failures, same as before this pass
- Screenshot 1440 / 768 / 390 in both themes — no horizontal overflow, no text overflow, `h1`/`h2` change produces zero visual diff
- Confirm `https://kaden.me/` og tags render correctly in a preview validator if one is reachable

## Finally

- Commit in logical chunks, one per wave, with real messages. Branch first — do not commit directly to `main`.
- Update `/Users/kadenhuynh/Documents/second-brain/content/Architecture/` with the portfolio note changes, then commit and push the vault.
- Write a session log to `/Users/kadenhuynh/Documents/second-brain/system/Sessions/`.
- Report honestly: anything skipped, anything that failed, anything you disagreed with and why. If a fix turned out to be wrong on inspection, say so instead of implementing it.
