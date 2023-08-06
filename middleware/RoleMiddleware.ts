const ApiError = require('../error/ApiError');
import { Request, Response, NextFunction } from 'express';

export default function (roles : string[]) {
    return function (req: Request, res: Response, next:NextFunction) {
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
        } catch (e) {
            return next(ApiError.UnauthorizedError());
        }
    };
};
