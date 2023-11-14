import  Router from 'express';
const router = new Router();

//import { validateRegistration} from '../middleware/authMiddleware.js';
import Validation from '../middleware/authMiddleware.js';
import authController from '../controllers/auth_controller.js';


router.post('/registration', Validation.validateRegistration, authController.registration)
router.post('/login', Validation.validateLogin, authController.login);


export default router;