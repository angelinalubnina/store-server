import { IUserDomainService } from '../domainServices/IUserDomainService'
import { RegistrationUserDto } from '../domainServices/dto/RegistrationUserDto';

export class UserAppService {
    constructor(readonly userDomainService: IUserDomainService) {}

    async check(accessToken: string) {
        return this.userDomainService.check(accessToken);
    }
    async logout() {
        return this.userDomainService.logout();
    }
    async login(name: string) {
        return this.userDomainService.login(name);
    }
    async registration(email: string) {
        return this.userDomainService.registration(email);
    }
}