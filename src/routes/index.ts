import { Router } from 'express';
import userRoutes from './user.route'; 
import employeeRoutes from './employee.routes'; 
import authRoutes from './auth.routes'; 
const route = Router();
route.use('/auth',authRoutes)
route.use('/user', userRoutes);
route.use('/employee', employeeRoutes);

export default route;
