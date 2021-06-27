const chalk = require('chalk')

const fastify = require('fastify')({
  logger: true
})


fastify.register(require('fastify-cors'))
fastify.register(require('./database/db-connecter'))
fastify.register(require('./routes/items'))
fastify.register(require('./routes/articles'))
fastify.register(require('./routes/blogs'))



fastify.listen(5000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(chalk.blue(`Server listenting on ${address}`))
  fastify.log.info(`server listening on ${address}`)
})