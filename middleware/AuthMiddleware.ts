// const jwt = require('jsonwebtoken');
import ApiError from '../error/ApiError';
import TokenService from'../services/token-service';
import { Request, Response, NextFunction } from 'express';

export default function (req: Request, res: Response, next:NextFunction) {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError());
        }
        const token = authorizationHeader.split(' ')[1];
        if (!token) {
            return next(ApiError.UnauthorizedError());
        }
        const userData = TokenService.validateAccessToken(token);
        if (!userData) {
            return next(ApiError.UnauthorizedError());
        }
        // req.user = userData;
        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
};
