const logEvents = require('./logEvent');
const logEvent = require('./logEvent')

const EventEmitter = require('events')
class MyEmitter extends EventEmitter{}

// initialize event
const myEmitter = new MyEmitter();


// add event listner

myEmitter.on('log', (msg) => logEvents(msg))

setTimeout(() => {
    myEmitter.emit('log', 'event emitted')
}, 2000)

