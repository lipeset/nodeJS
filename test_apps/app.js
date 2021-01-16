/*Com tudo instalado, vamos refatorar o nosso código para usarmos os novos
recursos instalados. Posteriormente, poderemos comparar este arquivo com
o arquivo "noticias_a11" para termos ideia da grande diferença é trabalhar
com ferramentas e trabalhar com JavaScript puro.*/

/*importamos a biblioteca EXPRESS, mas ela não retorna a função. É
necessário fazermos a chamada da função que o módulo retorna. Do jeito
que é mostrado abaixo, na variável APP*/
var express = require('express');
var app = express();

/*Diferentemente do outro arquivo "noticias_a11", invés de guardarmos
a URL em uma variável e usa-la para mapear as rotas, o EXPRESS facilita a
nossa vida com o seu método .GET(). Também passamos como parâmetro, uma função que recebe um REQUEST
e devolve uma RESPONSE, igual tinhamos no arquivo "noticias_a11", 
porém a função agora passada como parâmetro. Outra diferença é, enquanto
utilizavámos o método .END() para responder ao servidor, com o EXPRESS
nós utilizamos o método .SEND(), dessa forma, podemos enviar respostas ao 
cliente. Como primeiro parâmetro temos nossa URL, nosso endereço de 
browser e como segundo parâmetro a função que irá tratar da resposta 
ao servidor*/
app.get('/', function(req, res){
    res.send("<html><body>Portal de notícias</body></html>")
});

/*O EXPRESS automaticamente, recebe a rota solicitada, analisa o método
(GET, POST, PUT, DELETE) e de acordo com o método solicitado, ele passa
por todas as nossas URLS pré definidas. Dessa forma, com base no parâmetro
REQ contido nas funções, podemos passar a RESPONSE ideal para cada
solicitação.*/
app.get('/tecnologia', function(req, res){
    res.send("<html><body>Notícias de tecnologia</body></html>")
});

/*Reparem que com o NodeJS puramente, nós chamavamos a função createServer(),
porém, com o EXPRESS, utilizaremos apenas o método listen() para que o 
servidor passe a escutar requisições nesta determinada porta.*/
app.listen(3000, function(){
    console.log("Servidor rodando com express");
});