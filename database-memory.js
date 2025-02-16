import { v4 as uuidv4 } from "uuid";

class DatabaseMemory { 
    constructor() {
        this.videos = []
   }

   create({title, description, duration}) {
    const video = {
        id: uuidv4(),
        title,
        description,
        duration,

    };

        this.videos.push(video);
        return video;
    
   }

   list(search) {
    return this.videos
        .filter(video => {
            if (search) {
                return video.title.includes(search);
            }
            return true; // Retorna todos os vídeos caso `search` não seja informado
        });
}

   update(videoId, data) {
        const videoIndex = this.videos.findIndex(video => video.id === videoId);

        if (videoIndex !== -1) {
            this.videos[videoIndex] = { ... this.videos[videoIndex], ...data };

            return this.videos[videoIndex];
        }
        return null;
    }
   
    delete(videoId) {
        const videoIndex = this.videos.findIndex(video => video.id === videoId);

        if (videoIndex !== -1) {
            this.videos.splice(videoIndex, 1);

            return true;
        }
        return false;
    }
}

export { DatabaseMemory };