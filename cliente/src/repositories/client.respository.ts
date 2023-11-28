import { PrismaClient } from '@prisma/client';

export class ClientRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  createCustomer = async (data: any) => {
    try {
      return await this.prismaClient.client.create({
        data,
      });
    } catch (error: any) {
      if (error.meta?.target && error.meta.target[0] === 'email') throw new Object({ status: 409, message: 'Este email ja esta em uso.' });

      throw new Object({ status: 500, message: 'Algo deu errado com a criaçao do usuario.' });
    }
  };
}
