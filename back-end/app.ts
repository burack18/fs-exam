import * as dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { userRouter } from './controller/user.routes';
import helmet from 'helmet';

const app = express()
app.use(helmet())

dotenv.config();
const port = process.env.APP_PORT || 3000;

app.use(cors({ origin: 'http://localhost:8080' }));
app.use(bodyParser.json());

app.use('/users', userRouter);

app.get('/status', (req, res) => {
    res.json({ message: 'Exam API is running...' });
});

const swaggerOpts = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Exam API',
            version: '1.0.0',
        },
    },
    apis: ['./controller/*.routes.ts'],
}
const swaggerSpec = swaggerJSDoc(swaggerOpts)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(port || 3000, () => {
    console.log(`Exam API is running on port ${port}.`)
})
