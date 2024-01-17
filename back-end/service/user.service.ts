import { User } from '../domain/model/user';
import userDB from '../domain/data-access/user.db';
import { LoginInput, LoginResponse } from '../types';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { report } from 'process';
import { ro } from 'date-fns/locale';

const getAllUsers = async (): Promise<User[]> => userDB.getAllUsers();

const loginUser = async ({ username, password }: LoginInput): Promise<LoginResponse> => {
    const user = await userDB.getUserByUserName(username);

    const isSame = await bcrypt.compare( password,user.password);
    if (!isSame) {
        throw new Error('Password or Username is not correct');
    }
    const token = jwt.sign(
        {
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
        },
        process.env.SECRET_KEY,
        {
            algorithm: 'HS512',
            expiresIn: '8h',
        }
    );
    const loginResponse: LoginResponse = {
        fullname: `${user.firstName} ${user.lastName}`,
        role: user.role,
        token: token,
        username: user.username,
    };
    return loginResponse;
};

export default {
    getAllUsers,
    loginUser,
};
