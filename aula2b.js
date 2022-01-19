const http = require('http')
const url = require('url')
const porta = 3000 //Porta padrão do servidor
const host = "127.0.0.1" //Endereço padrão do servidor

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(req.url) //Escrevendo a URL atual
    const  p = url.parse(req.url,true).query //Retorno da URL em query string para o p (parâmetro)
    res.write('<br>'+p.nome) //Escrevendo a váriavel nome da URL
    res.write('<br>' + p.cpf) //Escrevendo a váriavel cpf da URL
    res.end() //Encerrando a resposta
})
//Retornando no console
servidor.listen(porta,host,console.log('Servidor rodando'))