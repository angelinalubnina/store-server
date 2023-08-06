import { IBasketDomainService } from '../domainServices/IBasketDeviceDomainService';

export class BasketDeviceAppService {
    constructor(readonly basketDomainService: IBasketDomainService) {}

    async getByName(name: string) {
        return this.basketDomainService.getByName(name);
    }
}