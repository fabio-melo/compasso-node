import { cityRouter } from '@/modules/city/infrastructure/http/router';
import express from 'express'
const v1Router = express.Router();

// v1Router.use('/customer', customerRouter);
v1Router.use('/city', cityRouter )
// All routes go here 

export { v1Router }