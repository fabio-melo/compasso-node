
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';

import { v1Router } from './api/v1';

import { PRODUCTION } from '@/config';

const app = express();


/* Boilerplate para inicializar a API */
const origin = {
  origin: PRODUCTION ? 'localhost' : '*',
}

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// app.use(cors(origin))
app.use(compression())
app.use(helmet())
app.use(morgan('combined'))

app.use('/api/v1', v1Router)

// New api versions can go here

app.listen(process.env.PORT || 3000, () => {
  console.log(`[App]: Server listening on 3000`)
})

export { app };