// Trabalhando com Query String

const http = require("http")
const url = require("url")

// Query String são informações contidas na URL, ficam após o '?'
const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'})

    // Utilizando o método URL, com isso conseguimos pegar as informações da URL
    const resultado = url.parse(req.url, true)

    // Aqui exibimos todas as querySelect
    for(let i in resultado.query){
        res.write(`${i} -> ${resultado.query[i]}<br>`)
    }

    // Mostrando a Query String "id"
    res.write(`O ID = ${resultado.query['id']}<br>`)

    // Mostrando a url completa 
    res.write(`HREF = ${resultado.href}<br>`)
    // Ou 
    // OBS: Não sei se tem diferença, pois retornam o mesmo valor
    res.write(`URL = ${req.url}`)

    // Mostrando o caminho que está
    res.write(`PATHNAME = ${resultado.pathname}<br>`)

})

const serverOK = () =>{
    console.log('Servidor inicializado!')
}

server.listen(8081, serverOK)