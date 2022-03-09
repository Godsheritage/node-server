const http = require('http')
const data = require('./data.json')

server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type" : "application/json" 
    })
    res.end(data)
}).listen(3000)

