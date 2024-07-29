import { app } from "./app";

const PORT = 3001;

app.listen({ port: PORT }, () => {
  console.log(`API successfully started at port ${PORT}`);
});
