import { Device } from '../domainModels/Device';
import { CreateDeviceDto } from './dto/CreateDeviceDto';
// import { UpdateDeviceDto } from './dto/UpdateDeviceDto';

export interface IDeviceDomainService {
    create(dto: CreateDeviceDto): Device | undefined;
    // getAll(): [Device];
    // getByName(name: string): Device | undefined;
    // getById(id: string): Device;
    // delete(id: string);
    // update(dto: UpdateDeviceDto): Device;
}