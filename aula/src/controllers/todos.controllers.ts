import { FastifyReply, FastifyRequest } from "fastify";
import { ITodo } from "../interfaces/todos.interface";
import { todosService } from "../services/todos/_index";

function create(req: FastifyRequest<{ Body: Omit<ITodo, "id"> }>, res: FastifyReply){
    const todo = todosService.create(req.body);

    return res.send(todo);
}

function getMany(req: FastifyRequest, res: FastifyReply){
    const todoList = todosService.getMany();

    return res.send(todoList);
}

function remove(req: FastifyRequest<{ Params: { id: string }}>, res: FastifyReply){
    const message = todosService.remove(Number(req.params.id));

    return res.send(message);
}

export const todosControllers = { create, getMany, remove };