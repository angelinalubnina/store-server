import { Brand } from '../domainModels/Brand';
import { CreateBrandDto } from './dto/CreateBrandDto';

export interface IBrandDomainService {
    create(dto: CreateBrandDto): Brand;
    getAll(): Brand[]
}




