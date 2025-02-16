import { sql } from "./db.js";

(async () => {
  try {
    console.log("Criando a tabela 'videos'...");

    await sql`
      CREATE TABLE IF NOT EXISTS videos (
        id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        duration INT NOT NULL
      );
    `;

    console.log("✅ Tabela criada com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao criar a tabela:", error);
  }
})();
