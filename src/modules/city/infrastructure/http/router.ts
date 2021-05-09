import express from 'express'
import { createCityController } from '../../controllers';

const cityRouter = express.Router();

console.log("router city")
cityRouter.post("/", createCityController.execute);

// customerRouter.use('/user', );

// All routes go here 

export { cityRouter }