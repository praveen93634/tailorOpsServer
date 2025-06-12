import { Router } from 'express';
import { geAllEmployee, getEmployeeFilter, saveEmployee, UpdateEmployee } from '../controller/employee.controller';
import { basicAuth } from '../middleware/auth';

const router: Router = Router();

router.post('/saveEmployee',
    basicAuth,
    saveEmployee);
router.put('/',
    UpdateEmployee)
router.get('/getAllEmployee',
    basicAuth,
    geAllEmployee)
router.put('/getEmployeeFilter',
    basicAuth,
    getEmployeeFilter)

export default router;