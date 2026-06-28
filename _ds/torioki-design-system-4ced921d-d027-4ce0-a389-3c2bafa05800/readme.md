# Torioki Design System

**Torioki（とりおき）** is a SaaS for independent shop owners — bakeries, pâtisseries, small
food makers — who take "取り置き"（hold / reserve）requests through Instagram DMs. A rule-based
AI parses each incoming DM, replies automatically, and records the request in a **取り置き台帳
(reservation ledger)**. The owner is typically non-technical and busy behind a counter, so the
product's whole job is to be calm, glanceable, and trustworthy.

This repository is the **design system** that backs that product: tokens, fonts, reusable React
primitives, foundation specimen cards, and a full UI-kit recreation of the management dashboard.

> **Sources.** This system was built fresh from a written product brief (Japanese). There was **no
> attached codebase, Figma file, or screenshot** — so the visual language below (accent color,
> typeface, status palette, the wordmark) is an original proposal, not a recreation of an existing
> Torioki UI. If a real Torioki brand or codebase exists, share it and this system should be
> reconciled against it. See **CAVEATS** at the bottom.

---

## Design direction

Cool, quiet, **Muji-like SaaS**. Function-as-beauty: hierarchy is built from **type and whitespace**,
not decoration. Warm off-white surfaces, hairline rules, barely-there shadows, and a **single
restrained accent** — a muted clay/terracotta that nods to the bakery world. Status colors are
deliberately low-chroma: distinguishable, never loud. Mobile and desktop are weighted equally, and
the whole thing follows `prefers-color-scheme` for dark mode.

---

## Content fundamentals (voice & copy)

The product speaks the way a calm, competent shop assistant would — to the **owner**, about **their
customers**.

- **Language:** Japanese throughout. UI labels are short noun phrases (`取り置き台帳`, `本日のお渡し`,
  `未確認`, `動作確認`). Full sentences appear only in helper/empty/auto-reply text.
- **Politeness:** the **owner-facing UI** is plain and direct (です/ます kept minimal in labels —
  `未確認`, `確定`, not `未確認です`). The **customer-facing auto-replies** are warm 敬語 with さま:
  e.g. _「ありがとうございます！クロワッサン×2を承りました。」_ Customers are addressed as 〇〇さま.
- **Person:** the UI rarely says "あなた/私". It names things, not actors — `本日のお渡し`, not
  `あなたの本日の予定`.
- **Tone:** reassuring, never alarmist. Empty state reads _「まだ取り置きはありません」_ then explains what
  will happen, rather than apologizing. Items needing attention are flagged factually:
  _「受取時間が読み取れませんでした」_.
- **Casing & Latin:** the wordmark is lowercase `torioki.`. Latin/numerals use tabular figures.
  Tiny Latin meta labels (e.g. `high` / `medium` / `low`) stay lowercase.
- **Emoji:** **none** in product UI. Meaning is carried by color, icons, and type. (The exception is
  the occasional Japanese counter/particle, never pictographs.)
- **Numbers:** always with a counter — `3件`, `×2`, `1.5斤`. Always tabular so columns align.

**Example strings**
| Context | String |
|---|---|
| Page subtitle | `DMの取り置きを、自動で台帳に。` |
| Summary stat | `本日のお渡し` · `未確認` · `今後の予定` |
| Status chip | `未確認` / `確定` / `受渡済` / `キャンセル` |
| Note (attention) | `受取時間が読み取れませんでした` |
| Auto-reply (high) | `ありがとうございます！〇〇×2 を承りました。本日 10:30 以降にお渡しできます。` |
| Auto-reply (low) | `内容を確認したいのですが、ご希望の商品とお受け取り日時をもう一度教えていただけますか？` |

---

## Visual foundations

**Color.** Warm-tinted neutral grayscale carries ~95% of the UI. The **one** brand accent is a muted
**clay** (`--accent-500` `#a66b50`), used sparingly: the wordmark dot, the primary button, outgoing
auto-reply bubbles, the "today" group marker, and stat emphasis. Status colors
(未確認=ochre, 確定=sage, 受渡済=slate, キャンセル=rose) are low-chroma fills with a matching border and
text — they read at a glance without shouting. Confidence is a 3-bar meter (green/amber/rose). Every
color is a semantic token (`--surface`, `--text-1`, `--border`, `--accent`…) that flips automatically
in dark mode; components never hard-code hex.

**Type.** A single family — **Zen Kaku Gothic New** — does nearly everything; hierarchy comes from
size and weight (400/500/700), not from mixing typefaces. **IBM Plex Mono** is used only for IDs,
timestamps, and tabular detail. Tracking is near-zero (Japanese gothic wants it); only tiny Latin
labels get `+0.04em`. Body is 15px; nothing in the dashboard goes below 11px and that only for
micro-meta.

**Space & layout.** 4px spacing scale, generous by default. Max content width 1200px. Two columns
above 900px (ledger 1.35fr / DM 1fr); a single stacked column below, ledger first. Hit targets ≥ 40px.

**Shape.** Soft radii (`--radius-md` 10px on controls, `--radius-lg` 14px on cards/panels). **Pills
are reserved for chips and badges only** — never on containers. Cards = `--surface` + 1px
`--border` hairline + `--shadow-sm`. Most separation is done with hairline borders; shadows stay
faint and warm-tinted (`rgba(26,24,21,…)` in light, soft black in dark).

**Depth & blur.** Four-step shadow scale, all low-spread. Backdrop blur appears in exactly two
places: the sticky header and the sticky date-group headers — a light `blur(4–8px)` over a
semi-transparent surface so content scrolls cleanly underneath. No glassmorphism beyond that.

**Motion.** Quiet and quick. `--dur-fast 120ms` / `--dur-base 180ms` with a gentle `--ease-out`.
Buttons depress slightly on `:active` (`scale .992`), chips shrink (`scale .96`), the refresh icon
spins while loading, skeletons shimmer. Everything is gated by `prefers-reduced-motion: reduce`.

**Hover / press.** Hover = a step to `--surface-hover` (a faint warm gray) and/or border darkening;
primary button darkens one accent step. Press = subtle scale-down, never a color flip. Focus is a
2px `--ring` (accent at ~38% alpha) with 2px offset — consistent across every control.

**Imagery.** The product is essentially imageless by design — it's a ledger, not a gallery. The only
brand graphic is the geometric clay **tag-mark** (a rounded square with a punched hole, in
`assets/mark.svg`). No photography, gradients-as-decoration, or illustration.

---

## Iconography

- **Set:** [**Lucide**](https://lucide.dev) — thin (1.5–2px), rounded-cap stroke icons that match the
  calm, minimal tone. Loaded from CDN (`unpkg.com/lucide`) and rendered with `data-lucide="<name>"`
  then `lucide.createIcons()`.
- **Why a substitution:** there was no codebase icon font/sprite to copy, so Lucide was chosen as the
  closest fit for a quiet, hairline aesthetic. **⚠️ Flagged** — swap for the real set if one exists.
- **Icons in use:** `refresh-cw`, `moon`/`sun` (theme), `send`, `instagram`, `flask-conical`
  (動作確認), `alert-circle` (notes), `inbox` (empty), `more-horizontal`, `check`.
- **Sizing:** 13–22px, `currentColor`, so icons inherit text color and theme automatically.
- **No emoji, no Unicode pictographs** as icons. The one symbolic glyph used is `⇆` inside an
  interactive `StatusChip` to signal "tap to change" — deliberate and singular.
- **Brand mark:** `assets/mark.svg` (geometric, single clay fill, transparent punch-hole) — safe on
  any background. Pair with the lowercase wordmark `torioki.`.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `base.css` — element resets & base typography.
- `components.css` — class-based component styles (token-driven), prefixed `tk-`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `assets/mark.svg` — brand tag-mark.
- `readme.md` (this file) · `SKILL.md` — portable Agent-Skill wrapper.

**Tokens** — 146 custom properties: warm neutral & clay ramps, semantic surface/text/border/accent
aliases, a 4-color status set, confidence colors, type scale, spacing/radius/shadow, motion. Both
light (`:root`) and dark (`@media prefers-color-scheme` + `[data-theme="dark"]`).

**Components** (`window.ToriokiDesignSystem_4ced92.*`)
| Group | Components |
|---|---|
| `core/` | `Button`, `IconButton` |
| `forms/` | `Input` (incl. multiline), `Toggle`, `Select` |
| `data/` | `StatusChip` ⭐, `ConfidenceBadge`, `Badge`, `Card`, `Avatar`, `SummaryStat` |
| `feedback/` | `EmptyState`, `Skeleton` |
| `messaging/` | `MessageBubble` |

`StatusChip` is the signature primitive: status is **always** a one-tap colored chip, never a
`<select>`.

**UI kits**
- `ui_kits/torioki-dashboard/` — the full management dashboard (`index.html` + `Header`, `Ledger`,
  `DMPanel`, `App`). Interactive: cycle status by tapping a chip, open a customer's thread from a row,
  send a 擬似DM and watch the auto-reply + new 未確認 reservation appear. Responsive + dark-ready.
- `ui_kits/torioki-settings/` — the settings screen (`index.html` + `Settings`). Edits 店舗情報 /
  営業時間 / 自動返信文 / 受け取り設定 with section nav + scrollspy, dirty-tracking, a sticky save bar,
  a live auto-reply preview, and `{ }` merge-field tokens. Responsive + dark-ready.
- `ui_kits/torioki-onboarding/` — login (Instagram + email) → 3-step setup → done.
- `ui_kits/torioki-confirm/` — public, read-only customer reservation confirmation page (mobile-first).
- `ui_kits/torioki-notifications/` — notifications (unread) + history (status filter) screen.

**Handoff** — `design_handoff_torioki/`: `README.md` (screen-by-screen + tokens + state) and
`API_REQUIREMENTS.md` (✅ confirmed endpoints vs 🟡 needed-but-unspecified, per screen, with shapes).

**Foundation cards** (Design System tab) — `guidelines/*.card.html`: accent & neutral ramps, status
palette, surfaces/text, confidence, type scale & families, spacing/radius/elevation, wordmark.

---

## Production status

Moving toward a real **React + TypeScript (Next.js)** implementation with the live API. Confirmed:
accent = **clay**; icons = **Lucide**; dark mode = **kept** (auto + manual). New screens being designed
before handoff: **login/onboarding, settings (done), customer-facing reservation confirmation,
notifications/history**. The running production app is built in a dev environment (Claude Code / the
team repo) from the handoff package — this project supplies the design system, screen designs, content,
and the component→endpoint mapping.

## CAVEATS
- Built from a **text brief only** — no real brand assets. Accent, type, mark, and status hues are an
  original proposal awaiting confirmation.
- **Fonts** are loaded from **Google Fonts CDN** (Zen Kaku Gothic New, IBM Plex Mono); no local
  binaries are shipped. If you need offline/self-hosted fonts, add the files + `@font-face` rules.
- **Icons** are **Lucide via CDN** as a substitute for an unknown house set.
