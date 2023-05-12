const fs = require('fs');
const path = require('path');
// To read a stream
const rs = fs.createReadStream(path.join(__dirname,'new-file', 'lorem.txt'), {encoding: 'utf8'})

// To write a stream
const ws = fs.createWriteStream(path.join(__dirname,'new-file','stream.txt'))
// rs.on('data', (chunkData) => {
//     ws.write(chunkData)
//     console.log(`Chunked data streamed successfully`)

// })
rs.pipe(ws)

