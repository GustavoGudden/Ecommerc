import { Request, Response } from 'express';
import { ClientService } from './client.service';

export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  handleCreateClient = async (req: Request, res: Response) => {
    const createdClient = await this.clientService.createClient(req.body);
    res.status(201).json(createdClient);
  };
}
