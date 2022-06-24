const http = require("http")

const server = http.createServer((req, res)=>{
    console.log('Requisição!')
    res.writeHead(200, {'Content-Type': 'text/html'})

    if (req.url == "/") {
        // Caso esteja na página de ínicio (200 resposta HTTP de Ok)
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<h1>Inicio</h1>")
        res.write("<hr>")
        res.write("Seja Bem Vindo!!")
    } else if(req.url == "/login"){
        // Caso esteja na página /login (200 resposta HTTP de Ok)
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<h1>Login</h1>")
        res.write("<hr>")
        res.write("<input type='text'>")
    } else if(req.url == "/error"){
        // Página de erro (404 resposta HTTP de erro)
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write("<h1>Error</h1>")
    }else{
        // Caso a página não exista, redireciona pra /error (301 resposta HTTP de redirecionamento)
        res.writeHead(301, {Location: 'http://localhost:3000/error'})
    }
    res.end("<hr>")
})

const serverOK = function () {
    console.log('Servidor inicializado!')
}

server.listen(3000, serverOK)