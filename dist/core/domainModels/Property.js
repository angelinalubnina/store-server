"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
class Property {
    constructor(
    // readonly id: string,
    name, value, deviceName) {
        this.name = name;
        this.value = value;
        this.deviceName = deviceName;
    }
}
exports.Property = Property;
