const fastify = require('fastify')({
    logger: true
  })
  
  fastify.register(require('./db-connetor'))
  fastify.register(require('./out-first-route'))
  
  fastify.listen(5000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })