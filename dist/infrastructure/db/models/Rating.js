"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RatingSchema = new mongoose_1.Schema({
    deviceId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Device', required: true },
    averageValue: { type: Number, required: true },
});
exports.default = (0, mongoose_1.model)('Rating', RatingSchema);
