//Usando o sequelize para utilizar o MySQL
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '123456', {
    host: "localhost",
    dialect: "mysql"
})
//Primeiro parametro: nome do banco
//Segundo parametro: nome do usuario
//Terceiro parametro: senha do usuario
//Quarto: Em json, a maquina onde vai rodar o servidor
//Quinto: Em json, o tipo de banco de dados para se conectar

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log(`Falha ao se conectar: ${erro}`)
})
//sequelize.authenticate(): Verifica se houve a conexão com o banco
//then(): retorna uma ação caso sucesso
//catch(): retorna uma ação caso dê erro