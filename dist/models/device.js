"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DeviceSchema = new mongoose_1.Schema({
    name: { type: String, unique: true, required: true },
    brand: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Brand', required: true },
    type: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Type', required: true },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    images: { type: [String], default: [] },
    description: { type: String, default: 'Описание', required: true },
    availableColors: { type: [mongoose_1.Schema.Types.ObjectId], ref: 'Color', required: true }
});
const DeviceModel = (0, mongoose_1.model)('Device', DeviceSchema);
exports.default = DeviceModel;
