import { Router } from 'express';
import { createUser, geAlltUser, Updateuser } from '../controller/user.controller';
import { basicAuth } from '../middleware/auth';

const router: Router = Router();

router.post('/saveUser',
    // basicAuth,
    createUser);
router.put('/',
    Updateuser)
router.get('/getAllUser',
    basicAuth,
    geAlltUser)

export default router;
