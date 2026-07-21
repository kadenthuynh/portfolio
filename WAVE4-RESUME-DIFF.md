# WAVE4 — `content.js` vs `resume.pdf` Discrepancy Report

**Scope:** Every date, job title, employer, figure, and factual claim compared between
`src/data/content.js` (post-remediation state, includes `writing-tutor-copy`,
`legal-crm-rewrite`, and `dead-code-deletion`) and `public/resume.pdf`
(PDF `/Title` metadata: `Huynh - Resume 7/1/26`, 1 page).

**This report does not fix anything and does not state which side is correct.**
Every item below is a decision for Kaden. Neither `content.js` nor `resume.pdf` was
modified by this task.

**Why this matters:** the site's primary traffic arrives from the resume link, so a
reader typically holds both documents at once. Admissions file readers are explicitly
trained to catch resume-vs-materials discrepancies.

---

## Cross-cutting note: `content.js` line numbers

All `content.js` quotes cite line numbers from the current post-rebase state of the file
on branch base `remediation-2026-07` + the three merged feature branches. Line numbers
will shift if the file is edited again.

`resume.pdf` is a single-page Google-Docs-rendered PDF with no line numbers; resume
quotes are cited by section heading and bullet position.

---

## ⚠️ PRIORITY FLAG — Legal CRM divergence introduced by this remediation pass

The `legal-crm-rewrite` feature (already merged into this branch base) rewrote the
Legal Directory CRM entry in `content.js` to remove the "50+ attorneys, judges, and
mentors" and "~90%" framing. **`resume.pdf` still contains that exact language.** The
two documents now actively contradict each other on this project, as a direct
consequence of the remediation work.

**resume.pdf** — Projects → Legal CRM, bullet 1:

> "Built and actively maintain a personal, legal CRM that manages a growing network of
> **50+ attorneys, judges, and mentors** through a searchable contact directory, built-in
> Gmail inbox, and calendar-based follow-up scheduling."

**resume.pdf** — Projects → Legal CRM, bullet 2:

> "**Cut outreach email drafting time by 90%** by integrating AI that converts meeting
> and contact notes into structured contact records and **drafts context-aware emails
> tailored to each recipient's role and history**."

**content.js:164** (tagline, post-rewrite):

> `"A personal legal CRM managing a professional network through a searchable directory, inbox, and follow-up scheduling."`

**content.js:166** (description, post-rewrite):

> `"A personal legal CRM for tracking professional contacts. One dashboard holds the contact directory, the email threads that matter, and calendar-based follow-ups. Claude turns loose meeting and contact notes into structured records, then surfaces the relevant history for a contact ahead of an interaction, so prior context is retrieved rather than reconstructed from memory."`

Three separate divergences here, not one:

1. **The `50+` headcount figure** exists only on the resume. The site now says
   "a professional network" with no number.
2. **The `90%` time-saving figure** exists only on the resume. The site now claims no
   percentage improvement of any kind.
3. **Functional claim mismatch (substance, not wording):** the resume says the tool
   *drafts emails*. The post-rewrite site copy says it *retrieves context* — it
   "surfaces the relevant history for a contact ahead of an interaction." A reader
   comparing both will see the resume claiming a generation feature the site does not
   describe.

`resume.pdf` is a static binary asset and is out of scope to edit here. Reconciling
this — by restoring the figures to the site, regenerating the PDF, or accepting the
gap — is Kaden's call.

---

## 1. Education

**Discrepancies found: 7**

### 1.1 UCSB coursework list does not match

**content.js:32-37:**

```js
coursework: [
  "Classical Political Theory",
  "Modern Political Theory",
  "Contemporary Political Theory",
  "Government & Politics of Japan",
],
```

**resume.pdf** — Education → UCSB, bullet 2:

> "Relevant Coursework: Political Theory (Classical, Modern, Contemporary)"

Two differences: (a) the resume collapses the three theory courses into one
parenthetical, a presentation difference; (b) **"Government & Politics of Japan" is
absent from the resume entirely** — a substantive omission. Note that two essays in
`content.js`'s `writing` array (lines 234-247) cite the course
`"Government and Politics of Japan"`, so a reader who visits the site sees a course
the resume does not list. Also note the site uses `&` and the writing entries use
`and` — an internal inconsistency inside `content.js` itself.

### 1.2 UCEAP Tokyo study-abroad entry is absent from the resume

**content.js:47-52:**

```js
{
  school: "International Christian University (UCEAP)",
  location: "Tokyo, Japan",
  degree: "Study Abroad",
  period: "Aug 2026 – Dec 2026",
},
```

**resume.pdf:** no corresponding entry. The Education section lists only UCSB and
Universitat Autònoma de Barcelona. There is no mention of Tokyo, Japan, International
Christian University, or the Aug–Dec 2026 term anywhere on the page.

This is a whole missing Education entry, and it is the one that most directly
corroborates `meta.bio`'s claim of time in Japan (**content.js:16**: `"shaped by time
across San Diego, Colombia, Spain, and Japan"`).

### 1.3 Westview High School does not appear as an Education entry

**content.js:60-67:**

```js
{
  school: "Westview High School",
  location: "San Diego, CA",
  period: "Aug 2020 – Jul 2024",
  gpa: "4.3",
  honors: ["AP Scholar with Distinction", "Seal of Biliteracy in Spanish", "SDIVSL Varsity Parliamentary Award"],
  activities: ["National Speech & Debate Association"],
},
```

**resume.pdf:** Westview High School is **not an Education entry**. The school name,
the `Aug 2020 – Jul 2024` period, the `4.3` GPA, and the `San Diego, CA` location do
not appear anywhere on the resume.

### 1.4 The three high-school honors appear only as a floating line in a different section

The three `honors` values from `content.js:65` do appear on the resume — but detached
from any school, at the bottom of the page under an unrelated heading.

**resume.pdf** — Skills & Interests, line 1:

> "Awards: AP Scholar with Distinction, Seal of Biliteracy in Spanish, SDIVSL Varsity
> Parliamentary Award"

On the site these are scoped to Westview High School; on the resume they float with no
institution attached, adjacent to the college-level Skills content. A reader may
reasonably infer they are university awards.

### 1.5 UCSB degree string differs

**content.js:28:**

> `degree: "Bachelor of Arts in Political Science, Minor in Philosophy"`

**resume.pdf** — Education → UCSB, line 2:

> "Bachelor of Arts (B.A.) in Political Science, Minor in Philosophy"

Wording only (`(B.A.)` parenthetical present on the resume, absent on the site).

### 1.6 Barcelona entry: no "Study Abroad" label on the resume, and the UCEAP
punctuation differs

**content.js:54-56:**

```js
school: "Universitat Autònoma de Barcelona (UCEAP)",
location: "Barcelona, Spain",
degree: "Study Abroad",
```

**resume.pdf** — Education, entry 2:

> "Universitat Autònoma de Barcelona, UCEAP     Barcelona, Spain"

The resume writes UCEAP with a comma rather than in parentheses, and carries **no
`Study Abroad` designation** — the entry reads as a second degree-granting institution
unless the reader recognizes UCEAP. Dates (`Jun 2026 - Aug 2026`) and coursework
(`Leadership and Negotiation Techniques, Critical Thinking`) match `content.js:57-58`,
modulo `&` vs `and` in the course title.

### 1.7 UCSB activities list is absent from the resume

**content.js:38-45:**

```js
activities: [
  "Phi Alpha Delta Law Fraternity",
  "Pre-Law Society",
  "Vietnamese Student Association",
  "Men's Beach Volleyball",
  "Strikers Club",
  "Gaucho Gaming",
],
```

**resume.pdf:** none of these six appear anywhere on the page — not under Education,
not under "Leadership & Activities," despite that section's name. Notably, Phi Alpha
Delta and Pre-Law Society are the two most directly law-school-relevant items in the
entire dataset, and they are also asserted in **content.js:19** (`"I'm a member of the
Pre-Law Society and Phi Alpha Delta law fraternity"`).

---

## 2. Experience

**Discrepancies found: 5**

### 2.1 Writing Tutor entry has no resume counterpart at all

**content.js:71-80** (current post-`writing-tutor-copy` text):

```js
{
  role: "Writing Tutor",
  company: "UCSB Campus Learning Assistance Services (CLAS)",
  location: "Santa Barbara, CA",
  period: "Incoming · Sep 2026 – Jun 2027",
  bullets: [
    "Selected to provide one-on-one writing support to students at every stage, from prompt analysis and drafting to structure, argumentation, and final revision",
    "Role centers on assessing individual student needs and developing targeted strategies to strengthen clarity, organization, and academic writing conventions",
  ],
},
```

**resume.pdf:** the Experience section contains exactly two entries — Pho Ha Grill &
Bar and In-N-Out. There is **no Writing Tutor entry, no mention of CLAS**, and no
mention of Campus Learning Assistance Services anywhere on the page.

This is the single most law-school-relevant Experience item on the site and it is
entirely absent from the resume. Note the site's period field carries an explicit
`Incoming ·` prefix, so the site is not overclaiming — but the resume omits the role
outright.

### 2.2 Pho Ha bullet 2 differs in substance (not just wording)

Bullet counts match (3 vs 3).

**content.js:88:**

> `"Onboarded 5 new employees on workplace procedures, improving communication and team coordination skills"`

**resume.pdf** — Experience → Pho Ha Grill & Bar, bullet 2:

> "Onboarded and trained 5 new hires, reducing ramp-up time and improving shift
> coverage during peak periods."

The `5` figure matches. The claimed *outcome* does not: the site claims a personal-skill
gain ("communication and team coordination skills"); the resume claims two operational
business outcomes ("reducing ramp-up time," "improving shift coverage during peak
periods"). The resume also adds "and trained," a scope the site does not claim.

### 2.3 Pho Ha bullet 3 — resume adds a skills clause

**content.js:89:**

> `"Analyzed metrics across Grubhub, DoorDash, and Uber Eats to identify inefficiencies, implementing UI changes and optimizations that increased online orders by 25%"`

**resume.pdf** — Experience → Pho Ha Grill & Bar, bullet 3:

> "Analyzed metrics across Grubhub, DoorDash, and Uber Eats to identify inefficiencies,
> implementing UI changes and optimizations that increased online orders by 25%,
> strengthening data analysis and technical skills."

The `25%` figure and all three platform names match. The resume appends
"strengthening data analysis and technical skills." Wording-level only.

(Pho Ha bullet 1 matches near-verbatim; employer, `Shift Lead` title, `Oceanside, CA`
location, and `Dec 2021 – Dec 2025` period all match.)

### 2.4 In-N-Out bullet count differs — the site has a third bullet the resume lacks

**content.js** has 3 bullets (lines 98-100); **resume.pdf** has 2.

Present on the site, absent from the resume — **content.js:100**:

> `"Upheld cleanliness standards under health regulations, earning recognition for consistent attention to detail"`

The resume's In-N-Out entry ends after the customer-service bullet. The "earning
recognition" claim appears only on the site.

Also, **content.js:98** ends `"...during peak service periods"` while the resume's
bullet 1 ends `"...during peak service periods throughout the week."` — the resume
adds a duration qualifier.

**content.js:99:**

> `"Delivered professional service to hundreds of customers per shift while maintaining composure and efficiency"`

**resume.pdf** — In-N-Out, bullet 2:

> "Delivered professional service to hundreds of customers per shift while staying
> composed under pressure."

Same claim; the site adds "and efficiency," the resume substitutes "under pressure."
Wording-level.

### 2.5 Employer name differs

**content.js:94:** `company: "In-N-Out Burger"`

**resume.pdf** — Experience, entry 2 heading: `"In-N-Out"`

The resume drops "Burger." Title (`Associate`), location (`San Diego, CA`), and period
(`Dec 2023 – Aug 2024`) all match.

---

## 3. Leadership

**Discrepancies found: 4**

### 3.1 VBYA bullet count differs — the site has a third bullet the resume lacks

**content.js** has 3 bullets (lines 112-114); **resume.pdf** has 2.

Present on the site, absent from the resume — **content.js:114**:

> `"Mentored 30+ children and teenagers through positive role-modeling and Vietnamese language instruction, deepening cultural connection and preserving heritage within the Vietnamese diaspora in San Diego"`

The `30+` mentorship figure and the Vietnamese-language-instruction claim appear only
on the site.

Role (`Youth Leader`), org, location (`San Diego, CA`), and period
(`May 2019 – Present` / `May 2019 - Present`) match. Bullet 1 matches near-verbatim.

### 3.2 VBYA bullet 2 differs in substance

**content.js:113:**

> `"Planned and executed summer camps and weekly meetings for 60+ members, building project management and organizational skills while fostering a sense of community and belonging among youth participants"`

**resume.pdf** — Leadership & Activities → VBYA, bullet 2:

> "Organized summer camps and weekly **Sunday** meetings for 60+ members, sustaining
> consistent attendance by coordinating logistics, recruiting volunteers, and planning
> cultural programming throughout the entire year."

The `60+` figure matches. Beyond that: (a) the resume specifies **Sunday** meetings,
the site says only "weekly"; (b) the claimed outcome differs — the site claims personal
skill growth ("project management and organizational skills") plus community-building,
the resume claims an attendance result ("sustaining consistent attendance") plus three
specific methods (logistics, volunteer recruitment, cultural programming) that the site
does not mention.

### 3.3 NSDA bullets — wording and claimed-skill differences

Bullet counts match (2 vs 2). Role (`Parliamentary Debater`), org, location, and period
(`Aug 2020 – Jun 2024`) all match.

**content.js:123:**

> `"Competed in Parliamentary Debate at tournaments across California, earning a varsity performance award against hundreds of peers while directly cultivating advanced argumentation, research, and public speaking skills"`

**resume.pdf** — NSDA, bullet 1:

> "Competed in Parliamentary Debate at tournaments across California, earning a varsity
> performance award against hundreds of peers while building advanced argumentation,
> public speaking, and **case-analysis** skills."

Skill triads differ: site says argumentation / **research** / public speaking; resume
says argumentation / public speaking / **case-analysis**.

**content.js:124:**

> `"Researched and prepared cases on a rotating set of resolutions spanning domestic policy, international relations, and ethics, developing the ability to analyze unfamiliar topics quickly and refute complex philosophical arguments"`

**resume.pdf** — NSDA, bullet 2:

> "Researched, **synthesized sources, and drafted written cases** on rotating
> resolutions across policy, international relations, and ethics, analyzing unfamiliar
> issues and refuting complex arguments **under time pressure**."

The resume claims source synthesis and *written* case drafting; the site says
"prepared cases." The site says "complex **philosophical** arguments"; the resume says
"complex arguments." The resume adds "under time pressure"; the site says "quickly."

### 3.4 Two entire leadership entries are absent from the resume

**content.js:127-136 — Kicks4Kids:**

```js
{
  role: "Coach",
  org: "Kicks4Kids",
  location: "San Diego, CA",
  period: "Jun 2023 – Aug 2024",
  bullets: [
    "Supervised and coached a soccer camp of over 30 children",
    "Taught leadership and communication skills through mentoring",
  ],
},
```

**content.js:137-146 — Fundación Tiempo de Juego:**

```js
{
  role: "Fundraiser Co-founder",
  org: "Fundación Tiempo de Juego",
  location: "Cundinamarca, Colombia",
  period: "Jan 2023 – Jun 2023",
  bullets: [
    "Co-founded a grassroots fundraising initiative from scratch, independently organizing two San Diego community events that generated hundreds of dollars in direct financial support for an international nonprofit organization",
    "Coordinated ongoing bilingual communication in Spanish with Colombia-based team members and organizational leadership, demonstrating sustained professionalism across significant cultural and language barriers",
  ],
},
```

**resume.pdf:** the Leadership & Activities section contains exactly two entries — VBYA
and NSDA. Neither Kicks4Kids nor Fundación Tiempo de Juego appears anywhere on the
page. "Colombia," "Cundinamarca," "Kicks4Kids," and "Tiempo de Juego" are absent
entirely.

Note the compounding effect: **content.js:20** states `"organized a cross-border
fundraiser for Colombian youth programs"` and **content.js:16** states `"shaped by time
across San Diego, Colombia, Spain, and Japan"` — so the site asserts Colombia
involvement in three places while the resume asserts it in none.

---

## 4. Projects

**Discrepancies found: 6** (plus the priority-flagged Legal CRM item above)

### 4.1 Three of five projects are absent from the resume

`content.js` `projects` array (lines 149-206) contains five entries. The resume's
Projects section contains two.

| `content.js` project | Line | On resume? |
|---|---|---|
| Athena | 151 | Yes |
| Legal Directory CRM | 163 | Yes (as "Legal CRM") |
| Payback | 174 | **No** |
| LSAT Coach | 185 | **No** |
| Cleave | 196 | **No** |

Payback, LSAT Coach, and Cleave do not appear on the resume in any form — the strings
"Payback," "LSAT," "Cleave," "KAPLAY," "PartyKit," and "Frankfurter" are absent from
the page.

### 4.2 Project name spelling mismatch

**content.js:163:** `name: "Legal Directory CRM"`

**resume.pdf** — Projects, entry 1 heading: `"Legal CRM"`

The word "Directory" appears in the site's project name but not the resume's. A reader
cross-referencing by name may not immediately match them.

### 4.3 Legal CRM tech stack differs

**content.js:169:**

```js
tech: ["Vanilla JS", "Supabase", "Claude API", "Google APIs", "Vercel"],
```

**resume.pdf** — Legal CRM subheading:

> "Web Application | JavaScript, Supabase, Claude API, Google Workspace"

Differences: site says `"Vanilla JS"`, resume says `"JavaScript"`; site says
`"Google APIs"`, resume says `"Google Workspace"` (a different product category —
Workspace is the productivity suite, APIs is the developer surface); and **`Vercel` is
on the site but absent from the resume**, despite `content.js:167` describing "Vercel
serverless functions" as the driver of the Calendar and Gmail integrations.

### 4.4 Athena tech stack differs — resume claims Node.js, site does not

**content.js:158:**

```js
tech: ["React", "Vite", "Vercel", "Supabase", "PostGIS", "Claude API", "Mapbox"],
```

**resume.pdf** — Athena subheading:

> "Web Application | React, Node.js, Supabase, Claude API, Mapbox"

Differences: **`Node.js` appears on the resume but nowhere in the site's Athena entry**;
and `Vite`, `Vercel`, and `PostGIS` appear on the site but not the resume.
`content.js:156` describes the backend as "A Vercel serverless API passes incoming media
to a Render worker" and the front end as "React and Vite" — the resume's "Node.js"
does not correspond to any named component in that description, and `Render` is named
on the site but nowhere on the resume.

### 4.5 Project dates exist only on the resume

**resume.pdf** — Projects headings:

> "Legal CRM     Jun 2026"
> "Athena     May 2026"

**content.js:** the `projects` array carries **no date field of any kind** on any of
the five entries. A reader cannot cross-check these dates against the site, and the
site cannot corroborate them.

### 4.6 Athena bullet 2 claim vs site description

**resume.pdf** — Athena, bullet 2:

> "Improved classification accuracy, the review workflow, and overall UX, as measured
> by feedback from 10+ private-beta users, by launching the app and shipping new
> iterations from real usage and direct input."

**content.js:155** (final sentence):

> `"Launched to 10+ private-beta users, with classification accuracy and the review workflow refined from real usage."`

The `10+` figure matches and the substance is compatible. One difference: the resume
adds "overall UX" as a third improved dimension, which the site does not claim.

### 4.7 (Note, not a discrepancy) The site's `writing` section has no resume analogue

`content.js:208-281` defines eight academic essays with courses and terms. The resume
has no Writing, Publications, or Academic Work section. This is not a contradiction —
it is site-only content — but it is worth naming, since these essays are the site's
strongest law-school-relevant artifacts and a resume-only reader never learns they
exist.

---

## 5. Skills

**Discrepancies found: 3**

### 5.1 Languages — match exactly (no discrepancy)

**content.js:284-288:**

```js
languages: [
  { lang: "English", level: "Fluent" },
  { lang: "Spanish", level: "Fluent" },
  { lang: "Vietnamese", level: "Proficient" },
],
```

**resume.pdf** — Skills & Interests, line 2:

> "Languages: Fluent in English and Spanish, Proficient in Vietnamese"

Same three languages, same three proficiency levels. **No discrepancy.** (Consistent
with `content.js:16`'s "Trilingual in English, Spanish, and Vietnamese.")

### 5.2 Technical tools lists do not match in either direction

**content.js:289-294:**

```js
tools: [
  { label: "Microsoft Office", items: ["Word", "Excel", "PowerPoint"] },
  { label: "Google Workspace", items: ["Docs", "Sheets", "Slides"] },
  { label: "Web Development", items: ["JavaScript", "TypeScript", "React", "Node.js", "Tailwind CSS"] },
  { label: "Developer Tools", items: ["VS Code", "GitHub", "Vercel", "Supabase", "Claude API"] },
],
```

**resume.pdf** — Skills & Interests, line 3:

> "Technical: Microsoft Office, Google Workspace, Adobe Acrobat, JavaScript,
> TypeScript, React, AI/LLM integration"

**On the resume only (absent from `content.js`):**

- `Adobe Acrobat` — appears nowhere in `content.js`.
- `AI/LLM integration` — no equivalent skill entry in `content.js` (the closest is
  `Claude API` under Developer Tools).

**On the site only (absent from the resume):**

- `Node.js`
- `Tailwind CSS`
- `VS Code`
- `GitHub`
- `Vercel`
- `Supabase`
- `Claude API`

Note the internal tension with §4.4: `Node.js` is absent from the resume's Technical
line but present in the resume's Athena tech stack; and `Supabase` / `Claude API` are
absent from the resume's Technical line but present in both resume project stacks.

Also note that the site expands `Microsoft Office` and `Google Workspace` into named
sub-tools (Word/Excel/PowerPoint, Docs/Sheets/Slides) while the resume lists only the
suite names — a granularity difference, not a contradiction.

### 5.3 The resume's "Skills & Interests" heading carries an Awards line and no interests

**resume.pdf** section heading: `"Skills & Interests"`, containing three lines:
`Awards:`, `Languages:`, `Technical:`.

`content.js` has no `interests` field, and its `skills` export (line 283) contains only
`languages` and `tools`. The `Awards:` line's contents belong to
`education[3].honors` on the site — see §1.4. Net effect: the resume section promises
"Interests" and delivers none, while housing an Awards line that the site files under
Education.

---

## 6. Header / contact info

**Discrepancies found: 3**

### 6.1 Location formatting differs

**content.js:11:** `location: "San Diego, CA"`

**resume.pdf** — header line 1: `"San Diego, California"`

Same place; the site abbreviates the state, the resume spells it out. Formatting only.

### 6.2 Email and phone — match exactly (no discrepancy)

**content.js:12:** `email: "kadenthuynh@gmail.com"`
**content.js:13:** `phone: "(858) 888-3691"`

**resume.pdf** — header line 1:

> "kadenthuynh@gmail.com | (858) 888-3691"

Both match character-for-character, including phone formatting. **No discrepancy.**

### 6.3 The resume lists NO LinkedIn URL

**content.js:14:** `linkedin: "https://linkedin.com/in/kadenthuynh"`

**resume.pdf** — header line 1, in full:

> "Kaden Huynh   San Diego, California | kadenthuynh@gmail.com | (858) 888-3691 |
> kaden.me"

The resume's header contains **no LinkedIn URL at all** — the string "linkedin" does
not appear anywhere on the page. There is therefore nothing on the resume to match
against `meta.linkedin`.

### 6.4 GitHub URL is on the site only; personal domain is on the resume only

**content.js:15:** `github: "https://github.com/kadenthuynh"`

**resume.pdf:** no GitHub URL anywhere on the page.

Conversely, the resume header's fourth element is `kaden.me` — a personal-site URL that
has **no corresponding field in `content.js`'s `meta` object** (there is no `website`,
`site`, or `url` key). The resume's only outbound link is to the site; the site's
outbound links are LinkedIn and GitHub. The two documents share zero link targets.

### 6.5 (Minor) The site carries a headline the resume does not

**content.js:5:** `title: "Political Science & Philosophy @ UCSB"`

**resume.pdf:** the header is name + contact line only, with no title or headline. Not
a contradiction — the resume simply has no field for it.

---

## Summary table

| Section | Discrepancies | Most consequential |
|---|---|---|
| Education | 7 | UCEAP Tokyo entry absent from resume; Westview HS not an Education entry; "Government & Politics of Japan" coursework absent |
| Experience | 5 | Writing Tutor / CLAS role absent from resume entirely; In-N-Out bullet counts 3 vs 2 |
| Leadership | 4 | Kicks4Kids and Fundación Tiempo de Juego absent from resume entirely; VBYA bullet counts 3 vs 2 |
| Projects | 6 + priority flag | **Legal CRM `50+` / `90%` / email-drafting divergence introduced by this pass**; Payback, LSAT Coach, Cleave absent; Athena `Node.js` on resume only |
| Skills | 3 | Resume lists `Adobe Acrobat` and `AI/LLM integration` (site has neither); site lists 7 tools the resume omits |
| Header | 3 (+2 minor) | Resume lists no LinkedIn and no GitHub; resume lists `kaden.me`, which has no `content.js` field |

**Total: 28 discrepancies + 1 priority flag.**

No item in this report has been fixed, and neither source document was modified.
Every reconciliation decision — including which side is correct — is Kaden's.
