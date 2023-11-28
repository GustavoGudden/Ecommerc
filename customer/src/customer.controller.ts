import { Request, Response } from 'express';
import { CustomerService } from './customer.service';

export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  handleCreateCustomer = async (req: Request, res: Response) => {
    const createdClient = await this.customerService.createClient(req.body);
    res.status(201).json(createdClient);
  };
}
