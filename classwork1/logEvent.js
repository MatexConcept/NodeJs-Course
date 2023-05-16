const {format} = require('date-fns')
const {v4: uuid} = require('uuid')


const fs = require('fs')
const fsPromises = require('fs/promises')
const path = require('path')

const Event = async (msg) => {
    
    const dateTime = format(new Date(), `yyyy-mm-dd\t\tHH:mm:ss`) 
    const logItem = `${dateTime}\t ${uuid()}\t ${msg} \n`
    console.log(logItem)

    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            await fs.mkdir(path.join(__dirname, 'logs'), (err) => {
                if (err) throw err;
                console.log('Directory created!');
            })
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem)
    }catch (err) {
        console.log(err)
    }
   
}

module.exports = Event