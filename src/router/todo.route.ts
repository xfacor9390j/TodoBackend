import { Router } from "express";
import { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from "../controllers/todo.controller";
import { isAuthenticated } from "../controllers/user.controller";
import { body,checkSchema } from "express-validator";
import { createTodoValidationSchema, getTodoByIdValidatioonSchema, validateId } from "../validation/validation.schema";
export const todoRoute = Router();
todoRoute.post('/api/todos', isAuthenticated ,checkSchema(createTodoValidationSchema),createTodo)
todoRoute.get('/api/todos',isAuthenticated,checkSchema(getTodoByIdValidatioonSchema), getAllTodos)
todoRoute.get('/api/todos/:id',isAuthenticated,checkSchema(validateId), getTodoById)
todoRoute.put('/api/todos/:id',isAuthenticated,checkSchema(createTodoValidationSchema) ,updateTodo)
todoRoute.delete('/api/todos/:id', isAuthenticated,deleteTodo)