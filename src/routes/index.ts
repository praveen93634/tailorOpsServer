import { Router } from 'express';
import userRoutes from './user.route'; 
import authRoutes from './auth.routes'; 
const route = Router();
route.use('/auth',authRoutes)
route.use('/user', userRoutes);

export default route;
