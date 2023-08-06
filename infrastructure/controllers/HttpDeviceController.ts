import { DeviceAppService } from '../../core/appServices/DeviceAppService';
import { Color } from '../../core/domainModels/Color';
import { Property } from '../../core/domainModels/Property';
import { CreateDeviceDto } from '../../core/domainServices/dto/CreateDeviceDto';
// import ApiError from '../../error/ApiError';

// export class DeviceController {
//     constructor(readonly deviceAppService: DeviceAppService) {}

//     // @path('/devices/create')
//     async create(req, res, next) {
//         try {
//             let {
//                 name,
//                 price,
//                 brandName,
//                 typeName,
//                 propsStr,
//                 description,
//                 colorsStr,
//             } = req.body;
//             // const errors = validationResult(req);
//             // if (!errors.isEmpty()) {
//             //     return next(
//             //         ApiError.BadRequest('Ошибка при валидации', errors.array()),
//             //     );
//             // }
//             let colors: Color[] = [];
//             for (const colorObj of JSON.parse(colorsStr)) {
//                 const color = new Color(colorObj.name, colorObj.code);
//                 colors.push(color);
//             }
//             let images : undefined | string[] | string = req.files?.images;
//             let imagesForDto : string[] | undefined
//             if (images !== undefined && !Array.isArray(images)) {
//                 imagesForDto = [images];
//             }
//             else{
//                 imagesForDto = images
//             }

//             let properties: Property[] = [];
//             for (const propObj of JSON.parse(propsStr)) {
//                 const property = new Property(
//                     propObj.name,
//                     propObj.value,
//                     name,
//                 );
//                 properties.push(property);
//             }
//             const dto = new CreateDeviceDto(
//                 name,
//                 brandName,
//                 typeName,
//                 price,
//                 imagesForDto,
//                 description,
//                 colors,
//                 properties,
//             );
//             const device = this.deviceAppService.create(dto);
//             return res.json(device);
//         } catch (e) {
//             next(ApiError.BadRequest(e.message));
//         }
//     }
//     async getAll(req, res) {}

//     async getOne(req, res, next) {}
//     // async delete(req, res, next) {

//     // }
// }
