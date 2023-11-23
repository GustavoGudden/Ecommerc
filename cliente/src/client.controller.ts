import { ClientService } from './client.service';
import { Request, Response } from 'express';

export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  handleCreateClient = async (req: Request, res: Response) => {
    const data = req.body;
    const createdClient = await this.clientService.createClient(data);
    res.json(createdClient);
  };
}
