import { cityRouter } from '@/modules/city/infrastructure/http/router';
import { customerRouter } from '@/modules/customer/infrastructure/http/router';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerData } from './swagger';
const v1Router = express.Router();

v1Router.use('/cities', cityRouter )
v1Router.use('/customers', customerRouter )

v1Router.use('/docs', swaggerUi.serve,
            swaggerUi.setup(swaggerData));


export { v1Router }