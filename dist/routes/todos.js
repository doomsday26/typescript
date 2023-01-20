"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = { id: new Date().toISOString(), text: body.text };
    todos.push(newTodo);
    console.log("sending back response");
    return res.send(201).json({ message: 'added todo', todo: newTodo, todos: todos });
});
router.put('todo/:todoId', (req, res, next) => {
    const params = req.body.params;
    const tid = params.todoid;
    const body = req.body;
    const todoindex = todos.findIndex((todoItem) => { todoItem.id == tid; });
    if (todoindex >= 0) {
        todos[todoindex] = { id: todos[todoindex].id, text: body.text };
        res.status(200).json({ message: "updated your todo", todos: todos });
    }
    else {
        res.status(404).json({ message: 'cant find the item for this id' });
    }
});
router.delete('/todos/:todoId', (req, res, next) => {
    const params = req.body.params;
    const tid = params.todoid;
    todos = todos.filter(todoitem => todoitem.id !== tid);
    res.status(200).json({ messge: 'deleted toto', todos: todos });
});
exports.default = router;
