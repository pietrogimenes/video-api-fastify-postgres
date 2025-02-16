import { v4 as uuidv4 } from "uuid";
import { sql } from "./db.js";

class DatabasePostgres { 
    constructor() {
        this.videos = [];
    }

    // Criar um novo vídeo no banco
    async create({ title, description, duration }) {
        await sql`
            INSERT INTO videos (title, description, duration) 
            VALUES (${title}, ${description}, ${duration})
        `;
    }
    

    // Listar vídeos com ou sem busca
    async list(search) {
        try {
            let videos;
            if (search) {
                videos = await sql`
                    SELECT * FROM videos WHERE title ILIKE ${'%' + search + '%'}
                `;
            } else {
                videos = await sql`
                    SELECT * FROM videos
                `;
            }
            return videos;
        } catch (error) {
            console.error("Erro ao listar vídeos:", error);
            throw error;
        }
    }

    // Atualizar um vídeo pelo ID
    async update(videoId, data) {
        try {
            const { title, description, duration } = data;
            
            await sql`
                UPDATE videos 
                SET 
                    title = COALESCE(${title}, title), 
                    description = COALESCE(${description}, description), 
                    duration = COALESCE(${duration}, duration)
                WHERE id = ${videoId}
            `;

            return { id: videoId, ...data };
        } catch (error) {
            console.error("Erro ao atualizar vídeo:", error);
            throw error;
        }
    }

    // Deletar um vídeo pelo ID
    async delete(videoId) {
        try {
            await sql`
                DELETE FROM videos WHERE id = ${videoId}
            `;
            return { message: "Vídeo deletado com sucesso!" };
        } catch (error) {
            console.error("Erro ao deletar vídeo:", error);
            throw error;
        }
    }
}

export { DatabasePostgres };
