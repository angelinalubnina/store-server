import { Type } from '../domainModels/Type';
import { CreateTypeDto } from './dto/CreateTypeDto';

export interface ITypeDomainService {
    create(dto: CreateTypeDto): Type;
    getAll(): Type[]
}




