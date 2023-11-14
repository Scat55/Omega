import  Router from 'express';
const router = new Router();

import { validateRegistration, validateLogin } from '../middleware/authMiddleware.js';

import authController from '../controllers/auth_controller.js';


router.post('/registration', validateRegistration, authController.registration)
router.post('/login', validateLogin, authController.login);


export default router;