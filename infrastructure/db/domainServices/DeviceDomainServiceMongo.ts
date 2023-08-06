// // const orm = {
// //     products: {
// //         update: () => {},
// //         add: () => {},
// //         remove: () => {},
// //         findBy: () => {},
// //     }
// // }

// import { Device } from "../../../core/domainModels/Device";
// import { IDeviceDomainService } from "../../../core/domainServices/IDeviceDomainService";
// import { CreateDeviceDto } from "../../../core/domainServices/dto/CreateDeviceDto";
// // import ApiError from "../../../error/ApiError";

// export class DeviceDomainServiceMongo implements IDeviceDomainService {
//     create(dto: CreateDeviceDto): Device | undefined {
//         // const brand = await BrandModel.findOne({ name: dto.brandName });
//         // if (!brand) {
//         //     return ApiError.BadRequest('Не найден бренд с таким именем');
//         // }
//         // const type = await TypeModel.findOne({ name: typeName });
//         // if (!type) {
//         //     return ApiError.BadRequest('Не найден тип устройства с таким именем')
//         // }
//         // const candidate = await DeviceModel.findOne({name})
//         // if (candidate){
//         //     return ApiError.BadRequest('Девайс с таким именем уже существует')
//         // }
        
//         // let fileNames = []
//         // if(images) {
//         //     const dirName = path.resolve(__dirname, '..', 'static', 'devices', name)
//         //     fs.mkdir(dirName, (err) => {
//         //         if (err) throw err;
//         //     }); 
//         //     for (const img of images) {
//         //         const fileName = uuid.v4() + '.jpg'; // не всегда загружается jpg!!!
//         //         fileNames.push(fileName)
//         //         img.mv(path.resolve(__dirname, '..', 'static', 'devices', name, fileName));
//         //     }
//         // }
        
//         // const device = await DeviceModel.create({
//         //     name: dto.name,
//         //     price : dto.price,
//         //     brandName: dto.brandName,
//         //     typeName: dto.typeName,
//         //     images: dto.images,
//         //     description: dto.description,
//         //     availableColors: dto.availableColors
//         // });


//         // for (const prop of dto.properties) {
//         //     PropertyDeviceModel.create({
//         //         propertyId: prop._id,
//         //         value: prop.value,
//         //         deviceId: device._id,
//         //     });
//         // }

//         // return device;
//         // на основе полученного AddDeviceDto создать строку в БД
//         // вернуть на клиент преобразованную с помощью маппера объект в читаемый для клиента вид как у domainmodel

//         // const entityFormDb = orm.devices.add(dto)
//         // return DeviceMapper.toDomain(entityFormDb)
//         return undefined
//     }

//     // getAll(): Device {
//     //     // const entities = orm.devices.findBy()
//     //     // return entities.map(DeviceMapper.toDomain)
//     // }

//     // getById(id: string): Device {
//     //     // const entityFormDb = orm.devices.findBy(id);
//     //     // return DeviceMapper.toDomain(entityFormDb)
//     // }

//     // getByName(name: string): Device {
//     //     // const entityFormDb = orm.devices.findBy(name)
//     //     // return DeviceMapper.toDomain(entityFormDb)
//     // }

//     // delete(id: string) {
//     //     // const entityFormDb = orm.devices.update(dto)
//     //     // return DeviceMapper.toDomain(entityFormDb)
//     // }
//     // update(dto: UpdateDeviceDto): Device {
        
//     // }
// }