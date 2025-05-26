import { Router } from "express";
import { login, signup } from "../controller/auth/auth.controller";
const router: Router = Router();

router.post("/signup",
    signup
)
router.put('/login',
    login
)

export default router;