//Trabalhando com rotas sem framework
const http = require('http')
const porta = 3000 //Porta padrão do servidor
const host = "127.0.0.1" //Endereço padrão do servidor

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    if (req.url == '/') {
        res.write('<h1>Seja bem vindo</h1>')
    }else if(req.url == '/produtos'){
        res.write('<h1>Produtos</h1>')
    }if(req.url == '/sobre'){
        res.write('<h1>Sobre</h1>')
    }
    res.end() //Encerrando a resposta
})
//Retornando no console
servidor.listen(porta,host,console.log('Servidor rodando'))