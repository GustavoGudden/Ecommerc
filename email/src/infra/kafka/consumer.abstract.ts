import { kafka } from '../client/kafka';

// abstraçao para conseguir consumir uma fila  passando qualquer topico como paramentro;
// Basicamente criar o consumidor para o topico(fila) que foi passado como paramentro;

export const kafkaConsumer = async (topic: string) => {
  const consumer = kafka.consumer({ groupId: 'ORDER_APP' });
  await consumer.connect();

  await consumer.subscribe({ topic, fromBeginning: true });

  return consumer;
};
