import { User } from '../model/user';
import database from '../../util/database';

const getAllUsers = async (): Promise<User[]> => {
    try {
        const usersPrisma = await database.user.findMany();
        return usersPrisma.map((userPrisma) => User.from(userPrisma));
    } catch (error) {
        throw new Error('Database error. See server log for details.');
    }
};

const getUserByUserName = async (username: string): Promise<User> => {
    try {
        const userPrisma = await database.user.findUniqueOrThrow({
            where: {
                username,
            },
        });
        return User.from(userPrisma);
    } catch (error) {
        throw new Error('Database error. See server log for details.');
    }
};

export default {
    getAllUsers,
    getUserByUserName,
};
