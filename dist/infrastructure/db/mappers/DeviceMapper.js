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
exports.DeviceMapper = void 0;
const Device_1 = require("../../../core/domainModels/Device");
const color_1 = __importDefault(require("../../../models/color"));
const propertyDevice_1 = __importDefault(require("../../../models/propertyDevice"));
const brand_1 = __importDefault(require("../../../models/brand"));
const type_1 = __importDefault(require("../../../models/type"));
class DeviceMapper {
    static toDomainModel(dbDevice) {
        return __awaiter(this, void 0, void 0, function* () {
            const colors = [];
            for (const colorId of dbDevice.availableColors) {
                const color = yield color_1.default.findById(colorId);
                if (color != null) {
                    colors.push(color);
                }
            }
            const properties = yield propertyDevice_1.default.find({ deviceId: dbDevice._id });
            const brand = yield brand_1.default.findById(dbDevice.brand);
            let brandName = "";
            if (brand != null) {
                brandName = brand.name;
            }
            const type = yield type_1.default.findById(dbDevice.type);
            let typeName = "";
            if (type != null) {
                typeName = type.name;
            }
            const device = new Device_1.Device(dbDevice._id, dbDevice.name, brandName, typeName, dbDevice.price, dbDevice.rating, dbDevice.images, dbDevice.description, colors, properties);
            return device;
        });
    }
}
exports.DeviceMapper = DeviceMapper;
