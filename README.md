## MeuHub - To-Do List (Next.js + TypeScript + Supabase)

🎉 Bem-vindo ao MeuHub: um app de produtividade focado em Dark Mode, alto contraste e gerenciamento de tarefas por categoria. A seguir está a documentação do projeto com setup, recursos e roadmap.

---

## 🌟 Sobre

**MeuHub** é um app de lista de tarefas moderno e leve, construído com:

- **Next.js** (App Router, SSR/SSG, roteamento built-in)
- **TypeScript** (tipagem forte e DX segura)
- **Supabase** (Autenticação + Banco PostgreSQL)
- **Design Dark Mode** com cards brancos de alto contraste
- Filtros de categoria (Ex.: Estudos, Corrida, Trabalho, Pessoal)

O objetivo é ajudar o usuário a organizar tarefas com foco e rapidez, usando uma UI responsiva e acessível.

---

## 🛠️ Tecnologias

- `next` (Next.js 14+)
- `react`
- `typescript`
- `supabase-js`
- `tailwindcss` (ou CSS Modules / PostCSS, conforme configuração)
- `eslint`, `prettier` para qualidade de código
- `vitest` ou `jest` (opcional, testes unitários)

---

## ✅ Funcionalidades

- Autenticação de usuários (Supabase Auth)
  - Cadastro/login com email e senha
  - Sessão persistente
- CRUD de tarefas
  - Criar, editar, excluir tarefas
  - Marcar como concluída
  - Título, descrição e data de vencimento
- Filtros de categoria
  - Estudos, Corrida, Trabalho, Pessoal, etc
  - Filtros dinamicos por tag
- Prioridade e status
  - Prioridade: Alto / Médio / Baixo
  - Status: Pendente / Em andamento / Concluído
- Dark Mode
  - Tema escuro padrão com cards brancos de alto contraste
  - Alternância para modo claro (se implementado)
- UI/UX
  - Layout responsivo (mobile e desktop)
  - Acessibilidade (contraste, foco de teclado, semântica)

---

## 🚀 Como rodar localmente

1. Clonar repositório
   - `git clone https://github.com/seu-user/meuhub.git`
   - `cd meuhub`
2. Instalar dependências
   - `npm install` ou `yarn`
3. Configurar variáveis de ambiente (ver seção abaixo)
4. Executar em desenvolvimento
   - `npm run dev` ou `yarn dev`
5. Acessar
   - `http://localhost:3000`

---

## 🔐 Variáveis de ambiente do Supabase

Crie o arquivo `.env.local` na raiz do projeto com:

```env
NEXT_PUBLIC_SUPABASE_URL=https://<seu-projeto>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=pk.<sua-anon-key>
SUPABASE_SERVICE_ROLE_KEY=sk.<sua-service-role-key> # apenas backend
NEXT_PUBLIC_APP_NAME=MeuHub
NEXT_PUBLIC_DEFAULT_THEME=dark
```

- `NEXT_PUBLIC_SUPABASE_URL`: URL do seu projeto Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: chave pública client-side
- `SUPABASE_SERVICE_ROLE_KEY`: chave secreta (não expor no frontend)

Supabase - estrutura recomendada:
- Tabela `todos` com campos: `id` (uuid, PK), `user_id` (UUID), `title`, `description`, `category`, `priority`, `due_date`, `completed`, `created_at`.
- Regras RLS (Row Level Security): apenas o proprietário pode ler/gravar suas tarefas.

---

## 📌 Estrutura de pastas

- `app/` (rotas + páginas)
- `components/` (TaskCard, FilterBar, Modal etc.)
- `lib/supabaseClient.ts`
- `hooks/` (`useTheme`, `useTasks`)
- `styles/globals.css`
- `types/` (`task.ts`, `user.ts`)

---

## 🧪 Qualidade e testes

- `npm run lint`
- `npm run format`
- `npm run build`
- (opcional) testes unitários com `vitest` ou `jest`

## 📣 Contato

- Autor: João Pedro Oliveira
- GitHub: `https://github.com/joaopedrooliveirab`

---
