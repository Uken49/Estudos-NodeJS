// Criando servidor http
const http = require('http')
// req =  requisição, conteúdo da URL
// res = resposta, do servidor 
http.createServer((req, res) => {
    //Escrevendo no head
    res.writeHead(200,{
        'Content-Type':'text/plain'
    })
    res.write('Hello Word\n!') //Escrevendo na página
    res.end() //Encerrando a resposta
}).listen(3000)