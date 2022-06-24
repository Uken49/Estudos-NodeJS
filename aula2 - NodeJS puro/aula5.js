// Trabalhando com rotas

const http = require("http")
const url = require("url")
const fs = require("fs")

const routes = (pagina)=>{
    // O __dirname olha o diretorio que ESSE arquivo está
    const exist = fs.existsSync(__dirname + `/${pagina}.html`)

    // Se a página existir faça o retorno
    if(exist){
        return __dirname + `/${pagina}.html`
    }else{
        return "error_404.html"
    }
}

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})

    // Pegando o caminho da url
    const addressPath = url.parse(req.url).pathname

    let page
    // Caso o caminho for apenas '/', exiba a index
    if (addressPath == "/"){
        page = "index.html"
    }else{
        // Passando o caminho para a routes()
        page = routes(addressPath)
    }

    console.log(addressPath)

    fs.readFile(page, (error, arquivo)=>{
        if(error){
            res.end("ERROR")
        }else{
            res.end(arquivo)
        }
    })
})

const serverOK = function () {
    console.log('Servidor inicializado!')
}

server.listen(8081, serverOK)