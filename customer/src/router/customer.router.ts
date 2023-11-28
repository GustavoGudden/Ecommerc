import { Express, Router } from 'express';
import { CustomerController } from '../customer.controller';

export class CustomerRouter {
  private customerRouter = Router();

  constructor(private readonly expressApp: Express, private readonly customerController: CustomerController) {}

  async execute() {
    this.customerRouter.post('/', this.customerController.handleCreateCustomer);

    this.expressApp.use('/customers', this.customerRouter);
  }
}
