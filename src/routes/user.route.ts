import { Router } from 'express';
import { geAlltUser, saveUser, Updateuser } from '../controller/user.controller';
import { basicAuth } from '../middleware/auth';

const router: Router = Router();

router.post('/saveUser',
    basicAuth,
    saveUser);
router.put('/',
    Updateuser)
router.get('/getAllUser',
    basicAuth,
    geAlltUser)

export default router;
