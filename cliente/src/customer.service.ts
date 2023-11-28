// Kafka sender
import { KafkaSendMessage } from './infra/kafka/abstract-producer/producer';

// Respository
import { CustomerRepository } from './repositories/customer.respository';

export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository, private readonly kafkaProducer: KafkaSendMessage) {}

  async createClient(data: any) {
    const createdCustomer = await this.customerRepository.createCustomer(data);

    await this.kafkaProducer.execute('CUSTOMER_CREATED', createdCustomer);

    return createdCustomer;
  }
}
