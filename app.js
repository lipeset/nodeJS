var app = require('./config/server');

/*Agora vamos incluir todos os módulos de rotas dentro da nossa 
aplicação.
Primeiro, vamos o REQUIRE() padrão para trazer para dentro do nosso
arquivo, o módulo HOME. Lembrando que quando executamos um REQUIRE()
onde o retorno é uma função, não precisamos executá-lo de imedaito,
podemos fazer a sua execução em outro momento... Desta forma,
conseguimos passar para ele um parâmetro, que é a nossa intenção nesse
momento.*/
var rotaHome = require('./app/routes/home');
rotaHome(app);