# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (lockfile present).

- `pnpm dev` — start the Next.js dev server on http://localhost:3000
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — `eslint .`

There is no test suite.

`next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so `pnpm build` will **not** fail on type errors. Run `pnpm exec tsc --noEmit` separately to surface them.

## Stack

- **Next.js 16** App Router, **React 19**, TypeScript (strict).
- **Tailwind v4** with CSS-first config — all design tokens live in `app/globals.css` under `:root`, `.dark`, and the `@theme inline { ... }` block. There is no `tailwind.config.js`. PostCSS uses `@tailwindcss/postcss`.
- **shadcn/ui** (`components.json`: style `new-york`, base color `neutral`, RSC enabled, lucide icons). Generated primitives live in `components/ui/` — treat as generated; add new ones with `pnpm dlx shadcn@latest add <component>` rather than handwriting.
- Path alias `@/*` → repo root (so `@/components/...`, `@/lib/utils`, `@/hooks/...`).
- `lib/utils.ts` exports `cn()` (clsx + tailwind-merge) — use it for all conditional Tailwind classes.

## Architecture

This is a Portuguese-language (pt-BR) marketing site for **Promina**, an equipment rental company in Paraíba, Brazil. Content, route segments, and identifiers are in Portuguese (`maquinas`, `obrigado`, `equipamentos`, `categorias`) — match this convention in new code.

### Routes
- `/` (`app/page.tsx`) — single-page composition of section components from `components/` (`HeroSection`, `MaquinasSection`, `HomecenterSection`, `AutoridadeSection`, `LocacaoEquipamentosSection`, `AvaliacoesSection`, `LocalizacoesSection`, plus `Navbar`, `Footer`, `WhatsAppFAB`).
- `/maquinas` — full equipment catalog. Deep-linkable category filter via `?categoria=<id>` (read with `useSearchParams`; the page is `"use client"` and wraps in `Suspense`). Includes client-side search, sort, and infinite scroll. Product and category data are hard-coded inline in `app/maquinas/page.tsx` (~800 lines).
- `/obrigado` and three branch-specific variants: `/obrigado/campina-grande`, `/obrigado/joao-pessoa`, `/obrigado/home-center` — post-contact thank-you pages.

### The three-unit contact pattern (important)

The business has three contact endpoints: **Locação Campina Grande**, **Locação João Pessoa**, and **Home Center Campina Grande**. The same unit list is duplicated in **three places**:

- `components/contact-button.tsx` — dropdown shown by CTA buttons
- `components/whatsapp-fab.tsx` — floating WhatsApp button
- `components/localizacoes-section.tsx` — the locations section on the homepage

Each unit has a `telefone` (wa.me phone), an `obrigadoUrl` (its `/obrigado/<slug>` page), and a `mensagem`. The selection flow is always: `router.push(obrigadoUrl)` → small delay → `window.open("https://wa.me/<telefone>?text=<mensagem>", "_blank")`. **When a phone number, slug, or unit is added/removed, update all three files** or the UI will drift.

`ContactButton` is the standard CTA wrapper — prefer it over a bare `<a href="https://wa.me/...">`. Pass a custom `message` prop to prefill context (e.g. the product name on `/maquinas`).

### Branding & styling

- Brand colors: **Promina Yellow `#FFCC29`**, **Industrial Black `#363334`**, gray `#6B6B6B`, light `#F5F5F5`.
- Exposed both as Tailwind theme tokens (`bg-primary`, etc., via the `@theme inline` block in `globals.css`) **and** as hard-coded hex literals throughout section components (`bg-[#FFCC29]`, `text-[#363334]`). Both styles are accepted in this codebase — match the surrounding file.
- Theme color (`viewport.themeColor`) is the brand yellow, set in `app/layout.tsx`.

### Images & assets

- `next/image` is used everywhere. Remote images are hosted on `hebbkx1anhila5yf.public.blob.vercel-storage.com` (Vercel Blob); this host is whitelisted in `next.config.mjs` along with AVIF/WebP formats. New blob URLs from the same host work without config changes.
- Local assets live in `public/` (logos, icons, `images/`, `videos/`).

### Analytics & tracking

`app/layout.tsx` injects three things into every page via `next/script` (`afterInteractive`): **Google Tag Manager** (`GTM-W3B9BPCW`), **Meta Pixel** (`938337469115777`), and `@vercel/analytics`. The Meta Pixel fires a `PageView` on load. Be aware of these when adding new tracking — don't double-fire events.

## Deployment & v0

This repo is linked to a **v0** project and **auto-deploys to Vercel on every merge to `main`** (per `README.md`). v0 can push commits directly to the repo, so the working tree may change between sessions — `git pull` before starting non-trivial work, and don't be surprised by unfamiliar commits authored by v0.
