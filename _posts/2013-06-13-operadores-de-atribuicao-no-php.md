---
id: 844
title: Operadores de Atribuição no PHP
date: 2013-06-13T17:29:09+00:00
author: Sena
layout: post
guid: http://sounoob.com.br/?p=844
permalink: /operadores-de-atribuicao-no-php/
short-url:
  - http://bit.ly/1a8erqP
dsq_thread_id:
  - "2821047981"
categories:
  - Aulas
---
O operador de atribuição mais básico é o sinal de igual (**=**), basicamente ela transfere o valor que estiver na sua direita para a variável ou constante que estiver em sua esquerda. Basicamente temos uma variável ou constante, depois um sinal de igual e o valor que a variável ou constante deverá receber.<!--more--> Veja o exemplo abaixo:

{% highlight php linenos %}$variavel = "Valor que deverá ser atribuído para a variável";
  
const constante = "Valor que deverá ser atribuído para a constante";{% endhighlight %} 

Bom, se você estiver acompanhando nossa série de tutoriais e viu sobre <a title="Variáveis no PHP" href="./variaveis-php/" target="_blank">Variáveis</a> então já deve ter visto algo parecido com o que mostramos no exemplo acima.

Os outros operadores de atribuição vamos descobrir juntos, antes disso vamos relembrar os <a title="Operadores Aritméticos no PHP" href="./operadores-aritmeticos-no-php/" target="_blank">operadores aritméticos</a> onde conseguimos fazer o PHP realizar alguns cálculos. Agora imagine a necessidade de realizar um calculo básico com um valor que já está em uma variável e manter o resultado do calculo na mesma variável. A primeiro momento as pessoas fazem como no exemplo abaixo:

{% highlight php linenos %}$variavel = 4;
  
$variavel = $variavel + 10;{% endhighlight %} 

Criamos uma variável e incluímos o valor número 4 para ela, na linha abaixo pegamos o valor da variável (4) e adicionamos 10 e o resultado atribuímos para a mesma variável, o código irá funcionar normalmente, resultando em 14, mas&#8230; poderíamos fazer de uma outra forma mais simples. Veja no exemplo abaixo:

{% highlight php linenos %}$variavel = 4;
  
$variavel += 10;{% endhighlight %} 

O lógica utilizada foi a mesma, porem utilizamos menos código. Já que na segunda linha iremos usar a adição e depois atribuir o resultado para a mesma variável que já tínhamos, porque não usar os dois de uma única vez? Sim, isso é possível, descobrimos os outros operadores de atribuição, que é a ideia de fazer um calculo básico utilizando o valor de uma variável existente e incluir o resultado nesta mesma variável. Ou seja, podemos combinar os <a title="Operadores Aritméticos no PHP" href="./operadores-aritmeticos-no-php/" target="_blank">operadores aritméticos</a> sempre que quisermos realizar cálculos simples como uma adição, subtração, multiplicação e até achar o resto entre dois números onde um deles já está em uma variável. Vamos tentar utilizar todos novos operadores?

{% highlight php linenos %}$variavel = 4; //Valor da variável é 4
  
$variavel += 10; //Valor da variável é 14
  
$variavel -= 3; //Valor da variável é 11
  
$variavel *= 10; //Valor da variável é 110
  
$variavel /= 2; //Valor da variável é 55
  
$variavel %= 10; //Valor da variável é 5{% endhighlight %} 

Esses são todos? Resposta: Não. Tem um o qual sem dúvida é o mais utilizado entre os programadores, que é a concatenação com atribuição. (Falamos sobre concatenação no post sobre <a title="Variáveis no PHP" href="./variaveis-php/" target="_blank">variáveis</a>), o legal de usar essa combinação é que podemos no ir incrementando pedaços do texto no decorrer que nosso código é executado. Veja o exemplo abaixo.

{% highlight php linenos %}$variavel = "sounoob.com.br";
  
$variavel .= " é um site de tutoriais e aulas";
  
$variavel .= " para quem quer uma ajuda";
  
$variavel .= " na hora de programar";
  
$variavel .= ", e isso é um exemplo";
  
$variavel .= " de como concatenar e atribuir";
  
$variavel .= " o resultado tudo na mesma";
  
$variavel .= " variável";
  
$variavel .= ". Afinal, variável varia.";

echo $variavel;{% endhighlight %} 

No código acima utilizamos uma única variável e adicionamos vários pedaços de textos, e ao final mandamos esse texto ser mostrado na tela. Note que o texto é mostrado por completo.

Até a próxima&#8230;

Veja outros posts como este aqui:
  
[PHP para noobs](./php-para-noobs/ "PHP para Noobs")