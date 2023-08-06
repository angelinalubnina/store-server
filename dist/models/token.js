"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//сюда можно добавить IP с которого зашел пользователь
// фингерпритн браузера
const TokenSchema = new mongoose_1.Schema({
    refreshToken: { type: String, required: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
});
module.exports = (0, mongoose_1.model)('Token', TokenSchema);
