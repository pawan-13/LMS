import express from 'express';
import { login, register, logout, getUserProfile } from '../controllers/usercontroller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js'
const router = express.Router();
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/profile').get(isAuthenticated, getUserProfile);
export default router;