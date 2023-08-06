import { Property } from '../domainModels/Property';
import { CreatePropertyDto } from './dto/CreatePropertyDto';

export interface IPropertyDomainService {
    create(dto: CreatePropertyDto): Property;
    getAll(): Property[]
    // getByDeviceId(deviceId: string): [Property]
}