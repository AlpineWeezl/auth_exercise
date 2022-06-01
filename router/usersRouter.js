import { Router } from 'express';
import { createUser } from '../controller/usersController.js';
import { signup } from '../middleware/auth.js';
import { encryptPassword } from '../middleware/cryption.js';
import { notAllowed } from '../middleware/errors.js';
import { createUserValidation } from '../middleware/validation.js';

export const usersRouter = Router();

usersRouter
    .route('/signup')
    .post(signup, createUser)
    .all(notAllowed);

usersRouter
    .route('/createuser')
    .post(createUserValidation, encryptPassword, createUser)
    .all(notAllowed);
