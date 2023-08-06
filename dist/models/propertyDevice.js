"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PropertyDeviceSchema = new mongoose_1.Schema({
    propertyId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Property', required: true },
    value: { type: 'String', required: true },
    deviceId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Device', required: true },
});
exports.default = (0, mongoose_1.model)('PropertyDevice', PropertyDeviceSchema);
