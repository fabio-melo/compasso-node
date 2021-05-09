import { cityRouter } from '@/modules/city/infrastructure/http/router';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerData } from './swagger';
const v1Router = express.Router();

// console.log("swag", swaggerData)
// v1Router.use('/customer', customerRouter);
v1Router.use('/city', cityRouter )
// All routes go here 


v1Router.use('/docs', swaggerUi.serve,
            swaggerUi.setup(swaggerData));


export { v1Router }