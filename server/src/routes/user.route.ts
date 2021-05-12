import { Router } from 'express';
import { loginUser, logoutUser, refreshToken, registerUser } from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/register', registerUser);

userRouter.post('/login', loginUser);

userRouter.post('/logout', logoutUser);

userRouter.post('/refresh_token', refreshToken);

export default userRouter;
