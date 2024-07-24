import fastify from "fastify";

const app = fastify({
    logger: true
});

// Verbos HTTP
// Get - rotas de leitura
// Post - rotas de cadastro / inserção de dados
// Delete - rotas de exclusão
// Patch / Put - rotas de atualização de dados

app.get("/todos", (req, res) => {
  // Conjunto de dados que vem de forma externa para nossa requisição
  // Entrada - Etapas - Saídas
  // Entrada (Externa) - Etapas - Saídas (Resposta)

  return res.send({ message: "Eu listo todas as notas." });
});

app.post("/todos", (req, res) => {
  // Corpo (POST, PATCH, PUT)
  // req.body - dados relacionado a entidade (string, number, boolean, array e objeto)
  console.log(req.body);  
  return res.send(req.body);
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
