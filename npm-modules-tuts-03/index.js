const {format} = require('date-fns')

// how to get unique id 
const {v4: uuid}  = require('uuid')

const dateTime = format(new Date(), 'yyyy-MM-dd\tHH:mm:ss') ;
console.log(dateTime);

console.log(uuid())

