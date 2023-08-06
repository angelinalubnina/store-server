// import { Device } from "../../../core/entities/device/Device";
// import { IDeviceDomainService } from "../../../core/domainServices/IDeviceDomainService";
// import { AddDeviceDto } from "../../../core/repositories/DeviceRepository/dto/CreateDeviceDto";
// import { DeviceMapper } from "../mappers/DeviceMapper";
// import { Device } from "../../../core/domainModels/Device";
// import { UpdateDeviceDto } from "../../../core/domainServices/DeviceDomainService/dto/UpdateDeviceDto";

// const orm = {
//     products: {
//         update: () => {},
//         add: () => {},
//         remove: () => {},
//         findBy: () => {},
//     }
// }

// export class DeviceRepositorySQLImpl implements IDeviceDomainService {
//     create(dto: AddDeviceDto): Device {
//         ///
//         const entityFormDb = orm.devices.add(dto)
//         return DeviceMapper.toDomain(entityFormDb)
//     }

//     getAll(): Device {
//         //
//         const entities = orm.devices.findBy()
//         return entities.map(DeviceMapper.toDomain)
//     }

//     getById(id: string): Device {
//         ///
//         const entityFormDb = orm.devices.findBy(id);
//         return DeviceMapper.toDomain(entityFormDb)
//     }

//     getByName(name: string): Device {
//         const entityFormDb = orm.devices.findBy(name)
//         return DeviceMapper.toDomain(entityFormDb)
//     }

//     delete(id: string) {
//         const entityFormDb = orm.devices.update(dto)
//         return DeviceMapper.toDomain(entityFormDb)
//     }
//     update(dto: UpdateDeviceDto): Device {
        
//     }
// }