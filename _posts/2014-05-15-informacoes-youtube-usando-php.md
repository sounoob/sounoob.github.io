---
title: Informações do YouTube - Como capturar usando PHP
date: 2014-05-15 18:59:07 Z
permalink: "/informacoes-youtube-usando-php/"
categories:
- Tutoriais
tags:
- Google
- Youtube
redirect_from: "/2014/05/15/informacoes-youtube-usando-php/"
id: 1059
author: Sena
layout: post
guid: http://sounoob.com.br/?p=1059
dsq_thread_id:
- '2819423969'
image: "/assets/uploads/2014/05/younoob.jpg"
---

Hoje em dia temos um sério problema com limite de tráfego de servidores, o que acaba forçando os programadores utilizarem serviços de terceiros para inserir nos sites conteúdo de vídeos. Uma das opções é o serviço do Google: O <span style="color: #000000;">YouTube</span>. O problema que surgia logo após a migração de vídeos para o <span style="color: #000000;">YouTube</span>, é que todas informações cadastradas no <span style="color: #000000;">YouTube </span>eram um pouco difíceis de ser recuperar. Em um dilema como este, resolvi criar uma classe (Um script) que faça todo trabalho pesado para recuperar as Informações do <span style="color: #000000;">YouTube</span>. Vou mostrar para vocês como funciona<!--more-->:

Neste tutorial estarei utilizando uma classe chama youtubeDetails, que disponibilizei no github (caso achem bugs ou queira melhorar, fiquem a vontade). Esta classe consegue atualmente recuperar:

  * Imagens.
  * URL para embed.
  * Data da publicação.
  * Data da ultima atualização.
  * Título.
  * Descrição.
  * Autor.

Existem dois métodos públicos para consulta rápida e com maior performasse, que é o **getImages()** para recuperar as imagens e o **getEmbed()** para recuperar a URL de embed.
  
Existe outro método mais completo chamdo **getInfor()** que este conecta no feed do Google e busca todas as outras informações, alem de chamar os métodos de imagem e de embed. (Evite usar esse método se você quiser apenas buscar a imagem ou pegar a URL de embed.

Para a classe funcionar, é necessário informar uma URL (válida) do vídeo do <span style="color: #000000;">YouTube</span>, essa URL pode ser informada no construtor, ou em qualquer método publico da classe.

Uma coisa importante de saber: Todas as informações do <span style="color: #000000;">YouTube </span>são retornadas como array.

## Usando a classe para receber as informações do YouTube

Primeiro passo, baixe a classe no github <a title="youtubeDetails" href="https://github.com/Sena/youtubeDetails" target="_blank" rel="external nofollow">https://github.com/Sena/youtubeDetails</a>

Incluiremos a classe em nosso código usando a função **require** do PHP

{% highlight php linenos %}require 'class/youtubeDetails.php'{% endhighlight %} 

Criando uma instancia do objeto youtubeDetails() informando a URL do nosso vídeo e guardando a instancia em uma variável

{% highlight php linenos %}$youtubeDetails = new youtubeDetails('https://www.youtube.com/watch?v=0rFE8FZNZ3o');{% endhighlight %} 

Recuperando apenas as imagens e guardando em uma variável.

{% highlight php linenos %}$imagens = $youtubeDetails->getImages();

//Imagem grande
echo $imagens['big'];
echo '<br>';

//Imagem pequena
echo $imagens['small'];{% endhighlight %} 

Recuperando apenas a URL para embed e guardando em uma variável.

{% highlight php linenos %}$embed = $youtubeDetails->getEmbed();

//Link para embed do vídeo
echo $embed;{% endhighlight %} 

Recuperando todas informações do youtube e guardando em uma variável (Ao chamar esse método, não é necessário chamar os outros, pelo fato deste trazer todas informações disponíveis na classe)

{% highlight php linenos %}$infor = $youtubeDetails->getInfor();

//Imagem grande
echo $infor['image']['big'];
echo '<br>';

//Imagem pequena
echo $infor['image']['small'];
echo '<br>';

//Link para embed
echo $infor['embed'];
echo '<br>';

//Data da publicação
echo $infor['published'];
echo '<br>';

//Última atualização
echo $infor['updated'];
echo '<br>';

//Título
echo $infor['title'];
echo '<br>';

//Descrição
echo $infor['description'];
echo '<br>';

//Autor
echo $infor['author'];{% endhighlight %} 

 

Este post, foi inicialmente inspirado no <a title="Obter miniaturas de imagem de um vídeo do YouTube usando PHP" href="/obter-a-miniaturas-de-imagem-de-um-video-do-youtube-usando-php/" target="_blank">Obter miniaturas de imagem de um vídeo do YouTube usando PHP</a>