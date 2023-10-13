require('./kafka')
const {saveRegister} = require('./client')
const {readMessage} = require('./consumer')
const main = async()=>{
   await saveRegister()
   await readMessage()
}

main()