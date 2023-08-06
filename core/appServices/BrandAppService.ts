import { IBrandDomainService } from '../domainServices/IBrandDomainServices';
import { CreateBrandDto } from '../domainServices/dto/CreateBrandDto';

export class BrandAppService {
    constructor(readonly brandDomainService: IBrandDomainService) {}

    async create(dto: CreateBrandDto) {
        return this.brandDomainService.create(dto);
    }
    async getAll() {
        return this.brandDomainService.getAll();
    }
    // async getOne(id: string) {
    //     return this.brandDomainService.getOne(id);
    // }
    // async delete(id: string) {
    //     return this.brandDomainService.delete(id);
    // }
}