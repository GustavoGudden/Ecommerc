import { kafka } from '../../client/kafka';

export class KafkaSendMessage {
  async execute(topic: string, payload: any): Promise<void> {
    const producer = kafka.producer({
      allowAutoTopicCreation: true,
    });
    await producer.connect();
    console.log(`message sent to topic ${topic}`);
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(payload) }],
    });
    await producer.disconnect();
  }
}
