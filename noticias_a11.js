var http = require('http');

/*Como visto no arquivo noticias_a8, nosso servidor não é capaz de
entender o que está vindo das URLS, de tal modo que, quando utilizamos
outro endereço (localhost:3000/exemplo), é retornado a mesma response.
Veremos agora como podemos mapear as URLS e responder de acordo com
cada solicitação.
Variável CATEGORIA = captura a URL solicitada e a utilizamos para 
checar qual response será enviado, da forma correta.*/
var server = http.createServer(function(req, res){
    var categoria = req.url;

    if (categoria == '/tecnologia'){
        res.end("<html><body>Notícias de tecnologia</body></html>");
    } else if (categoria == '/moda'){
        res.end("<html><body>Notícias de moda</body></html>");
    } else if (categoria == '/beleza'){
        res.end("<html><body>Notícias de beleza</body></html>");
    } else {
        res.end("<html><body>Portal de Notícias</body></html>");
    }
});
server.listen(3000);

/*Da forma que montamos acima, conseguimos mapear manualmente, quais as
URLS existentes e responder de acordo com a solicitação. Embora essa não
seja a melhor maneira de faze-lo, também é possível dessa forma.

Também é importante lembrar que é necessário derrubar o servidor e
executa-lo novamente. Embora o JavaScript seja uma linguagem interpretada,
quando nós ativamos uma instância do NodeJS, ele recupera todos os arquivos
naquele estado e cria um processo dentro do NodeJS. Então toda alteração
que é feita, após o servidor estar funcionando, é necessário que seja
reiniciado o servidor. No nosso caso, não estamos trabalhando com threads
e sim com forks, ou seja, um processo dentro do próprio NodeJS, por isso
é necessário sua reinicialização.*/