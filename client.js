const kafka = require('./kafka')

const saveRegister =async ()=>{

    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
      topic: 'test-topic',
      messages: [
        { value: 'Hello KafkaJS user!' },
      ],
    })
    
    await producer.disconnect()
}

module.exports={saveRegister}