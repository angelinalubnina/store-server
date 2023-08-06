"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ColorSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    code: { type: String, unique: true, require: true },
});
exports.default = (0, mongoose_1.model)('Color', ColorSchema);
