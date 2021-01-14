/*O que são módulos e o que é CommonJS?

Nessa aula, iremos entender um pouco mais de como funciona um módulo
e como eles podem ser implementados e construídos.

Os módulos nos permitem organizar melhor o nosso código, de tal modo
a isolar uma determinada lógica e permitir que esse bloco isolado
possa ser usado de forma recorrente dentro da nossa aplicação ou até
mesmo em outros projetos.

Nós podemos desenvolver um módulo e disponibilizá-lo na internet
para que outras pessoas façam uso dele. Esse recurso, se assemelha
muito as CLASSES, que estão acostumados a utilizar em linguagem de
programação orientada a objetos.

Os principais objetivos da modularização dos códigos em JavaScript
são: a redução de complexidade; a separação de código, uma vez que
cada módulo atende a uma necessidade específica; manutenção menos
complicada, já que dentro do módulo, a nossa necessidade é resolver
o problema do módulo e não da aplicação como um todo.

O EXPRESS e o EJS que estamos utilizando, são exemplos de módulos. E
se você se lembrar bem, para incluir um módulo no nosso script, nós
utilizamos a função REQUIRE(). Então com relação a inclusão de
módulos dentro da aplicação, nós já estamos mais ou menos habituados.

Já o COMMONJS, é um formato que define a construção desses módulos.
É basicamente uma forma de escrita que permite que nosso módulo seja
incorporado ao NodeJS de uma forma mais natural. Então nós temos que
respeitar algumas coisas para que um simples REQUIRE(), faça com que
o módulo seja incluído na nossa aplicação.*/