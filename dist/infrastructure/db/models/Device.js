"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DeviceSchema = new mongoose_1.Schema({
    name: { type: String, unique: true, required: true },
    brandName: { type: String, required: true },
    typeName: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    images: { type: [String], default: [] },
    description: { type: String, required: true },
    availableColors: { type: [mongoose_1.Schema.Types.ObjectId], ref: 'Color', required: true }
});
exports.default = (0, mongoose_1.model)('Device', DeviceSchema);
