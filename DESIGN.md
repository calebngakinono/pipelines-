---
name: Pipeline.dev
description: Educational landing page teaching software delivery pipelines to junior developers and students.
colors:
  bg-deep-navy: "#0a0e1a"
  bg-surface: "#111827"
  bg-card: "#1a2235"
  bg-card-hover: "#1e2a40"
  border-default: "#2d3748"
  border-subtle: "#1e293b"
  text-primary: "#e2e8f0"
  text-muted: "#94a3b8"
  text-dim: "#64748b"
  go-green: "#10b981"
  active-cyan: "#06b6d4"
  stage-dev: "#3b82f6"
  stage-qa: "#f59e0b"
  stage-staging: "#a855f7"
  danger-red: "#ef4444"
typography:
  display:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "normal"
  title:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.15em"
  mono:
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  pill: "20px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "60px"
  section: "100px"
components:
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "6px"
    padding: "8px 14px"
  nav-link-active:
    backgroundColor: "rgba(6, 182, 212, 0.15)"
    textColor: "{colors.active-cyan}"
    rounded: "6px"
    padding: "8px 14px"
  card:
    backgroundColor: "{colors.bg-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "28px"
  pipeline-step:
    backgroundColor: "{colors.bg-card}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.md}"
    padding: "16px 20px"
  pipeline-step-active:
    backgroundColor: "rgba(16, 185, 129, 0.15)"
    textColor: "{colors.go-green}"
    rounded: "{rounded.md}"
    padding: "16px 20px"
  badge-green:
    backgroundColor: "rgba(16, 185, 129, 0.15)"
    textColor: "{colors.go-green}"
    rounded: "{rounded.sm}"
    padding: "3px 10px"
  section-tag:
    backgroundColor: "rgba(16, 185, 129, 0.15)"
    textColor: "{colors.go-green}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  copy-btn:
    backgroundColor: "transparent"
    textColor: "{colors.text-dim}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  copy-btn-hover:
    backgroundColor: "transparent"
    textColor: "{colors.go-green}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
---

# Design System: Pipeline.dev

## 1. Overview

**Creative North Star: "The Terminal Textbook"**

Pipeline.dev presents itself in the visual language of its subject matter. Dark background, monospaced labels, status indicators lit in terminal green: the aesthetic is disciplined, not decorative. A junior developer arriving here should feel they've stepped into the right environment — one that respects the tools without showing off. The darkness is not a costume. Pipelines live in terminals, CI log streams, and code editors. The page lives there too.

The typography mixes Inter's humanist proportions with JetBrains Mono's code-editor precision. Inter carries explanation. JetBrains Mono carries instruction: nav logo, badges, labels, inline code, pipeline step names. These two voices are kept strictly separate. That separation reinforces the distinction between "here's what it means" and "here's what you type."

The system explicitly rejects: neon-on-black cyberpunk aesthetics (the darkness is functional, not fashionable); startup SaaS landing page conventions (hero metric grids, gradient CTAs, "Trusted by 10,000 teams" rows); and dense text documentation (information density is managed through section rhythm, progressive disclosure, and visual interactivity, not wall-to-wall prose).

**Key Characteristics:**
- Dark terminal canvas with three-step tonal layering (not shadow elevation)
- Full semantic color palette: five fixed pipeline stage colors plus two text levels and four neutral surfaces
- Strict two-typeface discipline: Inter for prose, JetBrains Mono for terminal-adjacent elements
- Flat at rest: glows appear only as state signals (active, passing, hovering), never decoration
- Section rhythm over density: 100px vertical breathing room with scroll-reveal choreography throughout

## 2. Colors: The Five-Stage Palette

The palette is semantically structured, not aesthetically arranged. Each pipeline stage has exactly one fixed signal color. The colors serve the subject matter: they are the pipeline visualized.

### Primary
- **Go Light Green** (`#10b981`): The PROD environment, the passing CI check, the pipeline completing cleanly. Used for: the nav logo, step-number circles, active pipeline stage, hero title accent, section tag (Fundamentals), the `.go-green` text glow. The color of "ship it."

### Secondary
- **Active Cyan** (`#06b6d4`): Interactive elements and connection. Used for: links, hovered nav items, inline code text, card hover border, active nav link background. The color of reaching out.

### Tertiary: Pipeline Stage Colors
Each environment has one color, used exclusively for that environment's header, badge, and accent. These colors are not interchangeable.

- **DEV Blue** (`#3b82f6`): Local development environment badges and DEV-stage callouts.
- **QA Amber** (`#f59e0b`): Quality assurance stage; also used for warning callouts and the testing timeline marker.
- **STAGING Purple** (`#a855f7`): Pre-production staging environment. Distinct from both QA and PROD; no purple is used outside staging context.

### Neutral
- **Deep Space Navy** (`#0a0e1a`): Body background. The foundational canvas.
- **Panel Gray** (`#111827`): Alternating section backgrounds. Signals a section boundary without a hard line.
- **Card Slate** (`#1a2235`): Card and surface fill. One step lighter than Panel Gray.
- **Card Hover** (`#1e2a40`): Pipeline step hover state. Subtly warmer than Card Slate.
- **Edge Mist** (`#2d3748`): Default border on cards, nav, and code blocks. Visible but not loud.
- **Divider Smoke** (`#1e293b`): Subtle list dividers and section separators within cards.
- **Text White-Blue** (`#e2e8f0`): Primary text: headings, card titles, body copy.
- **Text Stone** (`#94a3b8`): Muted text: card body, section subtitles, pipeline step labels at rest.
- **Text Graphite** (`#64748b`): Dim text: pipeline arrows, placeholders, scrollbar thumb.

**The Five-Stage Rule.** The five pipeline environments (Feature, DEV, QA, STAGING, PROD) each have exactly one fixed signal color (go-green, stage-dev, stage-qa, stage-staging, danger-red). Using any of these colors outside its semantic stage role is prohibited. The color IS the stage. Choosing purple for a decorative element is as wrong as labeling DEV when you mean PROD.

**The Danger Rule.** Red (`#ef4444`) belongs to errors, security risks, and the "without a pipeline, this happens" failure states. It is not used for any positive or neutral purpose. Its appearance should feel like an incident.

## 3. Typography

**Display Font:** Inter (with -apple-system, sans-serif fallback)
**Body Font:** Inter (same family, different weights)
**Label/Mono Font:** JetBrains Mono (with Fira Code, monospace fallback)

**Character:** Inter brings warmth and readability to long-form teaching content: wide apertures, open counters, and a humanist structure that never feels academic or cold. JetBrains Mono carries the technical register: monospaced precision, programming ligatures, the exact visual weight a developer expects from terminal output. Together they produce a page that feels literate and technical at once.

### Hierarchy
- **Display** (weight 800, `clamp(2.5rem, 6vw, 4.5rem)`, line-height 1.1): Hero title only. One occurrence per page. Never used for section headings.
- **Title** (weight 800, `clamp(1.8rem, 4vw, 2.8rem)`, line-height 1.2): Section-level headings (`h2`). Bold and declarative.
- **Subsection** (weight 700, `1.3rem`, line-height 1.4): Sub-section headers within sections (`h3`). 40px top margin separates them from preceding content.
- **Body** (weight 400, `1rem/16px`, line-height 1.6): All prose. Max line length 65ch enforced via `max-width` on `.section-subtitle` and prose containers. Never wider.
- **Supporting** (weight 400, `1.1rem`, color text-muted): Section subtitles and lead paragraphs. Slightly larger than body to ease entry into a new section.
- **Card Body** (weight 400, `0.9rem`, line-height 1.6, color text-muted): Text inside cards and environment card bodies. Slightly compressed to match the card's information density.
- **Label** (JetBrains Mono, weight 700, `0.75rem`, letter-spacing `0.15em`, uppercase): Section tags, environment badges, code-block language labels, table headers. All uppercase, all mono.
- **Code / Mono** (JetBrains Mono, weight 400–700, `0.85rem`, line-height 1.6): Nav logo, hero subtitle, pipeline step labels, inline code, code blocks, copy button text.

**The Two-Voice Rule.** Inter carries explanation; JetBrains Mono carries instruction. Every terminal-adjacent element uses the mono face. Every explanatory element uses Inter. The boundary between them is firm. An Inter label on a pipeline badge or a JetBrains Mono paragraph are both wrong.

## 4. Elevation

This system uses tonal depth, not shadow depth. Three surface steps create spatial hierarchy without lifting elements off the canvas: body (`#0a0e1a`) receives sections (`#111827`), which hold cards (`#1a2235`), which have a hover state (`#1e2a40`). Each step is one shade lighter, suggesting proximity without traditional elevation. At rest, no surface has a shadow.

Shadows appear only as state responses: they signal that something has happened, not that something is above something else.

### Shadow Vocabulary
- **Ambient Card** (`0 4px 24px rgba(0, 0, 0, 0.4)`): Activates on card and environment card hover. Signals interactivity; the card is reacting to you.
- **Ambient Heavy** (`0 8px 48px rgba(0, 0, 0, 0.6)`): Reserved for maximum separation, such as fixed-panel overlays. Not currently used in the component library.
- **Glow Green** (`0 0 20px rgba(16, 185, 129, 0.3)`): Active pipeline step; the step currently "running." Pulses via keyframe animation. This is not a hover effect; it is a live-state signal.
- **Glow Cyan** (`0 0 20px rgba(6, 182, 212, 0.3)`): Cyan active-hover amplification; available for secondary interactive focus states.

**The Flat-by-Default Rule.** A resting card has no shadow. A resting pipeline step has no glow. A glow means something happened: the pipeline is active, the step is selected, the user is hovering. Apply this test to every new element: if it would glow or shadow at rest, it shouldn't.

## 5. Components

### Navigation
The nav is 64px, fixed at the top, using a dark glass treatment (`rgba(10, 14, 26, 0.95)` + `backdrop-filter: blur(12px)`) with a 1px Edge Mist bottom border. On scroll past 10px, an Ambient Card shadow activates.

- **Logo:** `<> Pipeline.dev` in JetBrains Mono 700 (1rem), Go Light Green, with a blinking cursor (`|`) appended via CSS `::after` and a `blink` step-animation at 1s. The cursor is the brand's only animation not tied to content state.
- **Nav links:** 0.85rem Inter, Text Stone at rest; Active Cyan text + cyan-dim (15% opacity) background on hover and active section. 6px radius, 8px/14px padding, 0.2s all-transition.
- **Mobile:** Links hidden below 650px. No hamburger menu currently implemented.

### Section Tags
Pill-shaped labels (20px radius) in JetBrains Mono 700, 0.75rem, uppercase, letter-spacing 0.15em, 6px top / 14px side padding. Color-coded by section theme using the pipeline stage palette: green for fundamentals and PROD concepts, cyan for interactive architecture content, yellow for warnings and QA, purple for advanced topics, blue for informational, red for risk/danger sections. Each tag uses a ~15% opacity fill and a same-hue border.

### Cards
- **Shape:** Gently rounded (12px radius). Not circular, not sharp.
- **Background:** Card Slate (`#1a2235`) at rest; no shadow.
- **Border:** 1px Edge Mist (`#2d3748`) at rest; shifts to Active Cyan on hover.
- **Hover:** `translateY(-2px)` lift + Ambient Card shadow. Fast (200ms, all transition).
- **Internal padding:** 28px uniform.
- **Content:** Card title at 1.05rem weight 600; body text at 0.9rem Text Stone.

### Pipeline Step (signature component)
The most distinctive element. A rectangular interactive tile representing one stage in the delivery pipeline.

- **Default:** Card Slate background, Edge Mist border, radius-md (8px), 16px/20px padding, min-width 120px. Step icon (1.5rem) above a JetBrains Mono label (0.78rem weight 600, Text Stone).
- **Hover:** Border goes Active Cyan, background shifts to Card Hover (`#1e2a40`). 0.3s transition.
- **Active:** Background goes go-green-dim (15% opacity), border goes Go Light Green, text goes Go Light Green, and the Glow Green shadow pulses via `stepGlow` keyframe (2s infinite). This state represents a stage currently "running" in the animated hero sequence.
- **Click behavior:** Activates a detail panel below the step row with the stage's description. Clicking the active step toggles the panel off.

### Environment Badges
Small pill labels (4px radius) in JetBrains Mono 700, 0.7rem, uppercase, 3–4px top / 8–10px side padding. Fixed color per pipeline stage: DEV=Blue, QA=Amber, STAGING=Purple, PROD=Go Green. Each uses a ~20% opacity background fill and a ~30% opacity contrasting border. These are not interchangeable; the color and label must agree.

### Code Blocks
Full-bleed dark container (`#0d1117`), rounded-lg (12px) outer wrapper with 1px Edge Mist border and Ambient Card shadow.

- **Header bar** (`#161b22`): Language label (0.72rem mono, Text Graphite, uppercase, letter-spacing 0.1em) on the left; Copy button on the right.
- **Copy button:** Transparent background, Edge Mist border, 4px radius, 0.72rem mono, Text Graphite at rest. Hover and "copied" state: Go Light Green text + border. 0.2s transition.
- **Code area:** JetBrains Mono 400, 0.85rem, line-height 1.6, 20px padding. Background `#0d1117` (slightly darker than the card to create a legible code surface).

### Highlight Callouts (info-box, warning-box, quote-box)
Currently implemented with a 4px left-border stripe. This pattern is frozen for the existing instances; new callout elements must use full borders or background-only differentiation. See Do's and Don'ts.

- **Info:** Blue-dim background + 30% opacity blue border + 4px left-border accent (existing; do not replicate).
- **Warning:** Amber-dim background + 30% opacity amber border + 4px left-border accent (existing; do not replicate).
- **Quote:** Green-dim (6% opacity) background + 4px left-border green accent + 0 right-radius (existing; do not replicate). 1.1rem italic Inter, line-height 1.7.

### Step List (numbered setup guide)
Vertical list with 32px top/bottom padding per step, 1px Divider Smoke border between steps. Each step: a 40px circle (2px Go Light Green border, green-dim fill, JetBrains Mono 800, 1rem) for the number, followed by title (1.1rem weight 700) and prose body (Text Stone).

## 6. Do's and Don'ts

### Do:

- **Do** use the five pipeline stage colors strictly within their semantic roles: Go Light Green = PROD/passing, Active Cyan = interactive/links, DEV Blue = development environment, QA Amber = quality assurance, STAGING Purple = pre-production, Danger Red = errors and risk. A purple decorative element is a wrong as a mislabeled deploy.
- **Do** use JetBrains Mono for every terminal-adjacent element: nav logo, section tags, badges, environment labels, pipeline step names, inline code, copy button text. Use Inter for every explanatory element: headings, body, subtitles.
- **Do** keep surfaces flat at rest. Add the Ambient Card shadow only as a hover response, the Glow Green only for an active-state pipeline element. Glows that decorate at rest are prohibited.
- **Do** maintain section rhythm: 100px vertical padding per section, 60px margin below section headers. Compressing these to fit more content inverts the "teach through clarity, not density" principle.
- **Do** limit prose line length to 65–75ch. The section-subtitle `max-width: 650px` already enforces this on subtitle text; apply the same constraint to any new long-form prose columns.
- **Do** use scroll-reveal (opacity 0 to 1 + translateY(24px) to 0, 500ms ease) for new content sections, preserving the choreographed entrance feel across the page.
- **Do** maintain the four-layer tonal depth: `bg-deep-navy` / `bg-surface` / `bg-card` / `bg-card-hover`. Do not introduce additional background layers between or beyond these steps.
- **Do** size all clickable/interactive elements to at minimum 44x44px touch targets and add visible `:focus-visible` outlines per WCAG 2.1 AA. The current nav links and pipeline steps meet this; new components must too.

### Don't:

- **Don't** add social proof rows, "Trusted by X teams" banners, hero metric grids, or gradient CTAs. Pipeline.dev is a teaching page, not a product landing page. The quality of the explanation is the credential; performing authority undermines it.
- **Don't** use neon-on-black, glow-everything, or cyberpunk aesthetics. The terminal darkness exists because the subject matter lives in terminals. It is not a visual style choice. Any element that reads as "cool dark mode" rather than "purposeful tool aesthetic" has failed.
- **Don't** create dense text walls. If any section runs more than four paragraphs of prose without a visual break (diagram, interactive component, code block, or section pause), the content needs restructuring, not more text.
- **Don't** use `background-clip: text` with a gradient fill (gradient text). Gradient text is decorative and never meaningful. Use a single solid color. Emphasis through weight or size.
- **Don't** add new side-stripe border-left accents greater than 1px as colored decoration on callouts, alert boxes, or list items. The existing info-box, warning-box, quote-box, and pipeline-detail use this pattern; they are frozen in place, not a template to follow. New callout elements must use full borders or background-only differentiation.
- **Don't** use emoji as primary icons in new components. The existing `.card-icon` class (2rem emoji) is a known legacy pattern; do not extend it. New icons must be inline SVG.
- **Don't** introduce new accent colors outside the existing palette. The semantic five-stage system already spans the full spectrum of meaning the page requires. A new accent color is almost certainly a signal looking for a pre-existing home.
- **Don't** animate layout properties (width, height, padding, top, left). Use only `transform` and `opacity`. The existing card hover uses `translateY(-2px)`; all future motion must follow the same rule.
- **Don't** produce a page that looks like a generic DevOps blog (beige backgrounds, stock photography, listicle structure, no visual personality). If an element could appear unchanged on a Medium article or a WordPress DevOps blog, it is not distinctive enough.
