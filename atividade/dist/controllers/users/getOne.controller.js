"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = getOne;
const _index_1 = require("../../services/users/_index");
function getOne(req, res) {
    const user = _index_1.usersService.getOne(Number(req.params.id));
    return res.send(user);
}
