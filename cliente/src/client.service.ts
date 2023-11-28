// Kafka sender
import { KafkaSendMessage } from './infra/kafka/abstract-producer/producer';

// Respository
import { ClientRepository } from './repositories/client.respository';

export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async createClient(data: any) {
    const createdCustomer = await this.clientRepository.createCustomer(data);

    const kafkaProducer = new KafkaSendMessage();
    await kafkaProducer.execute('CUSTOMER_CREATED', createdCustomer);

    return createdCustomer;
  }
}
