async function routes (fastify, options) {
    const collection = fastify.mongo.db.collection('articles')
  
  
  
    fastify.get('/articles', async (request, reply) => {
      const result = await collection.find().toArray()
      if (result.length === 0) {
        throw new Error('No documents found')
      }
      return result
    })
  
    fastify.get('/articles/:id', async (request, reply) => {

      const result = await collection.findOne({ id: request.params.id })
      if (result === null) {
        throw new Error('Invalid value')
      }
      return result
    })
  }
  
  module.exports = routes
  