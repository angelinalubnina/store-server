"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// const brandRouter = require('./brandRouter');
// const typeRouter = require('./typeRouter');
const deviceRouter = require('./deviceRouter');
// const userRouter = require('./userRouter');
// const basketDeviceRouter = require('./basketDeviceRouter');
// const colorRouter = require('./colorRouter');
// const propertyRouter = require('./propertyRouter')
//_____________________________________________
// const woodRouter = require('./woodRouter');
//_____________________________________________
const router = (0, express_1.Router)();
// router.use('/type', typeRouter);
// router.use('/brand', brandRouter);
router.use('/device', deviceRouter);
// router.use('/user', userRouter);
// router.use('/basketDevice', basketDeviceRouter);
// router.use('/color', colorRouter);
// router.use('/property', propertyRouter);
//_____________________________________________
// router.use('/wood', woodRouter);
//_____________________________________________
// module.exports = router;
exports.default = router;
