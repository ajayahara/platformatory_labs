import express from 'express';
import { getUser, login, updateUser } from '../controller/userController';

const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.get('/:email', getUser);
userRouter.put('/:email', updateUser);

export { userRouter };
