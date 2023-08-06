import { IDeviceDomainService } from '../domainServices/IDeviceDomainService';
import { CreateDeviceDto } from '../domainServices/dto/CreateDeviceDto';

export class DeviceAppService {
    constructor(readonly deviceDomainService: IDeviceDomainService) {}

    // async getAll() {
    //     return this.deviceDomainService.getAll();
    // }
    // async getByName(name: string) {
    //     return this.deviceDomainService.getByName(name);
    // }
    async create(dto: CreateDeviceDto) {
        return this.deviceDomainService.create(dto);
    }
}
