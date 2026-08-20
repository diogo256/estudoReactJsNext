# estudoReactJsNext

Este repositório reúne um projeto de estudo focado em React.js e Next.js, com a construção de uma calculadora interativa em uma aplicação web.

## O que contém

- Uma aplicação em Next.js dentro da pasta [calculadora](calculadora)
- Componentes reutilizáveis para interface da calculadora
- Estilização com Styled Components
- Lógica de operações matemáticas básicas: soma, subtração, multiplicação, divisão e decimal
- Estrutura inicial de um projeto em App Router do Next.js

## Estrutura do projeto

```text
estudoReactJsNext/
├── README.md
├── calculadora/
│   ├── README.md
│   ├── package.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── eslint.config.mjs
│   ├── public/
│   └── src/
│       └── app/
│           ├── globals.css
│           ├── layout.tsx
│           ├── page.tsx
│           └── components/
│               ├── Button/
│               ├── Calculadora/
│               └── Input/
```

## Aplicação principal

A pasta [calculadora](calculadora) contém a aplicação web desenvolvida em Next.js. O ponto de entrada da página é [calculadora/src/app/page.tsx](calculadora/src/app/page.tsx), onde a calculadora é renderizada.

A lógica da calculadora está em [calculadora/src/app/components/Calculadora/index.tsx](calculadora/src/app/components/Calculadora/index.tsx), com componentes de botão e input organizados em subpastas dentro de [calculadora/src/app/components](calculadora/src/app/components).

## Tecnologias usadas

- Next.js
- React
- TypeScript
- Styled Components
- ESLint

## Como executar

Acesse a pasta da aplicação e instale as dependências:

```bash
cd calculadora
npm install
npm run dev
```

Depois, abra o navegador em:

```text
http://localhost:3000
```

## Objetivo do repositório

Este projeto é um ambiente de aprendizado para praticar conceitos de:

- componentização em React
- uso do App Router do Next.js
- manipulação de estados
- criação de interfaces com estilos em componentes
- desenvolvimento de uma aplicação simples, mas funcional