const kafka = require('./kafka')

const readMessage = async()=>{

    const consumer = kafka.consumer({ groupId: 'test-group' })

    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
    
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value.toString(),
        })
      },
    })
}

module.exports={readMessage}