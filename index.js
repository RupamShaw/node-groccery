const fastify = require("fastify")()

fastify.get("/", async (request, reply) => {
  return {message: "Hello, World!"}
})
const PORT = process.env.PORT || 4000
fastify.listen({port: PORT}, () => console.log("Server running on port ", PORT))
// const express = require("express")
// const app = express()

// const PORT = process.env.PORT || 4000 // Use Azure's assigned port or default to 4000

// app.get("/", (req, res) => {
//   res.send("Hello, World!")
// })

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })
