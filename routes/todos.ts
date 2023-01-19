import express, { Router } from 'express'
import { Todo } from '../models/todo'
const router=Router()
let todos:Todo[]=[]

router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>{
    const newTodo :Todo={id:new Date().toISOString(),text:req.body.text} 
    todos.push(newTodo)
    res.send(201).json({message:'added todo',todo:newTodo,todos:todos})
})

router.put('todo/:todoId',(req,res,next)=>{
    const tid= req.params.todoId;
    const todoindex= todos.findIndex(todoItem=>{todoItem.id===tid});
    if(todoindex>=0){
todos[todoindex]={id:todos[todoindex].id,text:req.body.text};
return res.status(200).json({message:"updated your todo",todos:todos})
    }
    res.status(404).json({message:'cant find the item for this id' })
})

router.delete('/todos/:todoId',(req,res,next)=>{
    todos=todos.filter(todoitem=>todoitem.id !==req.params.todoId)
    res.status(200).json({messge:'deleted toto',todos:todos})
})




export default router;