import fastify from "fastify";

const app = fastify();

app.get("/", (req, res) => {
    return res.send({ message: "Olá, sou Alex!"})
});

const PORT = 3001;

app.listen({ port: PORT }, () => {
    console.log(`API sucessfully started at port ${PORT}`);
});