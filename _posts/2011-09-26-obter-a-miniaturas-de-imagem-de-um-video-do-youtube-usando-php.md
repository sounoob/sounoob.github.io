---
id: 194
title: Obter miniaturas de imagem de um vídeo do YouTube usando PHP
date: 2011-09-26T15:20:00+00:00
author: Sena
layout: post
guid: http://sounoob.com.br/?p=194
permalink: /obter-a-miniaturas-de-imagem-de-um-video-do-youtube-usando-php/
short-url:
  - http://bit.ly/Vjgn9y
dsq_thread_id:
  - "2818804590"
categories:
  - Tutoriais
tags:
  - Youtube
---
O Google padroniza suas URLs e com isso é possível gerar muita coisa dinâmica, e uma delas é as miniaturas de imagem de um vídeo do YouTube.

Para criar o código que gera a URL das imagens é preciso descobrir qual é o link padrão das imagens<!--more-->


  
, com uma pesquisada rápida no código fonte do site do YouTube pude notar que existem 4 possibilidades de servidores para as miniaturas:

_http://i1.ytimg.com/vi/R4NLeQLlScE/default.jpg_
  
_http://i2.ytimg.com/vi/R4NLeQLlScE/default.jpg_
  
_http://i3.ytimg.com/vi/R4NLeQLlScE/default.jpg_
  
_http://i4.ytimg.com/vi/R4NLeQLlScE/default.jpg_

Para cada servidor temos 4 possibilidades de imagens diferentes
  
http://i1.ytimg.com/vi/R4NLeQLlScE/default.jpg
  
http://i1.ytimg.com/vi/R4NLeQLlScE/0.jpg
  
http://i1.ytimg.com/vi/R4NLeQLlScE/1.jpg
  
http://i1.ytimg.com/vi/R4NLeQLlScE/2.jpg
  
http://i1.ytimg.com/vi/R4NLeQLlScE/3.jpg

Como podem notar, temos 4 servidores diferentes com 5 links para imagens, onde são quatro imagens diferentes, e uma é a escolhida como padrão pelo autor do video.

Traduzindo, de variavel temos o servidor, o qual irá alterar o numero do subdomínio: i1, i2, i3, i4, e a imagen que podem ser 0.jpg 1.jpg, 2.jpg, 3.jpg e default.jpg para a imagem padrão, a ultima variavel é o codigo do vídeo que está entre entre _**vi/**_ e a imagem.

Para as imagens um pouco maiores encontrei apenas um servidor com as 5 opções de imagens: _http://img.youtube.com/vi/R4NLeQLlScE_/0.jpg

Onde o parâmetro depois da barra segue o padrão citado para as imagens menores.

Basta achar o código do vídeo, que é o que está depois de _**v=**_ que no nosso caso é o R4NLeQLlScE, apenas cuidado ao pegar esse codigo porque ele irá finalizar com o simbolo _**&**_, veja na nossa URL onde o código ficaria:

_http://www.youtube.com/watch?v=<span style="color: #008000;"><strong>R4NLeQLlScE</strong></span>&list=UUMykmfJDKL1EVNgl4sdRNbQ&index=46_

Agora o próximo passo seria inserir o código do vídeo na URL padrão de miniatura de vídeos como mostrado abaixo.

_http://i1.ytimg.com/vi/<span style="color: #008000;"><strong>R4NLeQLlScE</strong></span>/default.jpg_

Bom, essa é teoria, vamos na pratica?<a name="passo-a-passo"></a>

Suponho que esse código será usado para gerar varias miniaturas então o ideal é criar uma função para representar todo o codigo, afim de não ficar repetindo coisa desnecessária. Nossa função terá um nome bem sugestivo **youtubeImage**, algo importante que nossa função irá precisar é a URL do vídeo, então iremos adicionar o parâmetro **$url** na função **youtubeImage**, como temos duas opções de imagem uma grande e outra pequena, seria interessante adicionar o parâmetro **$size** para definir qual será o tamanho da imagem gerada, claro que esse pode ser um parametro opcional, e que por padrão ele irá vim pequena (valor será small)

{% highlight php linenos %}function youtubeImage($url, $size = &#8216;small&#8217;){
      
//todo o código irá ficar aqui
  
}{% endhighlight %} 

Vamos pegar o código do do vídeo, existem várias maneiras de obter o código do vídeo, a que vamos usar aqui é a forma mais bruta, que é quebrando a URL até sobrar somente o código. Primeiro vamos quebrar a URL onde tiver o parâmetro **_v=_** afinal é ai que estará o nosso vídeo

{% highlight php linenos %}$url = explode(&#8216;v=&#8217;,$url);{% endhighlight %} 

Para a URL que estava igual a:

{% highlight php linenos %}http://www.youtube.com/watch?v=R4NLeQLlScE&list=UUMykmfJDKL1EVNgl4sdRNbQ&index=46{% endhighlight %} 

Irá ser gerado um array onde em **$url[0]** será:

{% highlight php linenos %}http://www.youtube.com/watch?{% endhighlight %} 

E dentro de **$url[1]** terá:

{% highlight php linenos %}R4NLeQLlScE&list=UUMykmfJDKL1EVNgl4sdRNbQ&index=46{% endhighlight %} 

O que nos importa é a segunda opção, porem como podem notar lá não tem outros dados além do que o código que precisamos, vamos quebrar esse texto onde termina o código.

{% highlight php linenos %}$url = explode(&#8216;&&#8217;,$url[1]);{% endhighlight %} 

Pronto agora a função **explode** transformou aquele texto em vários pedacinhos, o código do vídeo deverá estar dentro do primeiro índice, portanto será **$url[0]**;

De posse do código é a hora de verificar qual foi o tamanho que devemos gerar a imagem e montar a URL da mesma

{% highlight php linenos %}$url = $size == &#8216;small&#8217; ? (&#8216;http://i1.ytimg.com/vi/&#8217; . $url[0] . &#8216;/default.jpg&#8217;) : (&#8216;http://img.youtube.com/vi/&#8217; . $url[0] . &#8216;/0.jpg&#8217;);{% endhighlight %} 

Outro passo não menos importante é a imagem

Como esse código estará dentro de uma função, devemos retornar a URL da imagem como mostrado abaixo:

{% highlight php linenos %}return $url;{% endhighlight %} 

Quando quiser carregar uma miniatura de imagem do vídeo do youtube basta chamar a função e inserir a URL do vídeo igual ao exemplo abaixo:

{% highlight php linenos %}youtubeImage(&#8216;http://www.youtube.com/watch?v=R4NLeQLlScE&list=UUMykmfJDKL1EVNgl4sdRNbQ&index=46&#8217;);{% endhighlight %} 

Claro que isso irá gerar apenas a URL da imagem, e você precisa montar o código HTML que irá mostrar a imagem no seu site como abaixo:

{% highlight php linenos %}<img src="<?php echo youtubeImage(&#8216;http://www.youtube.com/watch?v=R4NLeQLlScE&list=UUMykmfJDKL1EVNgl4sdRNbQ&index=46&#8217;);?>;" alt="" />{% endhighlight %} 

Um exemplo com a mesma imagem só que agora gerando ela de tamanho um pouco maior.

{% highlight php linenos %}<img src="<?php echo youtubeImage(&#8216;http://www.youtube.com/watch?v=R4NLeQLlScE&list=UUMykmfJDKL1EVNgl4sdRNbQ&index=46&#8217;, &#8216;big&#8217;);?>;" alt="" />;{% endhighlight %} 

Segue código completo, com exemplo:

{% highlight php linenos %}<!&#8211;?php <br ?&#8211;>function youtubeImage($url, $size = &#8216;small&#8217;){
      
$url = explode(&#8216;v=&#8217;,$url);
      
$url = explode(&#8216;&&#8217;,$url[1]);
      
$url = $size == &#8216;small&#8217; ? (&#8216;http://i1.ytimg.com/vi/&#8217; . $url[0] . &#8216;/default.jpg&#8217;) : (&#8216;http://img.youtube.com/vi/&#8217; . $url[0] . &#8216;/0.jpg&#8217;);
      
return $url; }
  
?>
  
<img src="<?php echo youtubeImage(&#8216;http://www.youtube.com/watch?v=R4NLeQLlScE&list=UUMykmfJDKL1EVNgl4sdRNbQ&index=46&#8217;);?>" alt="" />
  
<img src="<?php echo youtubeImage(&#8216;http://www.youtube.com/watch?v=R4NLeQLlScE&list=UUMykmfJDKL1EVNgl4sdRNbQ&index=46&#8217;, &#8216;big&#8217;);?>" alt="" />{% endhighlight %} 

Veja nosso post mostrando como recuperar não só as imagens, como também outras **[informações do YouTube](./informacoes-youtube-usando-php/ "Informações do YouTube – Como capturar usando PHP")**

Comentários, duvidas, sugestões e até mesmo criticas é só comentar