const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

const {logger} = require('./middleware/logEvent')
const errorHandler = require('./middleware/errorHandler')
const PORT = process.env.PORT || 5000
const corsOptions = require('./config/corsOptions')

app.use(logger)

// built in middleware to handle urlencoded daata:
// content-type: application/x-ww-form-urlencoded

app.use(express.urlencoded({extended: false}))

// buit-in middleware for json data
app.use(express.json())

// serve static files
 
app.use('/',express.static(path.join(__dirname, './public')))


app.use('/', require('./routes/root'))

app.use('/students', require('./routes/api/students'))

// register route
app.use('/register', require("./routes/register"))

// login route
app.use('/auth', require("./routes/auth"))

app.use(cors(corsOptions))

// how to get request
app.get('^/$|index(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', {root: __dirname})
    res.sendFile(path.join(__dirname, "views", 'index.html'))
})

app.get('^/$|new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, "views", 'new-page.html'))
})

// to redirect

app.get("/old-page(.html)?", (req, res) => {
    // res.redirect(path.join(__dirname, 'views', 'new-page.html')) // 302 by default
    res.redirect(301, "/new-page.html")
   
})

// catch all route to get error 404 page
app.all('*', (req, res) => {
    res.status(404)
    if(req.accepts('html')) {
        res.sendFile(path.join(__dirname, "views","404.html"))
    }else if (req.accepts('json')) {
        res.join({Error : '404 Not Found'})
    }else {
        res.type('txt').send('404 Not Found')
    }
   
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

app.use(errorHandler)
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


