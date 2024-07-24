import fastify from "fastify";

const app = fastify();

// Verbos HTTP
// Get - rotas de leitura
// Post - rotas de cadastro / inserção de dados
// Delete - rotas de exclusão
// Patch / Put - rotas de atualização de dados

app.get("/todos", (req, res) => {
  return res.send({ message: "Eu listo todas as notas." });
});

app.post("/todos", (req, res) => {
  return res.send({ message: "Eu cadastro uma nota." });
});

app.patch("/todos", (req, res) => {
  return res.send({ message: "Eu atualizo uma nota." });
});

app.delete("/todos", (req, res) => {
  return res.send({ message: "Eu excluo uma nota." });
});

const PORT = 3001;

app.listen({ port: PORT }, () => {
  console.log("API successfully started at port " + PORT);
});
