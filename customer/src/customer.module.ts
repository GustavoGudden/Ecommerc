import { Express } from 'express';

// Client
import { prismaClient } from './infra/client/prismaClient';

import { CustomerRouter } from './router/customer.router';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { CustomerRepository } from './repositories/customer.respository';
import { KafkaSendMessage } from './infra/kafka/abstract-producer/producer';

export class CustomerModule {
  start(app: Express) {
    const clientRepository = new CustomerRepository(prismaClient);
    const kafkaProducer = new KafkaSendMessage();
    const clientService = new CustomerService(clientRepository, kafkaProducer);
    const clientController = new CustomerController(clientService);
    const clientRouter = new CustomerRouter(app, clientController);

    clientRouter.execute();
  }
}
