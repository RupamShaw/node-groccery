const fastify = require("fastify")()

fastify.get("/", async (request, reply) => {
  return {message: "Hello, World!"}
})

fastify.listen({port: 4000}, () => console.log("Server running on port 4000"))
