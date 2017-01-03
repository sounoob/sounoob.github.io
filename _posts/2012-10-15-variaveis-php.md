---
title: Variáveis no PHP
date: 2012-10-15 08:48:37 -03:00
permalink: "/variaveis-php/"
categories:
- Aulas
redirect_from: "/2012/10/15/variaveis-php/"
id: 547
author: Sena
layout: post
guid: http://sounoob.com.br/?p=547
short-url:
- http://bit.ly/Ycc9NN
dsq_thread_id:
- '2821890729'
---

Um resumo rápido e objetivo é que uma variável é um espaço onde guardamos alguma informação para ser usada posteriormente, e essa informação poderá ser alterada a qualquer momento (Dai o nome de variável).<!--more-->

No PHP para definirmos uma variável basta informar o símbolo do dólar (**$**) e depois o nome da variável, depois colocamos o sinal de igual (Vamos falar que a variável é igual a alguma coisa) e escrevemos a informação que estará na variável entre aspas. Veja abaixo um exemplo de variável:

{% highlight php linenos %}$variavel = "Olá, Eu sou Goku";{% endhighlight %} 

No PHP temos algumas regrinhas quanto as variáveis, veja abaixo algumas delas:

  * Toda variável precisa iniciar com o dólar ($) seguido do nome da variável;{% highlight php linenos %}variavel = "Olá, Eu sou Goku"; //Errado
  
    $variavel = "Olá, Eu sou Goku"; //Correto{% endhighlight %} 
  * Somente utilizar letras, números e/ou sublinhados;{% highlight php linenos %}$v%riavel_14 = "Olá, Eu sou Goku"; //Errado
  
    $variavel_14 = "Olá, Eu sou Goku"; //Correto{% endhighlight %} 
  * Somente comece uma variável usando letras ou sublinhados;{% highlight php linenos %}$1_variavel = "Olá, Eu sou Goku"; //Errado
  
    $\_1\_variavel = "Olá, Eu sou Goku"; //Correto{% endhighlight %} 
  * Nunca coloque espaços no nome da variável;{% highlight php linenos %}$variavel 14 = "Olá, Eu sou Goku"; //Errado
  
    $variavel_14 = "Olá, Eu sou Goku"; //Correto{% endhighlight %} 
  * As variável são case sensitive, ou seja, **$variavel** será diferente **$Variavel**
  * Não use o **$this**, o PHP reservou essa variável para alguns casos específicos. Mas… como falado anteriormente
  * Até poderá usar acentuação para definir uma variável, isso irá funcionar<del style="color: #f00;" datetime="2013-06-12T21:39:10+00:00">, é a coisa mais nojenta de ser ver, mas… funciona</del> porem evite ao máximo fazer isso. Primeiro que é feio, segundo que poderá ocorrer erros dependendo do formato que você for salvar o arquivo.

Para não mostrar o conteúdo da variável na tela usaremos o echo seguido da variável como mostrado no exemplo abaixo:

{% highlight php linenos %}$variavel = "Olá, Eu sou Goku";
  
echo $variavel;{% endhighlight %} 

<a name="concatenacao"></a>
  
É possível juntar duas variáveis em uma só usando o ponto final (.) entre as duas variáveis, esse conceito se chama concatenar, e você pode concatenar quase qualquer coisa, veja abaixo um exemplo de concatenação de duas variáveis e um texto livre

{% highlight php linenos %}$saudacao = "Olá";
  
$nome = "Goku";
  
echo $saudacao . ", Eu sou " . $nome;{% endhighlight %} 

No exemplo acima o resultado seria: <span style="color: #808080;">Olá, Eu sou Goku</span>

Você ainda pode concatenar várias coisas e ao final colocar tudo em uma única variável antes de finalmente usá-la

{% highlight php linenos %}$saudacao = "Olá";
  
$nome = "Goku";
  
$variavel = $saudacao . ", Eu sou " . $nome;
  
echo $variavel;{% endhighlight %} 

Lembre-se, um nome de variável não pode conter espaços, logo, se você precisar escrever um nome composto deixe tudo junto,  e para ficar mais legível utilize as primeiras letras das palavras em maiusculo e o resto em minusculo, assim como no exemplo

{% highlight php linenos %}$minhaVariavelComNomeComposto = "Olá, Eu sou Goky";{% endhighlight %} 

Até a próxima…

Veja outros posts como este aqui:
  
[PHP para noobs](/php-para-noobs/ "PHP para Noobs")