# Regras de Desenvolvimento e Deploy — Promina (grupopromina.com.br)

> Este arquivo documenta o fluxo obrigatório de alterações, build e deploy para o site do **Grupo Promina** (`promina-react`). Siga rigorosamente este padrão em qualquer nova alteração para evitar erros de compilação na Hostinger.

---

## 1. Contexto e Arquitetura de Hospedagem

- **Domínio**: `https://grupopromina.com.br`
- **Páginas e Rotas**:
  - `/` — Homepage institucional
  - `/maquinas` — Catálogo de máquinas e equipamentos
  - `/massa-expansiva` — LP de massa expansiva para desmonte de rocha
  - `/containers` — LP de locação de containers
  - `/plataformas` — LP de plataformas elevatórias
  - `/obrigado/*` — Páginas de agradecimento das 3 unidades (Campina Grande, João Pessoa, Home Center)
- **Hospedagem**: **Hostinger — Aplicações Node.js** (container Linux).
- **Importante**: O site **NÃO** roda na Vercel e **NÃO** possui deploy automático via push no GitHub. Toda publicação em produção é realizada via upload manual de arquivo `.zip` no hPanel.

---

## 2. Regras Obrigatórias de Dependências e Build

### 2.1. Gerenciador de Pacotes: Exclusivamente `npm`
- O container da Hostinger executa `npm install` e `npm run build`.
- **NUNCA usar ou commitar arquivos do pnpm**: Os arquivos `pnpm-lock.yaml` e `pnpm-workspace.yaml` foram permanentemente removidos. O único lockfile oficial e versionado é o `package-lock.json`.
- Sempre que adicionar ou atualizar uma dependência, execute:
  ```bash
  npm install
  ```

### 2.2. Obrigatório `--webpack` no Script de Build
- O projeto utiliza **Next.js 16** e **Tailwind CSS v4** (`@tailwindcss/postcss`).
- No Next.js 16, o comando padrão `next build` ativa o **Turbopack**.
- Em containers Linux da Hostinger, o Turbopack apresenta falha ao instanciar o processo filho do PostCSS para o Tailwind v4 (`Turbopack spawns a Node child process... exits with status 0 before connecting`).
- **REGRA FIXA**: O script no [`package.json`](file:///C:/Users/T480/Documents/00%20-%20Ag%C3%AAncia/Projetos%20e%20Ferramentas%20Denis/07%20-%20Projetos%20ODUO/LandingPages%20Oduo/promina-react/package.json) deve ser **obrigatoriamente**:
  ```json
  "scripts": {
    "dev": "next dev",
    "build": "next build --webpack",
    "start": "next start",
    "lint": "eslint ."
  }
  ```

### 2.3. Configuração do Next.js (`next.config.mjs`)
- Manter configuração limpa com `typescript: { ignoreBuildErrors: true }`.
- Não utilizar `output: 'standalone'`, pois o preset Next.js da Hostinger inicia o servidor via `next start` lendo a pasta `.next/`. O modo standalone aumenta o tempo de build e gera tracing desnecessário no servidor.

---

## 3. Regras de Empacotamento do ZIP de Deploy

Ao gerar o pacote para upload no hPanel:

1. **Estrutura interna obrigatória**: A raiz do ZIP deve conter a pasta `promina-react/` (ex: `promina-react/package.json`, `promina-react/app/...`), porque no hPanel o campo **"Diretório raiz"** está configurado como `promina-react`.
2. **O que NUNCA deve entrar no ZIP**:
   - ❌ `node_modules/`: Conflita binários de plataforma (Windows vs Linux: `sharp`, `lightningcss-linux-x64-gnu`). A Hostinger instala as dependências nativas automaticamente.
   - ❌ `.next/`: Caches locais antigos quebram o build do servidor.
   - ❌ `pnpm-lock.yaml` ou `pnpm-workspace.yaml`.
   - ❌ Arquivos de backup gerados pelo editor do hPanel (ex: `*next.config.mjs` com prefixos aleatórios).
   - ❌ Pasta `.git/` e arquivos `.zip` legados.

### Comando Oficial para Gerar o ZIP
Execute no terminal dentro da pasta `LandingPages Oduo/promina-react`:
```bash
git archive --format=zip --prefix=promina-react/ -o promina-react-deploy.zip HEAD
```
> Esse comando lê apenas os arquivos versionados no Git, garantindo um ZIP limpo, leve (~5.8 MB) e com a pasta raiz correta.

---

## 4. Procedimento de Publicação no hPanel (Hostinger)

### 4.1. Limpeza Preventiva no Servidor (em caso de falha anterior)
Se uma implantação anterior tiver falhado, antes de subir o novo pacote:
1. Acesse o **hPanel** > **Sites** > `grupopromina.com.br` > **Gerenciador de Arquivos**.
2. Na pasta do site (`promina-react/`):
   - Exclua a pasta `.next/` residual.
   - Exclua a pasta `node_modules/` residual.
   - Exclua arquivos corrompidos ou cópias com hash (ex: `6ad7d0dc97c0e.next.config.mjs`).

### 4.2. Upload e Reimplantação
1. No menu lateral da Hostinger, vá em **Aplicações Node.js / Implantações (Deployments)**.
2. Clique em **Reimplantar** > **"Configurações e reimplantação"**.
3. Em **Carregar novos arquivos**, faça o upload do arquivo `promina-react-deploy.zip`.
4. Valide se as configurações permanecem:
   - **Framework**: `Next.js`
   - **Versão do Node**: `22.x`
   - **Comando de build**: `npm run build`
   - **Gerenciador de pacotes**: `npm`
   - **Diretório de saída**: `.next`
   - **Diretório raiz**: `promina-react`
5. Clique em **Salvar e reimplantar** e aguarde o build (~3 a 5 minutos).
6. Teste as páginas no navegador.

---

## 5. Checklist Pré-Deploy (Toda Alteração)

- [ ] Código testado localmente com `npm run build` sem erros.
- [ ] `package.json` conferido com `"build": "next build --webpack"`.
- [ ] `package-lock.json` atualizado via `npm install`.
- [ ] Alterações commitadas no Git (`git commit`).
- [ ] ZIP gerado com `git archive --format=zip --prefix=promina-react/ -o promina-react-deploy.zip HEAD`.
- [ ] Upload efetuado no hPanel e validação no ar em `grupopromina.com.br`.
