---
id: 151
title: Escrevendo um arquivo de texto, usando PHP
date: 2011-09-14T15:07:44+00:00
author: Sena
layout: post
guid: http://sounoob.com.br/?p=151
permalink: /escrevendo-um-arquivo-de-texto-usando-php/
short-url:
  - http://bit.ly/VUY1xU
dsq_thread_id:
  - "4323878794"
dsq_needs_sync:
  - "1"
categories:
  - Tutoriais
tags:
  - Log
---
Em muitos códigos que eu desenvolvo, a maioria deles utiliza sistema de log, para poder ir mapeando pontos do sistema a ser analisado posteriormente, como por exemplo, alguma falha de conexão, tentativas de acesso a algum lugar restrito&#8230; Enfim são muitas possibilidades de uso de um arquivo de log.

Para isso iremos utilizar apenas três funções, que é o **fopen** para abrir o arquivo, **fwrite** para escrever no arquivo, e o **fclose** para fechar o arquivo.

<!--more-->

<a name="passo-a-passo"></a>O primeiro passo é definir em qual arquivo vamos escrever (ou qual será o nome a ser criado), no nosso exemplo vou especificar um nome bem sugestivo como &#8220;arquivo.txt&#8221;, e jogar dentro da variável $file.

{% highlight php linenos %}$name = 'arquivo.txt';{% endhighlight %} 

Outro dado muito importante, além de saber o nome do arquivo é saber o que vai escrever dentro dele, no nosso exemplo iremos inserir o texto &#8220;Olá. Eu sou Goku&#8221;, então inserir na variável **$text**.

{% highlight php linenos %}$text = 'Olá. Eu sou Goku';{% endhighlight %} 

Como seu sistema já sabe o nome do arquivo, usar a função **fopen** informar o arquivo a ser aberto, e o modo que ele será aberto.

{% highlight php linenos %}$file = fopen($name, 'a');{% endhighlight %} 

Note que na função **fopen** além do nome do arquivo eu informei a letra &#8220;a&#8221;, como um parâmetro adicional, para que serve? Com esse parâmetro estou informando ao sistema a forma que ele irá abrir nosso arquivo, que nesse caso, ele deverá abrir e prepara-lo para escrita e o ponto de onde irei escrever será no final do ultimo texto que estiver no arquivo, e caso o arquivo não exista o sistema deverá cria-lo. Consulte outras opções na documentação do PHP <http://php.net/manual/pt_BR/function.fopen.php>

Uma informação muito importante&#8230; Se o arquivo não existir no seu servidor, e a pasta onde ele será escrito não tiver permissão de escrita, poderá resultar no erro &#8220;Failed to open stream: Permission denied in&#8230;&#8221;, para resolver isso, crie o arquivo manualmente, e dê permissão de escrita, ou dê a permissão de escrita para a pasta onde ele estará.

Uma vez o arquivo aberto é hora de escrever alguma coisa nele, usaremos a função **fwrite**, informar o arquivo a ser aberto e o que colocar dentro dele.

{% highlight php linenos %}fwrite($file, $text);{% endhighlight %} 

Missão cumprida, agora como boa pratica tudo que você usa você guarda, então já que abrimos o arquivo, vamos fechar&#8230; Isso irá evitar que o arquivo possa se corromper.
  
Nesse caso usaremos a função **fclose** informando o arquivo a ser fechado.

{% highlight php linenos %}fclose($file);{% endhighlight %} 

Segue código completo&#8230;

{% highlight php linenos %}<?php
$name = 'arquivo.txt';
$text = 'Olá. Eu sou Goku';
$file = fopen($name, 'a');
fwrite($file, $text);
fclose($file);{% endhighlight %} 

<a name="recebendo-post"></a>Um exemplo de uso nisso é gravar log do que o PagSeguro retorna no retorno automático de dados e <a title="Recebendo notificações do PagSeguro usando PHP – Sem utilizar a biblioteca oficial" href="./recebendo-notificacoes-do-pagseguro-usando-php-sem-utilizar-a-biblioteca-oficial/" target="_blank">API de notificações</a>, veja abaixo como você iria capturar os posts.

{% highlight php linenos %}<?php
$name = 'arquivo.txt';
$text = var_export($_POST, true);
$file = fopen($name, 'a');
fwrite($file, $text);
fclose($file);{% endhighlight %} 