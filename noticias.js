console.log('Criando um site de notícias com NodeJS')
/*console.log() - usado para imprimir uma mensagem no shell utilizado.
Para rodar o arquivo de extensão .js, é necessário utilziar o comando
'node nome_do_arquivo', para que o mesmo seja executado.*/

/*Mas como podemos 'escutar' requisições HTTP e fornecer informações
para alguém que faz uma request via browser?

Basicamente, precisamos começar importando a biblioteca do NodeJS
chamada de 'HTTP'. A partir deste biblioteca, nós podemos criar um 
servidor e com isso, passar a escutar requisições feitas em uma
porta específica. Então quando algum browser disparar uma requisição
para a nossa máquina naquela porta, nós seremos capazes de recuperar
essa requisição e fornecer uma resposta.*/

//------------------------------------------------------//

/*require() - Função JavaScript que permite incorporar outros 
arquivos ao nosso arquivo atual. Somos capazes de incorporar um 
módulo, uma biblioteca, outras páginas, etc. Em resumo, usamos 
para acrescentar alguma coisa ao nosso script. No caso, estamos 
incorporando a biblioteca HTTP.*/
var http = require('http');

/*createServer() - Vindo da biblioteca HTTP. Método utilizado para
subir um servidor. Quando se trabalha com NodeJS, muitas vezes
passamos funções como argumentos dos métodos, neste caso, não será
diferente.
Variável REQ = recebe a requisição
Variável RES = envia a resposta
Método .END() = é a resposta enviada ao servidor
Porém, isso ainda não é o suficiente, temos de adicionar qual a
porta que nosso servidor irá responder.
Isso pode ser feito de duas formas: adicionando o médoto
.LISTEN(PORTA) ao final da nossa função, ou como utilizamos abaixo,
atribuindo o servidor a uma variável e utilizando o .LISTEN()
separado*/
var server = http.createServer(function(req, res){
    res.end("<html><body>Portal de notícias</body></html>")
});

/*listen() = Utilizado para definir qual a porta padrão nosso 
servidor irá responder. Dessa forma, basta rodar o comando
node nome_arquivo no shell de comando e enviar uma request ao
endereço LOCALHOST:3000, irá receber a resposta contida na variável
server (res.end(resposta)).*/
server.listen(3000);