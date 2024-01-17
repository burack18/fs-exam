import userDb from '../../domain/data-access/user.db';
import { User } from '../../domain/model/user';
import userService from '../../service/user.service';
import { LoginInput } from '../../types';

const user = new User({
    id: 1,
    email: 'admin.istrator@brax.be',
    firstName: 'Admin',
    username: 'admin',
    password: '$2b$12$zZxKrVt/GYmfC.w932RueuJRcecSnt5QvB2PWR2ysUnm66Kr38nPC',
    lastName: 'Istrator',
    role: 'admin',
});

let getUserByUserName: jest.SpyInstance<Promise<User>, [username: string], any>;
beforeEach(() => {
    getUserByUserName = jest.spyOn(userDb, 'getUserByUserName');
});
afterEach(() => {
    jest.clearAllMocks();
});

test('given:login credentials , when: credentials are valid, then: returns valid token', async () => {
    const credentials: LoginInput = { username: 'admin', password: 'admin123' };
    getUserByUserName.mockReturnValue(new Promise((res) => res(user)));

    const response = await userService.loginUser(credentials);

    expect(response);
    expect(response.token);
    expect(response.username).toEqual(user.username);
});
