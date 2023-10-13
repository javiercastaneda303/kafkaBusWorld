const { Kafka } = require('kafkajs')

const MyKafka = new Kafka({
  clientId: 'busWorld',
  brokers: ['192.168.1.123:9092'],
})

module.exports = MyKafka