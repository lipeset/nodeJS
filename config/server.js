/*Agora vamos começar a modularizar as coisas no nosso projeto.
Aqui, neste arquivo, iremos manter a configuração do nosso servidor. 
Até aqui não tem nenhum segredo, tudo muito simples, apenas tiramos
as configurações padrões do nosso servidor do arquivo principal e
passamos para um módulo separado.

E como fazemos para retornar esse arquivo todo como um módulo para a
nossa aplicação? É muito simples! De toda a lógica abaixo, o que vamos
utilizar é o objeto que ele criar com a execução da função EXPRESS(),
ou seja, a variável 'app'. Então, usaremos o MODULE.EXPORTS para
entregar o objeto ao solicitante.

*/

var express = require('express');
var app = express();
app.set('view engine', 'ejs');

/*Como nós movimentamos o diretório 'views' para dentro do diretório
'app', precisamos configurar o EXPRESS para que ele procure as views
no local correto. É importante tomarmos muito cuidado em fazer essa
configuração, pois a propriedade setada abaixo, irá pesquisar A PARTIR
de onde o módulo está sendo utilizado, ou seja, o arquivo 'app.js' está
no diretório 'NODEJS', logo, a propriedade irá buscar a partir desse
nível para baixo (para dentro). Configurando da mesma forma que está
abaixo, seu novo caminho de views está pronto para ser executado.*/
app.set('views', './app/views');
module.exports = app;