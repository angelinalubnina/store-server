"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import ApiError from "../error/ApiError";
const ApiError_1 = __importDefault(require("../error/ApiError"));
const DeviceMapper_1 = require("../infrastructure/db/mappers/DeviceMapper");
const device_1 = __importDefault(require("../models/device"));
const type_1 = __importDefault(require("../models/type"));
const brand_1 = __importDefault(require("../models/brand"));
const express_validator_1 = require("express-validator");
class DeviceController {
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, price, brandName, typeName, propsStr, description, colorsStr } = req.body;
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return next(ApiError_1.default.BadRequest('Ошибка при валидации', errors.array()));
                }
                const brand = yield brand_1.default.findOne({ name: brandName });
                if (!brand) {
                    return next(ApiError_1.default.BadRequest('Не найден бренд с таким именем'));
                }
                const type = yield type_1.default.findOne({ name: typeName });
                if (!type) {
                    return next(ApiError_1.default.BadRequest('Не найден тип устройства с таким именем'));
                }
                const candidate = yield device_1.default.findOne({ name });
                if (candidate) {
                    return next(ApiError_1.default.BadRequest('Девайс с таким именем уже существует'));
                }
                // let images = req.files?.images;
                // if(images !== undefined && !Array.isArray(images)) {
                //     images = [images]
                // }
                let fileNames = [];
                // let fileNames : string[] = []
                // if(images) {
                //     const dirName = path.resolve(__dirname, '..', 'static', 'devices', name)
                //     fs.mkdir(dirName, (err) => {
                //         if (err) throw err;
                //     }); 
                //     for (const img of images) {
                //         const fileName = uuid.v4() + '.jpg'; // не всегда загружается jpg!!!
                //         fileNames.push(fileName)
                //         img.mv(path.resolve(__dirname, '..', 'static', 'devices', name, fileName));
                //     }
                // }
                const device = yield device_1.default.create({
                    name,
                    price,
                    brand: brand._id,
                    type: type._id,
                    images: fileNames,
                    description,
                    availableColors: JSON.parse(colorsStr)
                });
                // if (propsStr) {
                //     let props = JSON.parse(propsStr);
                //     for (const prop of props) {
                //         PropertyDeviceModel.create({
                //             propertyId: prop._id,
                //             value: prop.value,
                //             deviceId: device._id,
                //         });
                //     }
                // }
                return res.json(device);
            }
            catch (e) {
                next(ApiError_1.default.BadRequest(e.message));
            }
        });
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let { brandName, typeName } = req.query; // чем отличается req.params
            const brand = yield brand_1.default.findOne({ name: brandName });
            const type = yield type_1.default.findOne({ name: typeName });
            // page = page || 1
            // limit = limit || 9
            // let offset = page * limit - limit
            let devices;
            if (!brand && !type) {
                devices = yield device_1.default.find();
            }
            if (brand && !type) {
                devices = yield device_1.default.find({ brand: brand._id });
            }
            if (!brand && type) {
                devices = yield device_1.default.find({ type: type._id });
            }
            if (brand && type) {
                devices = yield device_1.default.find({
                    brand: brand._id,
                    type: type._id,
                });
            }
            return res.json(devices);
            // найти аналогичный метод из mongoDB
            // if (!brandId && !typeId) {
            //     devices = await Device.findAndCountAll({limit, offset})
            // }
            // if (brandId && !typeId) {
            //     devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
            // }
            // if (!brandId && typeId) {
            //     devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
            // }
            // if (brandId && typeId) {
            //     devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
            // }
        });
    }
    getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.params;
            const dbDevice = yield device_1.default.findOne({ name });
            if (!dbDevice) {
                return next(ApiError_1.default.BadRequest('Устройство c таким именем не найдено'));
            }
            yield DeviceMapper_1.DeviceMapper.toDomainModel(dbDevice).then(data => { return res.json(data); });
        });
    }
}
exports.default = new DeviceController();
