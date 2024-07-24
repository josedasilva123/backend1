import fastify from "fastify";

const app = fastify();

// Verbos HTTP
// Get - rotas de leitura
// Post - rotas de cadastro / inserção de dados
// Delete - rotas de exclusão
// Patch / Put - rotas de atualização de dados

app.get("/hello", (req, res) => {
    return res.send({ message: "Olá, estou aprendendo back-end!"});
});

const PORT = 3001;

app.listen({ port: PORT }, () => {
    console.log("API successfully started at port " + PORT)
});