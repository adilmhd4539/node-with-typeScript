import { Router } from "express";

const router = Router();

const todos: number[] = [];

router.get('/', (req, res, next) => {
    
    res.status(200).json({ todos: todos });
});
export default router;