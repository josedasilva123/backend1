"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
const _index_1 = require("../../services/users/_index");
function register(req, res) {
    const user = _index_1.usersService.register(req.body);
    return res.send(user);
}
