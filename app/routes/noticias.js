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
o nosso módulo, nós vamos precisar passar este parâmetro para ele.

Para incorporar o módulo do MySql e começarmos a utilizar os recursos
deste módulo, iremos incorporá-lo com o método conhecido REQUIRE().
Dessa forma, poderemos utilizar os seus recursos.

Adiante, precisaremos criar a conexão com o banco. Para tanto,
iremos passar alguns parâmetros para conseguirmos acessar o banco
de dados. Iremos utilizar uma função do nosso módulo MYSQL, que
se chama 'createConnection()'. Essa função recebe parâmetros no 
formato JSON (importantíssimo saber isso) ou seja, ela vai receber
um parâmetro no formato 'CHAVE : VALOR'. 

O primeiro parâmetro é o 'HOST'. Ele é o endereço de onde a aplicação 
está rodando. No caso, como o servidor está na própria máquina, é 
passado um 'localhost' mesmo. O segundo é o 'USER'. Corresponde
ao usuário que estará acessando. O terceiro, 'PASSWORD'. A senha do
usuário. E por fim, o quarto parâmetro, é o 'DATABASE'. Indica a qual
base de dados devemos nos conectar.

Podemos realizar consultas no nosso banco dados. Para isso, nós 
utilizaremos a nossa variável 'connection' e chamar a função
QUERY(). A função 'query()' espera duas coisas: o SQL e uma função
de callback. O SQL é a consulta em si, o código SQL padrão. E a
função de callback é o que será feito após a consulta ser realizada.

A função de callback espera dois parâmetros. O 'error' e o 'result'.
Internamente, a função query() vai disparar o callback e o primeiro
parâmetro vai ser o 'error'. Caso ocorra algum erro, conseguiremos
recuperá-lo graças a variável utilizada no parâmetro.

Para não só simplesmente cuspirmos o resultado da nossa consulta
como um JSON sem formatação na tela, podemos pedir ao EJS, que já
prevê esse comportamente, que construa a view juntamente com o 
retorno da consulta. Para isso, passamos o resultado da consulta
num formato JSON, ao pedirmos para a função render() construir
nossa view. Então damos um nome, um rótulo para isso e passamos
o parâmetro RESULT como o valor desse rótulo.

Dessa forma, o nosso JSON vai ser recebido pela view como uma 
VARIAVEL de nome NOTICIA. Ela irá se assemelhar a um array comum,
portanto, iremos trabalhar com ela dessa forma, acessando suas
propriedades lá dentro da view.*/

module.exports = function (app) {
    app.get('/noticias', function (req, res) {
        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'portal_noticia'
        });

        connection.query('select * from noticias', function (error, result) {
            res.render("noticias/noticias", {noticia : result});
        });
    });
};