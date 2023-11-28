import { kafkaConsumer } from '../infra/kafka/consumer.abstract';
import { CustomerModel } from '../model/customer.model';
import { EmailService } from '../service/email.service';

export class ConsumerCretedCustomer {
  constructor(private readonly emailService: EmailService) {}

  async execute() {
    const consumer = await kafkaConsumer('CUSTOMER_CREATED');
    await consumer.run({
      eachMessage: async ({ message }) => {
        const messageToString = message.value!.toString();
        const customer = JSON.parse(messageToString) as CustomerModel;
        this.emailService.sendEmail(customer);
      },
    });
  }
}
