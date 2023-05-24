const express = require('express')
const app = express()
const path = require('path')


 
const PORT = process.env.PORT || 3500

// how to get request
app.get('^/$|index(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', {root: __dirname})
    res.sendFile(path.join(__dirname, "views", 'index.html'))
})

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, "views", 'new-page.html'))
})

// to redirect

app.get("/old-page(.html)?", (req, res) => {
    // res.redirect(path.join(__dirname, 'views', 'new-page.html')) // 302 by default
    res.redirect(301, path.join(__dirname, "views", "new-page.html"))
   
})

// catch all route to get error 404 page
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views","404.html"))
    // res.status(404).
})


// Method 2

app.get('/', (req, res, next) => {
    console.log("attempted a request")
}, (err, res, next) => {
    console.log("attempted a request 2");
    next();
},(req, res) => {
    console.log('Final request')
    res.send("Hello World")
}
)

// const one = (req, res, next) => {
//     console.log('1st request attempted')
//     next();
// }

// const Two = (req, res, next) => {
//     console.log('2nd request attempted')
//     next();
// }

// const Three = (req, res) => {
//     console.log('Final Request')
//    res.send('Finshed Request')
// }

// app.get('/', [one, Two, Three])
app.listen(PORT,() => console.log(`Server is listening on ${PORT}`))





 















































































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


