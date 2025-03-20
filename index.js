const fastify = require("fastify")()

fastify.get("/", async (request, reply) => {
  return {message: "Hello, World!"}
})
// const PORT = process.env.PORT || 4000
fastify.listen({port: 8000}, () => console.log("Server running on port "))
