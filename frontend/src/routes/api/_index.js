import * as Fastify from "fastify";

const fastify = Fastify.fastify({logger:true})




fastify.get('/',(req,reply) => {
    reply.send({test:"hello world"})
})

async function start(){
    try {
        await fastify.listen(4000)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}


start();