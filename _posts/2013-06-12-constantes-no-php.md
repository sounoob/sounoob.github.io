---
title: Constantes no PHP
date: 2013-06-12 17:50:22 -03:00
permalink: "/constantes-no-php/"
categories:
- Aulas
redirect_from: "/2013/06/12/constantes-no-php/"
id: 793
author: Sena
layout: post
short-url:
- http://bit.ly/11IbKst
dsq_thread_id:
- '2822922993'
---

Em resumo uma constante é aquela "variável" que não muda. <del style="color: #f00;" datetime="2013-06-12T21:45:16+00:00">Sim isso foi estranho porém necessário</del>

Criar uma constante é um pouco diferente da forma que criamos uma variável<!--more-->, ela deve ser criada como mostrado no exemplo abaixo:

{% highlight php linenos %}define("NOME", "informação");{% endhighlight %} 

Simples né? Não? Bom, quando você for criar sua constante você faz igual, trocando apenas o **NOME** pelo nome que você quer dá para sua constante e **informação** você troca pela informação que quer colocar na sua constante.

Ainda difícil? Bom, o PHP facilita para você. Depois da versão 5.3 o PHP deixa você criar constantes de outra forma um pouco semelhante para ao jeito que é criado as variáveis. Basta escrever **const** depois o nome da constante o simbolo de igual e o valor da constante entre aspas. Veja o exemplo

{% highlight php linenos %}const NOME = "informação";{% endhighlight %} 

Sei criar, mas como eu uso?
  
Simples, só escrever o nome da constante… Veja no exemplo abaixo.

{% highlight php linenos %}define("FRASE", "sounoob.com.br");//Criamos uma constante
  
echo FRASE; //Mostramos a informação na tela{% endhighlight %} 

Em pró de uma boa convivência temos algumas regrinhas para as constantes, vou tentar listar as que eu sei abaixo:

  * Todo nome de uma constante deve ser iniciado utilizando letras ou sublinhados;{% highlight php linenos %}define("1SITE", "sounoob.com.br"); //Errado
  
    define("_1SITE", "sounoob.com.br"); //Correto{% endhighlight %} 
  * Nunca coloque espaços no nome da constante;{% highlight php linenos %}define("SITE SOUNOOB", "sounoob.com.br"); //Errado
  
    define("SITESOUNOOB", "sounoob.com.br"); //Correto{% endhighlight %} 
  * As variável são case sensitive, ou seja, **SITE** será diferente **Site**
  * Até poderá usar acentuação para definir o nome de uma constante, mas evite ao máximo fazer isso. Primeiro que é feio, segundo que poderá ocorrer erros dependendo do formato que você for salvar o arquivo.

Eu particularmente prefiro deixar todos nomes de constantes em maiúsculo, acho que o código fica mais "bonito", porem você pode escolher o jeito do nome que achar que fica melhor.

Algumas palavras foram reservadas pelo PHP, e não poderão ser utilizadas como nome de constantes, nem mesmo em maiúsculo. (Obviamente não precisa decorar tudo, se o nome da sua constante for um nome o qual defina a informação que ela tiver, então raramente você terá problemas com esses nomes reservados)

Vou tentar listar alguns nomes abaixo (Caso souber de algum que não está na lista, comente o post:

  * abstract
  * and
  * array
  * as
  * break
  * callable
  * case
  * catch
  * class
  * clone
  * const
  * continue
  * declare
  * default
  * die
  * do
  * echo
  * else
  * elseif
  * empty
  * enddeclare
  * endfor
  * endforeach
  * endif
  * endswitch
  * endwhile
  * eval
  * exit
  * extends
  * final
  * for
  * foreach
  * function
  * global
  * goto
  * if
  * implements
  * include
  * include_once
  * instanceof
  * insteadof
  * interface
  * isset
  * list
  * namespace
  * new
  * or
  * print
  * private
  * protected
  * public
  * require
  * require_once
  * return
  * static
  * switch
  * throw
  * trait
  * try
  * unset
  * use
  * var
  * while
  * xor

Veja outros posts como este aqui:
  
[PHP para noobs](/php-para-noobs/ "PHP para Noobs")