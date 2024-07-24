import fastify from "fastify";

const app = fastify({
    logger: true
});

// Verbos HTTP
// Get - rotas de leitura
// Post - rotas de cadastro / inserção de dados
// Delete - rotas de exclusão
// Patch / Put - rotas de atualização de dados

app.get("/todos/:id/:id2", (req, res) => {
  // Parâmetros obrigatórios  
  // req.params - (precisa ser definido) - seleção de recursos
  console.log(req.params);

  // Parâmetros opcionais
  // req.query (queryparams) - preferências, filtros

  // Parâmetros (obrigatórios e opcionais) sempre são recebidos em formato de texto
  return res.send({ params: req.params, query: req.query });
});

app.post("/todos", (req, res) => {
  // Corpo (POST, PATCH, PUT)
  // req.body - dados relacionados a entidade (string, number, boolean, array e objeto)
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
