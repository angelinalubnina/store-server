"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketDevice = void 0;
class BasketDevice {
    constructor(id, 
    // readonly user: User,
    email, 
    // readonly device: Device,
    deviceName, amount, selectedColor) {
        this.id = id;
        this.email = email;
        this.deviceName = deviceName;
        this.amount = amount;
        this.selectedColor = selectedColor;
    }
}
exports.BasketDevice = BasketDevice;
