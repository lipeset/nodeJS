var express = require('express');
/*Importação do nosso moódulo com um simples REQUIRE(). Utilizamos o
./ para indicar que nosso módulo, está no mesmo nível da nossa aplicação
principal. Dessa forma, uma outra pessoa que for utilizar o seu código,
não perde tempo procurando a origem do módulo.*/

/*Note que após importar um módulo que retorna uma função, do mesmo jeito
que fizemos ao importar o EXPRESS e executamos a função dele na variável
'app', temos que executar a função do módulo. No console.log abaixo
iremos mostrar a execução.*/
var msg = require('./mod_test');

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
    //console.log(msg); 
    //esse formato é feito caso o módulo não retornasse uma função
    console.log(msg()); 
    //esse modo estamos importando a variável que recebeu o módulo e
    //executamos a sua função.
});