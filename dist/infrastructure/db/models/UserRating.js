"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserRatingSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    deviceId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Device', required: true },
    value: { type: Number, required: true },
});
exports.default = (0, mongoose_1.model)('UserRating', UserRatingSchema);
