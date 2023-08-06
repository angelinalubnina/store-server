import { User } from '../domainModels/User';
import { RegistrationUserDto } from './dto/RegistrationUserDto';

export interface IUserDomainService {
    check(accessToken: string): Boolean;
    logout(): undefined;
    login(name: string): User;
    //undefined если не успешная регистрация или null возвращать?
    registration(email: string): User | undefined;

    // changePassword(): [Device];
    // delete(name: string): Device;
    // getAll(name: string): Device;
    // activate(name: string): Device;
}