/*Agora vamos importar o módulo que contém as configurações do nosso
servidor. Como o configuramos para exportar um módulo, podemos
importa-lo da mesma forma que importamos o EXPRESS.*/

var app = require('./config/server');

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
    console.log('Servidor ON');
});

/*Se tudo deu certo, você irá receber uma mensagem no prompt indicando
que o servidor está online e funcional. Dessa forma, tudo o que formos
fazer que diz respeito a configuração de servidor, poderemos modificar
apenas o módulo SERVER, sem termos que comppromoter outra parte da nossa
aplicação*/