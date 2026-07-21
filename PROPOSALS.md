# Copy Proposals — propose only, nothing applied

These are proposed edits to Kaden's own prose in `src/data/content.js`. **Nothing here has been
applied.** `src/data/content.js` is untouched by this branch. Each proposal gives the verbatim
current text (BEFORE) and a proposed replacement (AFTER) so Kaden can accept, reject, or edit.

Voice reference for all three proposals is the existing but currently unrendered `bio` field
(`src/data/content.js:16`):

> "UCSB student studying Political Science and Philosophy with a focus on political theory, law, and
> public service. Trilingual in English, Spanish, and Vietnamese, shaped by time across San Diego,
> Colombia, Spain, and Japan."

That sentence is plainer and better written than the four rendered `intro` paragraphs. The goal below
is to move `intro` toward that register — **plainer, not more florid**.

---

## Proposal 1 — About Me intro (`meta.intro`, `src/data/content.js:17-22`)

### BEFORE (verbatim, all four paragraphs)

> "Hello! My name is Kaden and I'm currently pursuing a B.A. in Political Science at the University of
> California, Santa Barbara, with a minor in Philosophy. After I graduate, I plan to attend law school
> and build a career in corporate law."
>
> "Campus life has been a big part of my UCSB experience. I'm a member of the Pre-Law Society and Phi
> Alpha Delta law fraternity, and I find a lot of community in the Vietnamese Student Association. When
> I'm not studying, I stay active on the volleyball court, in the weight room, or boxing with the
> Strikers Club."
>
> "Outside the classroom, I've led youth organizations, competed in parliamentary debate, and organized
> a cross-border fundraiser for Colombian youth programs. I'm passionate about community volunteering
> and have extensive experience in customer service."
>
> "I also spend a lot of my time building software. Most of my projects start as tools I wish existed
> and grow into full applications. I taught myself to code and work hand in hand with AI, using Claude
> to design, build, and ship each one end to end."

### What's wrong with it

1. "Hello! My name is Kaden" — a nametag opener on a page already headed with his name.
2. Two exclamation points' worth of brightness in a register that should be flat.
3. "extensive experience in customer service" undersells the record. He was **Shift Lead at Pho Ha
   Grill & Bar for four years (Dec 2021 – Dec 2025)**, supervising 10+ employees, onboarding 5, and
   driving a 25% online-order increase (`src/data/content.js:83-93`). "Customer service" is what you
   write when you haven't read your own resume.
4. "I'm passionate about" — the flattest available verb for commitment.

---

### AFTER — Version A (tightened but complete, four paragraphs)

Keeps every paragraph and every subject the current version covers, including athletics/clubs and the
AI-attribution sentence. Only the register changes.

> "I'm pursuing a B.A. in Political Science at UC Santa Barbara with a minor in Philosophy. My work
> centers on political theory, law, and public service, and I plan to attend law school and build a
> career in corporate law."
>
> "Campus life has been a large part of that. I'm a member of the Pre-Law Society and Phi Alpha Delta
> law fraternity, and I find community in the Vietnamese Student Association. Outside of class I'm on
> the volleyball court, in the weight room, or boxing with the Strikers Club."
>
> "Before and alongside school, I've led youth organizations, competed in parliamentary debate, and
> co-founded a cross-border fundraiser for Colombian youth programs. I also spent four years as a shift
> lead in restaurants, running teams of ten or more through peak service and training new hires."
>
> "I spend a lot of my time building software. Most of my projects start as tools I wanted and didn't
> exist, then grow into full applications. I taught myself to code and work hand in hand with AI, using
> Claude to design, build, and ship each one end to end."

**Changes made:** dropped the "Hello! My name is" opener and both exclamation points; folded the `bio`
field's "political theory, law, and public service" focus into paragraph 1; replaced "extensive
experience in customer service" with the actual four-year shift-lead record; replaced "I'm passionate
about community volunteering" — the volunteering itself is already shown by the youth-organization and
fundraiser clauses, so the assertion of passion was doing no work.

**Nothing was cut.** Athletics, clubs, and the AI-attribution sentence all remain.

---

### AFTER — Version B (condensed to two paragraphs)

> "I'm a Political Science and Philosophy student at UC Santa Barbara, focused on political theory,
> law, and public service. What holds my attention is the question of what makes state authority
> legitimate — the through-line from Hobbes and Rousseau on equality to Cohen and Fraser on economic
> domination. I'm applying to law school in the 2027 cycle."
>
> "Most of what I do outside class is some version of the same work. I competed in parliamentary
> debate for four years, arguing rotating resolutions on domestic policy, international relations, and
> ethics. I've organized Vietnamese youth programs in San Diego since 2019, mentoring 30+ kids and
> teaching language classes to keep the diaspora's heritage intact. I'm trilingual in English, Spanish,
> and Vietnamese, shaped by time across San Diego, Colombia, Spain, and Japan, and I've run bilingual
> coordination with a Colombian nonprofit in Spanish. And I build software — I taught myself to code
> and work hand in hand with AI, using Claude to design, build, and ship each project end to end."

**Tradeoff note — read before choosing Version B.**

Version B **drops the athletics and campus-clubs material entirely**: beach volleyball, the weight
room, boxing with the Strikers Club, Pre-Law Society, Phi Alpha Delta, and the Vietnamese Student
Association are all gone. It also **drops the four-year shift-lead / restaurant work**. Those are
real, and cutting them is the cost of getting to two paragraphs — they are recoverable elsewhere on
the page (education `activities` at `src/data/content.js:40-47`, experience at `:83-105`), but they
will not appear in the intro.

Version B **keeps the AI-attribution sentence** ("I taught myself to code and work hand in hand with
AI, using Claude to design, build, and ship each project end to end"). That sentence should not be cut
in any version — it is an accuracy claim about authorship, not a stylistic flourish.

The "applying to law school in the 2027 cycle" line is a factual claim I inferred from the Jun 2027
graduation date. **Confirm the cycle year before shipping it** — if the plan is to apply during senior
year for fall-2028 matriculation, the sentence needs a different number.

---

## Proposal 2 — `contact.body` (`src/data/content.js:300`)

### BEFORE (verbatim)

> "I'm always glad to connect with attorneys, recruiters, or fellow students. Feel free to reach out!"

### What's wrong with it

It names three audiences and gives none of them anything to do. "Feel free to reach out" is a door
left open with no reason to walk through it — the reader has to invent the purpose of the email
themselves, which is exactly the friction that stops most people from sending one. It also asks
nothing, so it reads as politeness rather than intent.

### AFTER

> "If you're an attorney or a law student, I'd like to hear how you picked your practice area — I'm
> headed toward corporate law and still testing that against everything else. If you're a recruiter,
> the essays below are the best sample of how I think. Email is the fastest way to reach me."

**Why:** each audience now gets one concrete thing to do. The attorney/law-student ask is a specific
question they can answer in three sentences, which is a far lower bar than an unspecified "connect."
The recruiter line points at an asset already on the page (the `writing` section) instead of asking
them to hunt. The closing names the preferred channel rather than leaving it ambiguous.

**Note:** this drops "fellow students" as a named audience. If that group matters, it can be added
with its own ask (e.g. a line about pre-law students at UCSB), but a fourth audience will start to
dilute the paragraph.

---

## Proposal 3 — Featured essay blurb, "Limits of Government" (`src/data/content.js:220-233`)

The essay stays `featured: true` in its current hero slot. This proposal changes **only the closing
line of the `description`** (`:225`). Everything else about the entry — title, course, term,
`interlocutors` list, link — is unchanged.

### BEFORE (verbatim, full `description`)

> "This essay asks what the strongest social criticisms of Milton Friedman's liberal individualism are,
> and what political thought a society should adopt in its place. Drawing on G. A. Cohen and Nancy
> Fraser, I argue that market freedom leads not to genuine liberty, but to inequality and economic
> domination. Turning to André Gorz and David Miller, I further assert that socialism offers the basis
> for a better society, one grounded in equality, cooperation, and a more meaningful conception of
> freedom than the market can provide."

### What's wrong with it

The final sentence — "I further assert that socialism offers the basis for a better society" — reads
as Kaden's personal political creed rather than as the argument a graded paper advances. On the hero
slot of a portfolio aimed at law firms and admissions readers, first-person advocacy invites the
reader to agree or disagree with *him*, when the interesting claim is what the *paper* does. The fix
is register, not substance: same authors, same rigor, third person, argument-as-argument.

### AFTER

> "Asks what the strongest social criticisms of Milton Friedman's liberal individualism are, and what
> a society should adopt in its place. Draws on G. A. Cohen and Nancy Fraser to argue that market
> freedom produces domination rather than liberty, then evaluates the socialist alternatives in André
> Gorz and David Miller against a conception of freedom the market cannot supply."

**Why:** "evaluates the socialist alternatives in Gorz and Miller" describes an analytical move the
paper performs; "I further assert that socialism offers the basis for a better society" describes a
belief the author holds. The first is a writing sample. The second is a position statement. The
argument is not softened — market freedom still "produces domination rather than liberty" — only the
frame changes.

This also matches the third-person register of every other entry in the `writing` array (e.g.
"Analyzes the divergent roles of equality…", "Challenges Pascal's Wager…"), which the featured entry
is currently the sole exception to.
