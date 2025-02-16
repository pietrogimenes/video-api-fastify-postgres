//import { DatabaseMemory } from './database-memory.js'
import fastify from 'fastify'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

//const database = new DatabaseMemory()
const database = new DatabasePostgres()

server.post('/videos', async (request, reply) => {
    const { title, description, duration } = request.body


    await database.create({
        title,
        description,
        duration,
    })

    return reply.status(201).send()
})
server.get('/videos', async (request) => {
    const search = request.query.search
    
    const videos = await database.list(search)

    return videos
})
server.put('/videos/:id', async (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body

    await database.update(videoId, {
        title,
        description,
        duration,
    })

    return reply.status(204).send()
})
server.delete('/videos/:id', async () => {
    const videoId = request.params.id

    await database.delete(videoId)

    return reply.status(204).send()
})

server.listen({ port: process.env.PORT ?? 3333 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})