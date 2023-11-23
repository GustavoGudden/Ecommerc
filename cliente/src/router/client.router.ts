import { Express, Router } from 'express';
import { ClientController } from '../client.controller';

export class ClientRouter {
  private clientRouter = Router();

  constructor(private readonly expressApp: Express, private readonly clientController: ClientController) {}

  async execute() {
    // rotas usando o express
    this.clientRouter.post('/create', this.clientController.handleCreateClient);

    this.expressApp.use('/client', this.clientRouter);
  }
}
