/*Vamos instalar e utilizar agora o NODEMON. Este recurso será
responsável por verificar a alteração de algum código e reinicar
automaticamente o nosso servidor, sem termos que faze-lo manualmente.
Isso acaba sendo uma atividade muito chata e repititiva e também
acaba exterminando uma das grandes vantagens de linguagens interpretadas,
como o PHP, JavaScript, entre outras, que é o fato de alterar o arquivo
e não precisar compilar, simplesmente alteramos o arquivo e pronto, a
execução é feita com base no arquivo atualizado. Como isso não ocorre
de forma natural no NodeJS, iremos utilizar o NODEMON para fazer isso
de forma automática.

Lembrando que o NODEMON não é um módulo do nosso projeto, ele é um 
recurso do AMBIENTE DE DESENVOLVIMENTO.

Como sempre, iremos utilizar o NPM para a instalação desse novo recurso.
Então digite o comando "npm install -g nodemon@1.10.2". Repare que nós 
escolhemos a versão a ser instalada, isso porque, no curso foi 
utilizada essa versão. Então para evitar erro de compatibilidade, 
mantivemos a mesma versão.

Agora, para subirmos o nosso servidor, ao invés de usarmos o comando
"node app_x.js", iremos utilizar "nodemon app_x.js".*/

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("home/index");
});

app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia");
});

app.get('/noticias', function(req, res){
    res.render("noticias/noticias");
});

app.listen(3000, function(){
    console.log("Servidor rodando com EXPRESS e EJS");
});