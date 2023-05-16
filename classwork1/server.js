const Event = require('./logEvent')

const  {EventEmitter} = require('node:events')
// initialize event object 

const myEmitter = new EventEmitter();
myEmitter.on('log', (msg) => Event(msg))


setTimeout(() => {
    myEmitter.emit('log', 'emmited')
}, 2000)





