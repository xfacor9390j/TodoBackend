import { Router } from "express";
import userRoute from './user.route'
import { todoRoute } from "./todo.route";

const router = Router();

router.use(userRoute)
router.use(todoRoute)

export default router;