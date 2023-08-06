"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeviceDto = void 0;
class CreateDeviceDto {
    constructor(name, brandName, typeName, price, images, description, availableColors, properties) {
        this.name = name;
        this.brandName = brandName;
        this.typeName = typeName;
        this.price = price;
        this.images = images;
        this.description = description;
        this.availableColors = availableColors;
        this.properties = properties;
    }
}
exports.CreateDeviceDto = CreateDeviceDto;
