import { genSalt, hash, compare } from 'bcrypt';
import { sign, verify } from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

import User from '../models/User';

const createAccessToken = (userId) => {
    const user = { id: userId };
    return sign({ user }, JWT_SECRET, { expiresIn: '15m' });
};
const createRefreshToken = (userId) => {
    const user = { id: userId };
    return sign({ user }, JWT_SECRET, { expiresIn: '60d' });
};
const sendTokens = (
    res: any,
    accessToken: string,
    refreshToken: string,
) => {
    res.cookie('refreshtoken', refreshToken, {
        httpOnly: true,
        path: '/api/user/refresh_token',
    });
    return res.status(200).json({ accessToken });
};

export const registerUser = async (req, res) => {
    let { email, first_name, last_name, password } = req.body;
    if (!email || !first_name || !last_name || !password)
        return res.status(400).send('Fields must be filled');
    try {
        const userExists = await User.findOne({
            where: { email: email },
        });
        if (userExists)
            return res.status(400).send('Email already used');

        const salt = await genSalt();
        const hashed = await hash(password, salt);

        const user = await User.create({
            email,
            first_name,
            last_name,
            password: hashed,
        });

        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);
        return sendTokens(res, accessToken, refreshToken);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
};

export const loginUser = async (req, res) => {
    let { email, password } = req.body;
    if (!email || !password) return res.sendStatus(401);

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(401).send('User does not exist');

        const valid = await compare(password, user.password);
        if (!valid)
            return res.status(401).send('Invalid Credentials');

        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);
        return sendTokens(res, accessToken, refreshToken);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
};

export const logoutUser = (req, res) => {
    res.clearCookie('refreshtoken');
    return res.status(200).send('Logged out');
};

export const refreshToken = async (req, res) => {
    const token = req.cookies['refreshtoken'];
    console.log(token);
    if (!token) return res.status(401).json({ accesstoken: '' });
    try {
        const payload: any = verify(token, JWT_SECRET);
        const user = await User.findByPk(payload.user.id);
        if (!user) return res.status(401).json({ accesstoken: '' });
        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);
        // TO DO: Store refreshtoken in database under user
        return sendTokens(res, accessToken, refreshToken);
    } catch (error) {
        console.error(error);
        res.status(401).send('Unauthorized');
    }

    return res.status(200);
};
