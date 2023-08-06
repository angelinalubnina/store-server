import { IBasketDomainService } from '../domainServices/IBasketDeviceDomainService';
import { CreateBasketDeviceDto } from '../domainServices/dto/CreateBasketDeviceDto';
import { UpdateBasketDeviceDto } from '../domainServices/dto/UpdateBasketDeviceDto';

export class BasketDeviceAppService {
    constructor(readonly basketDomainService: IBasketDomainService) {}

    async create(dto: CreateBasketDeviceDto) {
        return this.basketDomainService.create(dto);
    }
    async update(dto: UpdateBasketDeviceDto) {
        return this.basketDomainService.update(dto);
    }
}