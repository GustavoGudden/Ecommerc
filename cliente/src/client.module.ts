import { Express } from 'express-serve-static-core';
import { ClientRouter } from './router/client.router';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { ClientRepository } from './repositories/client.respository';

export class ClientModule {
  start(app: Express) {
    const clientRepository = new ClientRepository();

    const clientService = new ClientService(clientRepository);

    const clientController = new ClientController(clientService);

    const clientRouter = new ClientRouter(app, clientController);

    clientRouter.execute();
  }
}
