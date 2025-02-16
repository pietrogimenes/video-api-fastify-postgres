# Video API - Fastify + PostgreSQL

## 📌 Sobre o Projeto

Esta API permite gerenciar um catálogo de vídeos utilizando **Fastify** como framework backend e **PostgreSQL** como banco de dados. Suporta operações **CRUD** (Criar, Listar, Atualizar e Deletar vídeos).

## 🚀 Tecnologias Utilizadas

- **Node.js** (runtime JavaScript)
- **Fastify** (framework web leve e rápido)
- **PostgreSQL** (banco de dados relacional)
- **Neon PostgreSQL** (para conexão com o banco)
- **UUID** (geração de IDs únicos)
- **dotenv** (gerenciamento de variáveis de ambiente)

## 📂 Estrutura do Projeto

```
📁 video-api-fastify-postgres
├── 📄 server.js            # Servidor Fastify
├── 📄 db.js                # Conexão com o PostgreSQL
├── 📄 database-postgres.js # Banco de dados PostgreSQL
├── 📄 database-memory.js   # Banco de dados em memória (opcional)
├── 📄 create-table.js      # Script para criar a tabela
├── 📄 .env                 # Configurações do ambiente
├── 📄 .gitignore           # Arquivos ignorados no Git
└── 📄 routes.http          # Testes de requisição HTTP
```

## 📦 Como Rodar o Projeto

### 1️⃣ **Clonar o Repositório**

```bash
git clone https://github.com/seu-usuario/video-api-fastify-postgres.git
cd video-api-fastify-postgres
```

### 2️⃣ **Instalar Dependências**

```bash
npm install
```

### 3️⃣ **Configurar Variáveis de Ambiente**

Crie um arquivo `.env` na raiz do projeto e adicione a seguinte variável:

```env
DATABASE_URL="sua_string_de_conexao_postgresql"
```

### 4️⃣ **Criar a Tabela no Banco**

```bash
node create-table.js
```

### 5️⃣ **Iniciar o Servidor**

```bash
npm start
```

> O servidor rodará na porta `3333` por padrão.

## 🔄 Rotas da API

### 🔹 Criar um Vídeo

**POST** `/videos`

```json
{
  "title": "Meu vídeo",
  "description": "Descrição do vídeo",
  "duration": 120
}
```

### 🔹 Listar Vídeos

**GET** `/videos`

### 🔹 Atualizar um Vídeo

**PUT** `/videos/:id`

```json
{
  "title": "Novo título",
  "description": "Nova descrição",
  "duration": 150
}
```

### 🔹 Deletar um Vídeo

**DELETE** `/videos/:id`

## 📜 Licença

Este projeto está sob a licença **MIT**.

---

💻 \*\*Desenvolvido por \*\***[Pietro Gimenes](https://github.com/pietrogimenes)** 🚀

