import fastify from "fastify";

const app = fastify();

app.post("/users", (req, res) => {
    return res.send({ message: "Eu cadastro um usuário."});
})

app.patch("/users/password", (req, res) => {
    return res.send({ message: "Eu atualizo a senha do usuário."});
})

app.get("/users", (req, res) => {
    return res.send({ message: "Eu trago o usuário."});
});

const PORT = 3001;

app.listen({ port: PORT }, () => {
    console.log(`API sucessfully started at port ${PORT}`);
});