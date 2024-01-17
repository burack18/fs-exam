
type Role = 'admin' | 'player' | 'coach'

type UserInput = {
    id?: number
    username?: string
    password?: string
    firstName?: string
    lastName?: string
    email?: string
    role?: Role
}


export {
    Role,
    UserInput,
}
export type LoginInput={
    username:string,
    password:string
}
export type LoginResponse={
    token: string
    fullname: string
    username: string
    role: string
}