"use strict";
// import { DeviceDomainServiceMongo } from "../infrastructure/db/domainServices/DeviceDomainServiceMongo";
// import {DeviceAppService} from '../core/appServices/DeviceAppService'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// const Router = require('express');
const deviceController_1 = __importDefault(require("../controllers/deviceController"));
// const HttpDeviceController = require('../infrastructure/controllers/HttpDeviceController');
const express_validator_1 = require("express-validator");
const AuthMiddleware_1 = __importDefault(require("../middleware/AuthMiddleware"));
const RoleMiddleware_1 = __importDefault(require("../middleware/RoleMiddleware"));
// // конкретная реализация класса из 4 слоя наследующая интерфейс из 2 слоя, не требует аргументов
// const deviceDomainServiceMongo = new DeviceDomainServiceMongo();
// // бизнес логика из 3 слоя требующая любой экземляр класса из 4 слоя реализующий интерфейс 2 слоя
// const deviceAppService = new DeviceAppService(deviceDomainServiceMongo);
// // контроллер 4 слоя требующий аругментов экемпляр класса 3 слоя
// const controller = new HttpDeviceController(deviceAppService)
const router = (0, express_1.Router)();
router.post('/', AuthMiddleware_1.default, (0, RoleMiddleware_1.default)(['ADMIN']), (0, express_validator_1.check)('name', 'Поле name не имеет значения').notEmpty(), (0, express_validator_1.check)('typeName', 'Поле typeName не имеет значения').notEmpty(), (0, express_validator_1.check)('brandName', 'Поле brandName не имеет значения').notEmpty(), (0, express_validator_1.check)('price', 'Поле price не имеет значения').notEmpty(), (0, express_validator_1.check)('price', 'Поле price должно иметь числовое значение').isNumeric(), deviceController_1.default.create);
router.get('/', deviceController_1.default.getAll);
router.get('/:name', deviceController_1.default.getOne);
// router.delete(
//     '/:name',
//     authMiddleware,
//     checkRole(['ADMIN']),
//     deviceController.delete,
// );
module.exports = router;
