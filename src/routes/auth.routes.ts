import { Router } from "express";
import { login, signup } from "../controller/auth/auth.controller";
import { basicAuth } from "../middleware/auth";
const router: Router = Router();

router.post("/signup",
    signup
)
router.put('/login',
    login,
)

export default router;