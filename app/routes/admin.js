/*Aqui iremos configurar a rota a ser exportada; transformar nosso
arquivo em módulo e também explicar porque o devolveremos como uma
função.

Por que devemos encapsular nossa configuração em uma função? Simples.
Porque queremos que os nossos comandos de configuração sejam executados.
Se nós simplesmente retornarmos uma variável sem estar em uma função,
ela não irá executar os comandos de configuração que desejamos.
Outro ponto importante, dentro do nosso módulo de exportação, estamos
utilizando a variável 'app', que nos nosso arquivo 'app.js' é a 
inclusão do módulo 'server.js', que por sua vez é a implementação do 
EXPRESS. Então para que essa informação de 'app' seja possível de ser 
usada dentro do escopo de nossa função, precisamos passa-lá como
parâmetro. Nós precisamos receber essa informação para atuar sobre ela.
Isso significa que no arquivo 'app.js' de alguma forma, na hora de chamar
o nosso módulo, nós vamos precisar passar este parâmetro para ele.*/

module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req,res){
        res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar', function(req,res){
        res.send('Chegou na página');
    });
};