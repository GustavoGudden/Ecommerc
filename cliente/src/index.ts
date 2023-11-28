import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'express-async-errors';
import { prismaClient } from './infra/client/prismaClient';
import { CustomerModule } from './customer.module';
import { ErrorHandler } from './handlers/error.handler';

async function bootstrap() {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors({ origin: '*' }));

  const clientModule = new CustomerModule();
  clientModule.start(app);

  app.use(ErrorHandler.handle);

  app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
  });
  process.on('beforeExit', async () => {
    prismaClient.$disconnect;
  });
}

bootstrap();
