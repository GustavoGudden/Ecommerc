import { prismaClient } from '../infra/client/prismaClient';

export class ClientRepository {
  create = async (data: any) => {
    try {
      return await prismaClient.client.create({
        data: {
          ...data,
        },
      });
    } catch (error) {}
  };

  findOne = async (data: any) => {
    try {
      return await prismaClient.client.findFirst({
        where: { email: data.email },
      });
    } catch (error) {}
  };
}
