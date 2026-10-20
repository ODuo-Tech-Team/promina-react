# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **npm** (padrão oficial da infraestrutura Hostinger). O lockfile oficial é `package-lock.json` (`pnpm-lock.yaml` e `pnpm-workspace.yaml` foram removidos).

- `npm run dev` — start the Next.js dev server on http://localhost:3000
- `npm run build` — production build (executa `next build --webpack`)
- `npm start` — serve the production build
- `npm run lint` — `eslint .`

> [!IMPORTANT]
> **Obrigatório `--webpack` no build**: No Next.js 16, o comando padrão `next build` aciona o Turbopack. No ambiente Linux da Hostinger, o Turbopack falha ao avaliar o PostCSS com `@tailwindcss/postcss` (`child process exits with status 0 before connecting`). O comando no `package.json` deve ser sempre `"build": "next build --webpack"`.

There is no test suite.

`next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so `npm run build` will **not** fail on type errors. Run `npx tsc --noEmit` separately to surface them.

## Stack

- **Next.js 16** App Router, **React 19**, TypeScript (strict).
- **Tailwind v4** with CSS-first config — all design tokens live in `app/globals.css` under `:root`, `.dark`, and the `@theme inline { ... }` block. There is no `tailwind.config.js`. PostCSS uses `@tailwindcss/postcss`.
- **shadcn/ui** (`components.json`: style `new-york`, base color `neutral`, RSC enabled, lucide icons). Generated primitives live in `components/ui/` — treat as generated; add new ones with `npx shadcn@latest add <component>` rather than handwriting.
- Path alias `@/*` → repo root (so `@/components/...`, `@/lib/utils`, `@/hooks/...`).
- `lib/utils.ts` exports `cn()` (clsx + tailwind-merge) — use it for all conditional Tailwind classes.

## Architecture

This is a Portuguese-language (pt-BR) marketing site for **Promina**, an equipment rental company in Paraíba, Brazil. Content, route segments, and identifiers are in Portuguese (`maquinas`, `obrigado`, `equipamentos`, `categorias`) — match this convention in new code.

### Routes
- `/` (`app/page.tsx`) — single-page composition of section components from `components/` (`HeroSection`, `MaquinasSection`, `HomecenterSection`, `AutoridadeSection`, `LocacaoEquipamentosSection`, `AvaliacoesSection`, `LocalizacoesSection`, plus `Navbar`, `Footer`, `WhatsAppFAB`).
- `/maquinas` — full equipment catalog. Deep-linkable category filter via `?categoria=<id>` (read with `useSearchParams`; the page is `"use client"` and wraps in `Suspense`). Includes client-side search, sort, and infinite scroll. Product and category data are hard-coded inline in `app/maquinas/page.tsx` (~800 lines).
- `/massa-expansiva` (`app/massa-expansiva/page.tsx`) — LP de massa expansiva para demolição de rocha (sem explosivos).
- `/containers` (`app/containers/page.tsx`) — LP de locação de containers.
- `/plataformas` (`app/plataformas/page.tsx`) — LP de plataformas elevatórias.
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

`app/layout.tsx` injects Google Tag Manager (`GTM-WSFNZ264`), Meta Pixel (`938337469115777`), and `@vercel/analytics`.

---

## Deploy na Hostinger (grupopromina.com.br) — Regra Obrigatória

> ⚠️ **ATENÇÃO:** O site `grupopromina.com.br` roda em aplicação **Node.js (Next.js)** dentro da Hostinger (hPanel). Ele **NÃO** roda na Vercel e o push no GitHub `main` **NÃO** publica sozinho. Todo deploy é manual via upload de arquivo `.zip` no hPanel.

### 1. Regras de Empacotamento do ZIP
O pacote ZIP enviado para a Hostinger deve conter estritamente o código-fonte limpo:
- **Estrutura interna:** A raiz do ZIP deve conter a pasta `promina-react/` (para respeitar o "Diretório raiz: promina-react" configurado no hPanel).
- **NUNCA incluir `node_modules/`:** O servidor da Hostinger roda Linux e precisa compilar/instalar suas próprias dependências nativas (`lightningcss-linux-x64-gnu`, `sharp`). Binários do Windows quebram o build.
- **NUNCA incluir `.next/`:** Caches locais de compilações anteriores causam falha no Turbopack/Webpack.
- **NUNCA incluir arquivos temporários ou residuais do hPanel:** Ex: `*next.config.mjs` malformados.
- **Lockfile oficial:** Manter sempre `package-lock.json` atualizado gerado por `npm install`. Nunca incluir `pnpm-lock.yaml` ou `pnpm-workspace.yaml`.

### 2. Como gerar o ZIP de deploy atualizado
No terminal, dentro de `LandingPages Oduo/promina-react`:
```bash
git archive --format=zip --prefix=promina-react/ -o promina-react-deploy.zip HEAD
```
*(Esse comando garante que apenas os arquivos versionados entrem no ZIP com a pasta `promina-react/` na raiz, excluindo automaticamente `.next`, `node_modules`, zips anteriores e arquivos soltos).*

### 3. Limpeza no servidor antes de reimplantar (se houve falha de build anterior)
Se o build na Hostinger falhou anteriormente:
1. No hPanel, vá em **Sites** → `grupopromina.com.br` → **Gerenciador de Arquivos**.
2. Na pasta do site (`promina-react/` ou raiz da aplicação):
   - Exclua a pasta `.next/` residual.
   - Exclua a pasta `node_modules/` residual.
   - Exclua arquivos corrompidos/duplicados como `*next.config.mjs` (ex: `6ad7d0dc97c0e.next.config.mjs`).
3. Volte em **Aplicações Node.js / Implantações**.
4. Clique em **Reimplantar** → **"Configurações e reimplantação"** → envie o novo ZIP (`promina-react-deploy.zip`).
5. Parâmetros do painel:
   - **Framework**: `Next.js`
   - **Versão do Node**: `22.x`
   - **Comando de build**: `npm run build`
   - **Gerenciador de pacotes**: `npm`
   - **Diretório de saída**: `.next`
   - **Diretório raiz**: `promina-react`
6. Clique em **Salvar e reimplantar**.
