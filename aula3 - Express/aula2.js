//Utilizando o framework Express
const express = require("express") //express recebe o módulo que cria o express
const app = express() //app recebe todas as coisas do express

app.get("/", function(req, res) {
    res.send("Seja bem-vindo ao meu app") //Enviando uma mensagem no html
}) //Criando uma rota
// A função send só pode ser utilizada apenas UMA vez na função de rota

app.get("/sobre", function(req, res) {
    res.send("Minha pagina sobre")
}) //Criando outra rota

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog")
}) //Criando mais uma outra rota

app.get("/ola/:cargo/:nome/:cor", (req,res) =>{
    res.write(`<h1>Ola ${req.params.nome}</h1>`)
    res.write(`<h2>Seu cargo e: ${req.params.cargo}</h2>`)
    res.write(`<h3>Sua cor favorita e: ${req.params.cor}</h3>`)
}) //Utilizando arrow function

app.listen(8081, function () {
    console.log("Servidor rodando na url http://localhost:8081")
}) //Essa tem que ser a última linha do código relacionado ao express,caso contrário ocorrerá erro.

//Função de Callback: Uma função que acontece a partir de um evento