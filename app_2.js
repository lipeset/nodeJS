/*Nesta aula vamos instalar o módulo EJS. O EJS é um recurso que vai nos
permitir escrever páginas HTML juntamente com instruções JavaScript ou 
seja, ele é uma engine de views que vai permitir a criação de páginas HTML
dinâmicas. Com este recurso, nós iremos retirar o HTML escrito dentro 
das RESPONSES e passar a view de acordo.

Para instalar o EJS, como padrão, utilizaremos o terminal. Também é bem
fácil a instalação, basta digitar o comando "npm install ejs@2.5.6 --save".
Repare que nós escolhemos a versão a ser instalada, isso porque, 
no curso foi utilizada essa versão. Então para evitar erro de 
compatibilidade, mantivemos a mesma versão. O comando "--save" serve para
que seja salvo a instalação do EJS no nosso projeto, não sendo 
necessário uma nova instalação.

*/

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("<html><body>Portal de notícias</body></html>")
});

app.get('/tecnologia', function(req, res){
    res.send("<html><body>Notícias de tecnologia</body></html>")
});

app.listen(3000, function(){
    console.log("Servidor rodando com express");
});