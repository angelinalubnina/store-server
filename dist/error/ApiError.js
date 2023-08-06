"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiError extends Error {
    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }
    static UnauthorizedError() {
        return new ApiError(401, 'Пользователь не авторизован');
    }
    static NoAccessError() {
        return new ApiError(403, 'У пользователя нет доступа к этому ресурсу');
    }
    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }
    static internal(message) {
        return new ApiError(500, message);
    }
    static forbidden(message) {
        return new ApiError(403, message);
    }
}
exports.default = ApiError;
;
