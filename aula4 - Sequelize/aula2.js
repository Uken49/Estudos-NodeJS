//Criando um Model no Sequelize
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '123456', {
    host: "localhost",
    dialect: "mysql"
})

const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
//Primeiro parametro: nome da tabela
//Segundo parametro: Em json, campos da tabela

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Postagem.create({
    titulo: "Testando um titulo maneiro",
    conteudo: "conteudo mais do que maneiro"
})
//Criando uma publicacao

Usuario.create({
    nome: "Helder",
    sobrenome: "Maneiro",
    idade: 18,
    email: "emailmaneiro@gmail.com"
})
//Criando um usuario

// Usuario.sync({force: "true"}) //Isso força para a tabela ser criada, comentar ou deletar depois do primeiro uso.
// Postagem.sync({force: "true"}) //Isso força para a tabela ser criada, comentar ou deletar depois do primeiro uso.