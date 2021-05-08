import express from 'express'
import { customerRouter } from '@/modules/Customer/infrastructure/http/router';
import { cityRouter } from '@/modules/City/infrastructure/http/router';

const v1Router = express.Router();

v1Router.use('/customer', customerRouter);
v1Router.use('/city', cityRouter )
// All routes go here 

export { v1Router }