import { CustomerModel } from './model/customer.model';

export class EmailService {
  async sendEmail(customer: CustomerModel) {
    //logicas para enviar o email
    console.log({ message: `Email enviado para o id ${customer.id} com suscesso.` });
  }
}
