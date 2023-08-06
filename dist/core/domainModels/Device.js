"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
class Device {
    constructor(id, name, brandName, typeName, price, rating, images, description, availableColors, properties) {
        this.id = id;
        this.name = name;
        this.brandName = brandName;
        this.typeName = typeName;
        this.price = price;
        this.rating = rating;
        this.images = images;
        this.description = description;
        this.availableColors = availableColors;
        this.properties = properties;
    }
}
exports.Device = Device;
