import express from 'express';
import bodyParser from 'body-parser';
import { prismaClient } from './infra/client/prismaClient';
import { ClientModule } from './client.module';
var cors = require('cors');

async function bootstrap() {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors({ origin: '*' }));

  

  const clientModule = new ClientModule();
  clientModule.start(app);

  app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
  });
  process.on('beforeExit', async () => {
    prismaClient.$disconnect;
  });
}

bootstrap();
