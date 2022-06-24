// Criando servidor http sem framework
const http = require('http')
// req =  requisição, conteúdo da URL
// res = resposta, do servidor 
http.createServer( function(req, res){
    res.write('Hello Word\n!') //Escrevendo na página
    res.end() //Encerrando a resposta
}).listen(3000) //Abrindo um servidor http e selecionando a porta dele.

//Módulos prontos do nodejs não precisa expecificar a rota -- como http e fs 