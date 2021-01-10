/*Aqui iremos aprender como implementamos o NPM e as outras ferramentas
na nossa aplicação. Também iremos refatorar o código montado na
aula 9 (noticias_a9), para se adaptar as novas bibliotecas inseridas

Inicialmente, checamos a versão do NPM digitando o comando "npm -v" no
prompt de comando.

Feito isso, iniciamos o NPM no nosso projeto. Para isso, nós iremos
digitar o comando "npm init". Ele é um passo a passo para que seja
configurado o nosso projeto, são eles:

name - nome do nosso projeto (nosso módulo)
version - versão do projeto, a sugerida pelo NPM
description - a descrição do projeto
entry point - ponto de entrada e lógica principal do módulo. Como estamos
              trabalhando com sistema web, isso não é tão importante. 
              Mas se nosso objetivo fosse disponibilizar um módulo
              para que outras pessoas pudessem incorporar em seus projetos,
              isso seria importante. Definir o entry point é definir o 
              ponto de entrada para que outras pessoas pudessem utilizar
              isso como se fosse uma biblioteca. Utilizar o arquivo
              principal.
test command - esse comando você irá utilizar para testar o seu código.
               Basta deixa-lo em branco.
git repository - link do repositório no github. Por ora, iremos deixar
                 em branco.
keywords - Palavra chave para encontrar o projeto. Também em branco.
author - o nome do autor do projeto.
license - deixar a sugerida <ISC>.

Feito isso, o NPM irá perguntar se está tudo e mostra como ficara o
nosso arquivo package.json. Caso esteja de acordo, basta digitar "yes".

Sendo assim, o NPM foi iniciado no nosso projeto, agora podemos instalar
as outras ferramentas.

---------------------------------------

Para instalarmos agora o EXPRESS, continuaremos no nosso diretório 
principal (onde instalamos o NPM) e digitamos o seguinte comando
"npm install express@4.15.3 -save". Repare que nós escolhemos a versão
a ser instalada, isso porque, no curso foi utilizada essa versão. Então
para evitar erro de compatibilidade, mantivemos a mesma versão. O comando
"-save" serve para que seja salvo a instalação do EXPRESS no nosso 
projeto, não sendo necessário uma nova instalação. Se tudo ocorreu da 
forma correta, agora temos uma pasta chamada "node_modules".*/

var http = require('http');

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
