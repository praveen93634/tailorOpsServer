import { Router } from 'express';
import { geAlltUser, saveUser, Updateuser } from '../controller/user.controller';

const router: Router = Router();

router.post('/saveUser',
    saveUser);
router.put('/',
    Updateuser)
router.get('/getAllUser',
    geAlltUser)

export default router;
