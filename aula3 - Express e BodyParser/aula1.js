//Utilizando o framework Express e BodyParser
const express = require("express") // Carregando o módulo express
const app = express() // app recebe todas as coisas do express
const path = require("path") // permite o uso do __dirname
const bodyParser = require("body-parser") // Permite pegar valores do formluário html

app.use(bodyParser.urlencoded({ extend: true }))

// Rota raíz
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/html/index.html"))
})

// Rota "calcular"
app.get("/calcular", (req, res) => {
    res.sendFile(path.join(__dirname + "/html/calcular.html"))
})

// Rota "resultado", que imprime o resultado do calculo do calcular.html
app.post("/resultado", (req, res) => {
    // Pegando os valores da input do formulário e fazendo a soma
    const calc = Number(req.body.inpNum1) + Number(req.body.inpNum2)
    // Exibindo em forma de String
    res.send(`Total = ${calc.toString()}`)
})

app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081")
})
