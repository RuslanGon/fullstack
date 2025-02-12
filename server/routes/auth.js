import { Router } from "express";
import { register, login, getme } from "../controllers/auth.js";

const router = new Router()

// Registration
router.post('/registor', register)

// Login
router.post('/login', login)

// Get me
router.get('/me', getme)

export default router