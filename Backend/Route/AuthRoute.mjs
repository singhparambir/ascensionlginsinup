// 
import { Signup, Login } from "../Controllers/AuthController.mjs";
import { Router } from 'express';
const router = Router();

router.post("/signup", Signup);
router.post("/login", Login);

export default router;