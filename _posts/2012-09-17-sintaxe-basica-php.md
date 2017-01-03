---
title: Sintaxe basica do PHP
date: 2012-09-17 16:36:25 Z
permalink: "/sintaxe-basica-php/"
categories:
- Aulas
redirect_from: "/2012/09/17/sintaxe-basica-php/"
id: 498
author: Sena
layout: post
guid: http://sounoob.com.br/?p=498
short-url:
- http://bit.ly/12GPjkw
dsq_thread_id:
- '2821890725'
---

Talvez você esteja se perguntando o que é sintaxe, bom pense como uma regra para escrever algo certo. Para entender melhor, imagine você falando o português, tem algumas regras para falar certo não é? Primeiro vem o sujeito, depois o verbo e só então o predicativo do Sujeito e bla bla bla… Pos é para "falar" com o computador é necessário de algumas regrinhas também para que o sistema possa fazer exatamente o que você quer.<!--more-->

O primeiro passo é deixar claro que você vai começar a escrever um código em PHP e quando acabou o código,<span style="color: #ff0000;"><del>(o sistema não é tão inteligente a ponto de adivinhar  o que você vai fazer),</del></span> para delimitar usaremos **<?php** para iniciar e **?>** quando terminar. Tenha em mente que o que estiver fora desse delimitador não ser interpretado pelo servidor, e provavelmente irá apenas ser mostrado na tela.

No PHP ao final de cada instrução que damos ao servidor devemos incluir um ponto e virgula (**;**) para informar que terminamos a instrução em questão, para fixar bem isso, imagine alguém pedindo um favor a você e ele fala tudo rápido sem nenhuma pausa tudo meio embolado, fica difícil entender o que a pessoa quer né?  Então, o servidor é a mesma coisa, você deve enviar todas instruções separando cada coisa usando o ponto e virgula, caso você não informe, provavelmente o servidor irá retornar erros.

Como o PHP é uma linguagem que apenas o servidor irá ler e mais ninguém conseguirá ver sempre que quisermos via PHP mostrar alguma coisa na tela, devemos colocar na frente a palavra **echo**, tudo o que incluirmos após o echo irá ser mostrado na tela. Um detalhe muito importante é que nosso texto deverá estar dentro de aspas.

Abra um <a title="Escolhendo um editor PHP" href="/escolhendo-um-editor-php/" target="_blank">editor PHP</a> de sua preferência e vamos colocar essa teoria em pratica, escreva o código abaixo, salve como **sintaxe.php** e mante rodar no seu servidor.

{% highlight php linenos %}<?php echo "Olá. Eu sou Goku"; ?>{% endhighlight %} 

Veja o exemplo acima o que acabamos de aprender. Na primeira linha falamos para o servidor que vamos trabalhar com PHP, na segunda linha informamos o que queremos mostrar na tela, e por ultimo indicaremos que não iremos mais escrever em PHP. Outro item importante é os comentários, eles servem para incluir alguma informação para quem for atualizar o seu código futuramente  ou até mesmo como lembrete para você mesmo, de algo relacionado ao código que está fazendo. Os comentários não serão interpretados pelo servidor, eles servirão apenas para você. Para comentar uma linha inteira utilize duas barras (//) ou cerquilha (#),  tudo o que estiver do lado direito desses dessa marcação não será considerada um comentário. Veja o exemplo abaixo;

{% highlight php linenos %}<?php
  
//Esse é um comentário
  
echo "Olá. Eu sou Goku"; #Apartir desse ponto tudo da linha será um comentário,
  
?>{% endhighlight %} 

Veja outros posts como este aqui:
  
[PHP para noobs](/php-para-noobs/ "PHP para Noobs")