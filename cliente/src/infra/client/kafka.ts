import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['oriented-redfish-10105-us1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'b3JpZW50ZWQtcmVkZmlzaC0xMDEwNSTTNltM3-V8x7dOgSQ7rYcFJyF_d_ci2a0',
    password: 'Y2QwY2U2OWYtMzA1NC00NDczLWE3Y2UtYTMzNjcyYWRhMzIw',
  },
  ssl: true,
});

export { kafka };
