import { ValidationError } from "express-validator";

export default class ApiError extends Error {
    status;
    errors;

    constructor(status: number, message: string, errors: ValidationError[]= []) {
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

    static BadRequest(message: string, errors: ValidationError[] = []) {
        return new ApiError(400, message, errors);
    }

    static internal(message: string) {
        return new ApiError(500, message);
    }

    static forbidden(message: string) {
        return new ApiError(403, message);
    }
};
