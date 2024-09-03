export interface User{
    username:string,
    email: string,
    password?: string,
    authType: 'local' | 'github',
    githubId?: string
}