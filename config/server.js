/*Agora vamos começar a modularizar as coisas no nosso projeto.
Aqui, neste arquivo, iremos manter a configuração do nosso servidor. 
Até aqui não tem nenhum segredo, tudo muito simples, apenas tiramos
as configurações padrões do nosso servidor do arquivo principal e
passamos para um módulo separado.

E como fazemos para retornar esse arquivo todo como um módulo para a
nossa aplicação? É muito simples! De toda a lógica abaixo, o que vamos
utilizar é o objeto que ele criar com a execução da função EXPRESS(),
ou seja, a variável 'app'. Então, usaremos o MODULE.EXPORTS para
entregar o objeto ao solicitante.*/

/*Como nós movimentamos o diretório 'views' para dentro do diretório
'app', precisamos configurar o EXPRESS para que ele procure as views
no local correto. É importante tomarmos muito cuidado em fazer essa
configuração, pois a propriedade setada abaixo, irá pesquisar A PARTIR
de onde o módulo está sendo utilizado, ou seja, o arquivo 'app.js' está
no diretório 'NODEJS', logo, a propriedade irá buscar a partir desse
nível para baixo (para dentro). Configurando da mesma forma que está
abaixo, seu novo caminho de views está pronto para ser executado.

Agora iremos instânciar o módulo CONSIGN para que possamos agilizar
nosso processo de mapeamento de rotas. Depois de realizar o REQUIRE()
do CONSIGN, precismos apontar para ele o diretório ROUTES. Feito isso,
precismos jogar isso para dentro da nossa instância do EXPRESS, de
modo que seja passado como uma referência para nosso servidor, logo,
isso deve ser feito após a execução do módulo do EXPRESS. Com a função
INCLUDE(), eu posso informar qual é o diretório que eu quero incluir 
internamente na nossa aplicação para que automaticamente ele dê todos
os REQUIRES daqueles módulos dentro da nossa aplicação e depois
disponibilize isso de uma forma mais fácil, semelhante a namespaces.
Após isso, utilizamos a função INTO() para que possamos passar a 
instância do CONSIGN() como parâmetro para dentro do nosso servidor.
Ou seja, o CONSIGN() reconhece todos os arquivos da pasta ROUTES, faz
um scan, recolhe todos os módulos e inclui dentro do nosso servidor.
Dessa forma, podemos excluir as declarações de rotas manuais que criamos
no arquivo 'app.js', deixando esse trabalho agora por conta do CONSIGN.*/

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;