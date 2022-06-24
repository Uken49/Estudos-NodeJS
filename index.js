const http = require('http')
http.createServer(function (req, res) {
    res.write('Página Inicial') 
    res.end() 
}).listen(3000)