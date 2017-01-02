---
title: Usando encurtador de URL do Google com PHP
date: 2011-12-22 09:01:00 Z
permalink: "/usando-encurtador-de-url-do-google-com-php/"
redirect_from: "/2011/12/22/usando-encurtador-de-url-do-google-com-php/"
categories:
- Tutoriais
tags:
- Encurtador
- Google
- Qr code
id: 294
author: Sena
layout: post
guid: http://sounoob.com.br/?p=294
short-url:
- http://bit.ly/X9K0cB
dsq_thread_id:
- '2821890666'
---

Muito útil na hora de tuitar ou enviar um link para alguém é encurtar a URL. Como todos sabem que é <span style="color: #ff0000;"><del style="color: #ff0000;">um saco</del></span> estressante ficar entrando no site do encurtador para fazer gerar o novo link. Então porque não gerar isso dinâmico para os visitantes do seu site ou blog <del style="color: #ff0000;">ou seja lá o que você  utiliza</del> .<!--more-->

Iremos especificar na variável **$url** o endereço do webservice do Google que irá receber os nossos dados e gerar a URL encurtada

{% highlight php linenos %}$url = 'https://www.googleapis.com/urlshortener/v1/url';{% endhighlight %} 

Todos os dados a serem enviados iremos jogar dentro de um array chamado **$data**. Nosso primeiro dado será a URL que iremos encurtar <span style="color: #ff0000;"><del style="color: #ff0000;">óbvio não?</del></span>

{% highlight php linenos %}$data['longUrl'] = 'http://sounoob.com.br/usando-encurtador-de-url-do-google-com-php';{% endhighlight %} 

Precisaremos da chave de segurança (API Key) para uso da API do Google, você poderá gerar em <http://code.google.com/apis/console/>. Sua chave deve ser algo como AIzaSyADeOnBiAo4iOWCjbdPDfXWTVzwwLrymie, agora é só jogar em nosso array.

{% highlight php linenos %}$data['key'] = 'AIzaSyADeOnBiAo4iOWCjbdPDfXWTVzwwLrymie';{% endhighlight %} 

Como a API estará esperando os dados em json então usaremos a função **json_encode** para converter nossos dados para o formato correto.

{% highlight php linenos %}$data = json_encode($data);{% endhighlight %} 

Agora que temos tudo que precisamos no formato correto, iremos usar o **cURL** para se comunicar com o Google.
  
Para isso iremos iniciar o cURL e informar a URL iniciada no começo.

{% highlight php linenos %}$curl = curl_init($url);{% endhighlight %} 

Caso você não tenha o cURL ativo em seu servidor então ocorrerá o erro: **Fatal error**: Call to undefined function curl_init();

Vamos configurar o cURL para não verificar os certificados SSL do Google.

{% highlight php linenos %}curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);{% endhighlight %} 

Como iremos receber dados de volta do Google então precisamos avisar ao cURL que precisaremos esperar uma resposta.

{% highlight php linenos %}curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);{% endhighlight %} 

Como iremos transportar um json precisaremos definir isso também.

{% highlight php linenos %}curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-type:application/json'));{% endhighlight %} 

Ultimo parâmetro é informar quais são os dados que serão enviados

{% highlight php linenos %}curl_setopt($curl, CURLOPT_POSTFIELDS, $data);{% endhighlight %} 

Agora que está tudo configurado é hora de executar o cURL e gravar a resposta na variavel **$data**

{% highlight php linenos %}$data = curl_exec($curl);{% endhighlight %} 

Finalizando o cURL

{% highlight php linenos %}curl_close($curl);{% endhighlight %} 

Perfeito, a comunicação foi concluída, agora devemos tratar os dados que recebemos, converter de json para um objeto, afim de conseguirmos manipular com mais facilidade.

{% highlight php linenos %}$data = json_decode($data);{% endhighlight %} 

Nossa URL encurtada pode ser recuperada dentro de data -> id

{% highlight php linenos %}echo $data -> id;{% endhighlight %} 

Caso você queira incluir um qr code em seu sistema para acesso a esse link, poderemos facilmente gerar a imagem adicionando <span style="color: #993300;">.qr</span> ao final do nosso link encurtado.

Ficaria algo como

{% highlight php linenos %}echo $data -> id . '.qr';{% endhighlight %} 

Isso deverá gerar o endereço similar a esse: <span style="color: #993300;">http://goo.gl/UP603.qr</span>

Segue código na integra

{% highlight php linenos %}<?php
$url = 'https://www.googleapis.com/urlshortener/v1/url';
$data['longUrl'] = 'http://sounoob.com.br/usando-encurtador-de-url-do-google-com-php';
$data['key'] = 'AIzaSyADeOnBiAo4iOWCjbdPDfXWTVzwwLrymie';
$data = json_encode($data);

$curl = curl_init($url);

curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-type:application/json'));
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
$data = curl_exec($curl);
curl_close($curl);
$data = json_decode($data);

echo $data -> id;

echo '<br />';
echo $data -> id . '.qr';{% endhighlight %} 