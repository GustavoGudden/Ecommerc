// Kafka sender
import { KafkaSendMessage } from './infra/kafka/abstract-producer/producer';

// Respository
import { ClientRepository } from './repositories/client.respository';

export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async createClient(data: any) {
    const custumer = await this.clientRepository.findOne(data);

    // Exception se o usuario ja exister
    if (custumer) throw new Error('Custumer already exists');

    // Criar o usuario caso o usuario nao exista
    const createdCustumer = await this.clientRepository.create(data);

    const kafkaProducer = new KafkaSendMessage();
    await kafkaProducer.execute('CUSTOMER_CREATED', {
      id: createdCustumer!.id,
      email: createdCustumer!.email,
    });

    return createdCustumer;
  }
}
