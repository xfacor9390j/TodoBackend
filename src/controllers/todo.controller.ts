import { Todo } from "../utils/todo.interface";
import { todoDb } from "../models/todo.model";
import { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";

export function add(a:number,b:number){ {
    return a + b;
}
}
export function helperFunction() {
    return 'hello';
}
export async function createTodo(req: Request<{}, {}, Todo>, res: Response) {
    const result = validationResult(req)
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    
    try {
        let todo;
        if(result.isEmpty()){
            todo=matchedData(req)
        }
        const newTodo = new todoDb(todo);
        const savedTodo = await newTodo.save();
        return res.status(201).json(savedTodo);
       
    } catch (err) {
        return res.status(500).json(err);
   }
}
export async function getAllTodos(req: Request, res: Response) { 
    
  
    try {
        const todos = await todoDb.find();
        return res.status(200).json(todos);
    
    } catch (e) {
        return res.status(500).json(e);
    }
}

export async function getTodoById(req: Request, res: Response) {
    const result = validationResult(req)
    if (!result.isEmpty()) { 
        return res.status(400).json({ errors: result.array() });
    }
    const id = req.params.id;
    
    try {
        const todo = await todoDb.find({userId: id});
        return res.status(200).json(todo);
    } catch (err) {
        return res.status(500).json(err);
    }
}

export async function updateTodo(req: Request<{id:"id"},{},Todo>, res: Response) { 
    const _id = req.params.id;
    const result = validationResult(req)
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    try {
        let newTodo;
        if (result.isEmpty()) { 
            
            newTodo = matchedData(req)
            
        }
        const update=await todoDb.findByIdAndUpdate({_id},{
            userId: newTodo?.userId,
            title: newTodo?.title,
            description: newTodo?.description,
            status: newTodo?.status,
            
        })
        return res.status(200).json(update);
    } catch (err) {
        return res.status(500).json(err);
    }
}
export async function deleteTodo(req: Request<{id:"id"},{},Todo>, res: Response) { 
    const userId = req.params.id;
    try {
        const deletedTodo=await todoDb.findByIdAndDelete({_id:userId})
        return res.status(200).json(deletedTodo);
        
    } catch (e) {
        return res.status(500).json(e);
    }
}
