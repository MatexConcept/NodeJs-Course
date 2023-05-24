const {format} = require('date-fns')
const {v4: uuid} = require('uuid')


const fs = require('fs')
const fsPromises = require('fs/promises')
const path = require('path')

const logEvents = async(message, logName) => {
    
    const dateTime = format(new Date(), `yyyy-mm-dd\t\tHH:mm:ss`) 
    const logItem = `${dateTime}\t ${uuid()}\t ${message} \n`
    console.log(logItem)
    // console.log(dateTime)
   

    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            await fs.mkdir(path.join(__dirname, 'logs'), (err) => {
                if (err) throw err;
                console.log('Directory created!');
            })
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', logName ), logItem)
    }catch (err) {
        console.log(err)
    }
   
}


module.exports = logEvents