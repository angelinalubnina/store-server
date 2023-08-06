"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError = require('../error/ApiError');
function default_1(roles) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            // const user = req.user;
            // if (!user){
            //     return next(ApiError.UnauthorizedError());
            // }
            // let hasRole = roles.includes(user.role);
            // if (!hasRole) {
            //     return next(ApiError.NoAccessError());
            // }
            next();
        }
        catch (e) {
            return next(ApiError.UnauthorizedError());
        }
    };
}
exports.default = default_1;
;
