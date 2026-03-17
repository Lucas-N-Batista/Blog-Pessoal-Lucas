# Blog Pessoal Lucas

![Badge do workflow Netlify](https://github.com/lucasbatista/blog-pessoal-lucas/actions/workflows/netlify-deploy.yml/badge.svg)

Projeto criado para atender o desafio da DIO com uma adaptação moderna da proposta original.

## Referência do desafio

Repositório-base usado como referência funcional:

- https://github.com/digitalinnovationone/trilha-react-desafio-5

O desafio original parte de um blog com posts em MDX, customização do site e deploy Jamstack. Nesta implementação, a arquitetura foi atualizada para `Next.js + App Router + TypeScript`.

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- MDX local com `next-mdx-remote`
- Netlify como alvo principal de deploy

## Instalação

```bash
npm install
```

## Configuração

1. Crie o arquivo `.env.local` a partir do exemplo:

```bash
cp .env.example .env.local
```

2. Ajuste os valores do blog:

```env
BLOG_NAME="Lucas Batista"
BLOG_TITLE="Diário de Código"
BLOG_DESCRIPTION="Blog pessoal sobre frontend, carreira e construção de produtos web."
BLOG_FOOTER_TEXT="Feito com Next.js e publicado na Netlify."
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
GITHUB_USERNAME=""
GITHUB_TOKEN=""
```

`GITHUB_USERNAME` habilita importação automática de repositórios na página de projetos.

`GITHUB_TOKEN` é opcional, mas ajuda a reduzir risco de rate limit da API do GitHub.

## Desenvolvimento

```bash
npm run dev
```

Aplicação local: `http://localhost:3000`

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Estrutura principal

```text
src/
	app/
	components/
	content/posts/
	lib/
	mdx/
	types/
```

## Feed RSS

O projeto expõe um feed RSS em:

```text
/feed.xml
```

Use essa rota para integração com leitores de feed e distribuição de conteúdo.

## Página de projetos dinâmica

A rota `/projetos` combina:

1. Projetos curados locais (`src/lib/projects.ts`)
2. Repositórios públicos do usuário definido em `GITHUB_USERNAME`

Se `GITHUB_USERNAME` não for informado, a página funciona apenas com os projetos locais.

## Como criar um novo post

Adicione um arquivo `.mdx` em `src/content/posts` com frontmatter:

```mdx
---
title: "Título do post"
excerpt: "Resumo curto do conteúdo."
publishedAt: "2026-03-17"
tags:
	- Next.js
	- MDX
featured: false
---

Seu conteúdo em MDX aqui.
```

## Deploy na Netlify

1. Suba o projeto para um repositório Git.
2. No painel da Netlify, crie um novo site a partir do repositório.
3. Configure as variáveis de ambiente:

```text
BLOG_NAME
BLOG_TITLE
BLOG_DESCRIPTION
BLOG_FOOTER_TEXT
NEXT_PUBLIC_SITE_URL
```

4. Se a Netlify pedir configuração manual, use:

```text
Build command: npm run build
```

Observação: a Netlify atual suporta `Next.js App Router` automaticamente com o adapter OpenNext. Este projeto não fixa plugin legado do template original.

## Deploy automático via GitHub Actions

Foi adicionado um workflow em `.github/workflows/netlify-deploy.yml`.

Se o repositório final usar outro owner/repo, atualize o link do badge na primeira linha deste README.

Para habilitar o deploy contínuo, configure estes secrets no GitHub:

```text
NETLIFY_AUTH_TOKEN
NETLIFY_SITE_ID
```

Quando houver push na branch `main`, o workflow executa lint, build e deploy em produção na Netlify.
