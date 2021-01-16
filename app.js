var app = require('./config/server');

/*Agora vamos incluir todos os módulos de rotas dentro da nossa 
aplicação.
Primeiro, vamos o REQUIRE() padrão para trazer para dentro do nosso
arquivo, o módulo HOME. Lembrando que quando executamos um REQUIRE()
onde o retorno é uma função, não precisamos executá-lo de imedaito,
podemos fazer a sua execução em outro momento... Desta forma,
conseguimos passar para ele um parâmetro, que é a nossa intenção nesse
momento Abaixo temos os dois exemplos, a execção feita junto com a 
chamada do módulo e a execução feita posteriormente.*/
var rotaHome = require('./app/routes/home')(app);
//rotaHome(app); execução posterior da função

/*Repetimos o processo para as outras rotas.*/
var rotaNoticias = require('./app/routes/noticias')(app);
//rotaNoticias(app); execução posterior da função

var rotaFormInclusaoNoticia = require('./app/routes/form_inclusao_noticia')(app);
//rotaFormInclusaoNoticia(app); execução posterior da função

app.listen(3000, function(){
    console.log('Servidor ON');
});

/*Para instalarmos o banco de dados, iremos utilizar o NPM, já que 
o MySQL, que utilizaremos, é também importado como um módulo. Para isso
vamos digitar o comando 'npm install mysql@2.13.0 --save', para instalar
a versão compatível com essa aplicação.*/