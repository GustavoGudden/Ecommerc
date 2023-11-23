export class EmailService {
  async sendEmail(email: string, id: string) {
    //logicas para enviar o email
    return { message: `Email enviado para o id ${id} com suscesso.` };
  }
}
