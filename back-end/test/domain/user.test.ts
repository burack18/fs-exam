import { User } from '../../domain/model/user';
import { Role } from '../../types';

let userOb = {
    email: 'email',
    firstName: 'firstName',
    password: 'pass123',
    lastName: 'lastName',
    username: 'admin',
    role: <Role>'admin',
};
test('given: user , when username is empty , then throws validation exception', () => {
    const createUser=()=>new User({ ...userOb,username:'' });

    expect(createUser).toThrow('Username is required')
});
