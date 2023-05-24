const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

const logEvent = require('./logEvent')

const {EventEmitter} = require('node:events')
const myEmitter = new EventEmitter();


// new method of creating method
const PORT = process.env.PORT || 3500

const serverFile = async (filePath, contentType, response) => {
    try {
        const rawData = await fsPromises.readFile(filePath, 
        !contentType.includes('image') ? 'utf8' : '');
        const data = contentType === 'application/json' ? JSON.parse(rawData) : rawData;
        response.writeHead(filePath.includes('404.html') ? 404 : 200, {'Content-Type' : contentType}) ;
        response.end(contentType === 'application/json' ? JSON.stringify(data) : data);
      
    } catch (err) {
        console.log(err);
        myEmitter.emit('log', `${err.name} : ${err.message}`, 'errLog.txt');
        response.statusCode = 500;
        response.end(
            // contentType === 'application/json' ? JSON.stringify(data) : data
        );
    }
}

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    const extension = path.extname(req.url)
    let contentType;

    switch(extension) {
        case '.css' : contentType = 'text/css';
        break;
        case ".js" : contentType = 'text/javascript';
        break;
        case '.json' : contentType = "application/json"
        break;
        case '.jpeg' : contentType = 'image/jpeg';
        break;
        case '.png' : contentType = 'image/png';
        break;
        case ".txt" : contentType = 'text/plain';
        break;
        default : contentType = 'text/html';

    }

    let filePath = 
    contentType === "text/html" && req.url === '/'
    ?path.join(__dirname, 'views', 'index.html') 
    : contentType === 'text/html' && req.url.slice(-1) === '/'
    ?path.join(__dirname, 'views', req.url, 'index.html')
    :contentType === "text/html"
    ?path.join(__dirname, "views", req.url)
    :path.join(__dirname, req.url)

    if(!extension && req.url.slice(-1)!== '/') filePath += ".html"

    const fileExist = fs.existsSync(filePath);

    if (fileExist) {

        serverFile(filePath, contentType, res)

    } else {
        // console.log(path.parse(filePath))
        switch(path.parse(filePath).base) {
            case "old-page.html":res.writeHead(301, {Location : "/new-page.html"});
            res.end();
            break;
            case "www.page.html" : res.writeHead(301, {Location: "/"});
            res.end();
            break;

            default: serverFile(path.join(__dirname, "views",  "404.html"), "text.html", res)
        }
    }

})

server.listen(PORT,() => console.log(`Server is listening on ${PORT}`))





 














































































// // Creating Server
// const http = require('http')
// const host = 'localhost'
// const port = '9111'

// const requestListner = function(req, res) {
//     res.writeHead(200)
//     res.end('My first server!')
// }

// // Creating A Server

// const server = http.createServer(requestListner);
// server.listen(port, host, () => {
//     console.log(`Server Listening on port http://${port} : ${host}`)
// })


