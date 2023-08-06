"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basket = void 0;
class Basket {
    constructor(email, cost, basketDevices
    // readonly user: User,
    // readonly device: Device,
    ) {
        this.email = email;
        this.cost = cost;
        this.basketDevices = basketDevices;
    }
}
exports.Basket = Basket;
