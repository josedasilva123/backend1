"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const AppError_1 = require("./AppError");
function errorHandler(error, req, res) {
    if (error instanceof AppError_1.AppError) {
        return res.status(error.statusCode).send({ error: error.message });
    }
    console.log(error);
    return res.status(500).send({ error: "Internal server error." });
}
