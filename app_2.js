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
necessário uma nova instalação. Se tudo ocorreu de acordo, agora temos uma
pasta chamada EJS dentro da pasta "node_modules".

Primeiramente, precisamos mostrar ao EXPRESS que a nossa engine de views
agora passou a ser o módeulo EJS. E como fazemos isso? Utilizando o método
.SET() do EXPRESS. Esse método serve para alterar alguma propriedade dentro
do EXPRESS. Dessa forma o EXPRESS irá conseguir trabalhar em conjunto com
EJS e assim, poderemos retornar as nossas views que foram criadas em outro
arquivo e não na própria response da rota.*/

var express = require('express');
var app = express();

/*No primeiro parâmetro, apontamos qual propriedade do EXPRESS queremos
alterar. No segundo, passamos qual a nova engine será inserida no lugar.*/
app.set('view engine', 'ejs');

/*Outra mudança, é que com o EJS, trocamos o método .SEND(), pelo método
.RENDER(). A ideia também, é que exista uma pasta de nome "views" e dentro
dessa pasta, você separe outras pastas com partes do seu projeto, para que
tudo seja organizado de uma maneira independente.*/
app.get('/', function(req, res){
    res.send("<html><body>Portal de notícias</body></html>");
});

app.get('/tecnologia', function(req, res){
    res.send("<html><body>Notícias de tecnologia</body></html>");
});

app.listen(3000, function(){
    console.log("Servidor rodando com express");
});