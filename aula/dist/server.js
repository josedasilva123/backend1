"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 3001;
app_1.app.listen({ port: PORT }, () => {
    console.log("API successfully started at port " + PORT);
});
