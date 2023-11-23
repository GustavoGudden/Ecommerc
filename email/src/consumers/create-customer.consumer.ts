import { kafkaConsumer } from '../infra/kafka/consumer.abstract';
import { EmailService } from '../service/email.service';

type CustomerConsumer = {
  email: string;
  id: string;
};

export class ConsumerCretedCustomer {
  constructor(private readonly emailService: EmailService) {}

  async createCustomerConsumer() {
    const consumer = await kafkaConsumer('CUSTOMER_CREATED');
    await consumer.run({
      eachMessage: async ({ message }) => {
        const messageToString = message.value!.toString();
        const customer = JSON.parse(messageToString) as CustomerConsumer;
        const response = this.emailService.sendEmail(customer.email, customer.id);
        console.log(response);
      },
    });
  }
}
