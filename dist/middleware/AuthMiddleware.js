"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const jwt = require('jsonwebtoken');
const ApiError_1 = __importDefault(require("../error/ApiError"));
const token_service_1 = __importDefault(require("../services/token-service"));
function default_1(req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError_1.default.UnauthorizedError());
        }
        const token = authorizationHeader.split(' ')[1];
        if (!token) {
            return next(ApiError_1.default.UnauthorizedError());
        }
        const userData = token_service_1.default.validateAccessToken(token);
        if (!userData) {
            return next(ApiError_1.default.UnauthorizedError());
        }
        // req.user = userData;
        next();
    }
    catch (e) {
        return next(ApiError_1.default.UnauthorizedError());
    }
}
exports.default = default_1;
;
