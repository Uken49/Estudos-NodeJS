//Utilizando o framework Express
const express = require("express") //express recebe o módulo que cria o express
const app = express() //app recebe todas as coisas do express

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/html/index.html") //Enviando um arquivo html
}) //__dirname retorna o caminho absoluto do diretório.

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/html/sobre.html") //Enviando um arquivo html
})

app.listen(8081, function () {
    console.log("Servidor rodando na url http://localhost:8081")
}) //Essa tem que ser a última linha do código relacionado ao express,caso contrário ocorrerá erro.
