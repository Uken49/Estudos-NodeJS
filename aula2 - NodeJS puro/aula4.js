// Carregando arquivos

const http = require("http")
const url = require("url")
const fs = require("fs") // fs = file system, módulo utilizado para carregar arquivos do servidor

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})

    // Método que carrega o arquivo de forma assíncrona
    // Este é o método que deve ser usado, pois não atrapalha o fluxo do sistema
    fs.readFile('index.html', (error, arquivo)=>{
        // Caso não dê erro, exiba o arquivoi index.html
        if(error){
            res.end("ERROR")
        }else{
            res.end(arquivo)
        }
    })

    // Método que serve para carregar um arquivo de forma sincrona
    // const retorno = fs.readFileSync('index.html')
    // res.end(retorno)
    
})

const serverOK = function () {
    console.log('Servidor inicializado!')
}

server.listen(8081, serverOK)