require('dotenv').config();
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors' ;
import fileUpload from 'express-fileupload';
import router from './routes/index';
// const errorHandler = require('./middleware/ErrorHandingMiddleware');
import cookieParser from 'cookie-parser';
import path from 'path';

const PORT = process.env.PORT || 5000;

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use(cookieParser());
app.use('/api', router);

// app.use(errorHandler);

const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:root@cluster0.fdag5rp.mongodb.net/?retryWrites=true&w=majority");
        //     {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // });
        app.listen(PORT, () => console.log(`Server started ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
