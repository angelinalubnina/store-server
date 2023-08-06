// import { DeviceDomainServiceMongo } from "../infrastructure/db/domainServices/DeviceDomainServiceMongo";
// import {DeviceAppService} from '../core/appServices/DeviceAppService'

import {Router} from 'express'
// const Router = require('express');
import deviceController from '../controllers/deviceController';
// const HttpDeviceController = require('../infrastructure/controllers/HttpDeviceController');
import {check} from 'express-validator';
import authMiddleware from '../middleware/AuthMiddleware';
import checkRole from '../middleware/RoleMiddleware';


// // конкретная реализация класса из 4 слоя наследующая интерфейс из 2 слоя, не требует аргументов
// const deviceDomainServiceMongo = new DeviceDomainServiceMongo();
// // бизнес логика из 3 слоя требующая любой экземляр класса из 4 слоя реализующий интерфейс 2 слоя
// const deviceAppService = new DeviceAppService(deviceDomainServiceMongo);
// // контроллер 4 слоя требующий аругментов экемпляр класса 3 слоя
// const controller = new HttpDeviceController(deviceAppService)


const router = Router();
router.post(
    '/',
    authMiddleware,
    checkRole(['ADMIN']),
    check('name', 'Поле name не имеет значения').notEmpty(),
    check('typeName', 'Поле typeName не имеет значения').notEmpty(),
    check('brandName', 'Поле brandName не имеет значения').notEmpty(),
    check('price', 'Поле price не имеет значения').notEmpty(),
    check('price', 'Поле price должно иметь числовое значение').isNumeric(),
    deviceController.create,
);
router.get('/', deviceController.getAll);
router.get('/:name', deviceController.getOne);
// router.delete(
//     '/:name',
//     authMiddleware,
//     checkRole(['ADMIN']),
//     deviceController.delete,
// );

module.exports = router;
