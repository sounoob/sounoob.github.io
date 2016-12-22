---
id: 1106
title: cURL. Feita para usar e abusar
date: 2014-07-05T17:10:52+00:00
author: Sena
layout: post
guid: http://sounoob.com.br/?p=1106
permalink: /curl-usando-e-abusando/
dsq_thread_id:
  - "2820349682"
categories:
  - Tutoriais
tags:
  - cURL
---
Cedo ou tarde, todo programador irá precisar fazer uma conexão com algum página para enviar ou buscar alguma informação (ou fazer os dois). É ai que você pede ajuda ao cURL.<!--more-->

## cURL se você está entre nós, dê um sinal.

Para saber se temos a biblioteca em nosso servidor, abra um arquivo PHP e insira o código abaixo (Só o código):

{% highlight php linenos %}<?php phpinfo();{% endhighlight %} 

Chame o arquivo na UR, ele deverá mostrar tudo que tem no seu servidor, procure por &#8220;**cURL support**&#8220;, se estiver marcado como **enabled**, então você poderá usar, caso contrário, chame o pessoal do suporte e solicite a instalação.

## Mão na massa

Agora que sabemos que temos o cURL, é hora de começar a mágica, primeira coisa a ser feita é iniciar o cURL chamando a função **curl_init()**, essa função retornará um ponteiro que usaremos para passar os outros parâmetros do cURL, então guardaremos o resultado em uma variável.

{% highlight php linenos %}$ch = curl_init();{% endhighlight %} 

A partir daqui, todos parâmetros que precisar passar para o cURL precisaremos usar a função **curl_setopt()**, esta função precisa do ponteiro do cURL, o parâmetro, e o valor do parâmetro.
  
Primeiro e obrigatório será a URL

{% highlight php linenos %}curl_setopt($ch, CURLOPT_URL, 'http://sounoob.com.br/labs/testCurl.php');{% endhighlight %} 

Agora é só mandar executar a ação.

{% highlight php linenos %}curl_exec($ch);{% endhighlight %} 

E como boa prática, fechamos a conexão, para liberar memória.

{% highlight php linenos %}curl_close($ch);{% endhighlight %} 

Com apenas esses passos o PHP irá capturar toda informação da URL que definimos e irá exibir na tela. Não é bem o que queremos, seria interessante se pudêssemos manipular isso. Para isso antes de mandar executa a ação incluiremos outro parâmetro informando que queremos o conteúdo da URL como uma string.

{% highlight php linenos %}curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);{% endhighlight %} 

Agora no momento que mandarmos executar, a função **curl_exec** irá retornar os dados, então precisaremos jogar esses dados em uma variável para ser tratada futuramente.

{% highlight php linenos %}$data = curl_exec($ch);
//Em $data teremos o retorno do site, poderemos manipular essa informação como quiser.
{% endhighlight %} 

## Enviando informações para a URL de destino via GET

GET (Ou querystring) é a forma mais simples que existe, basta apenas injetar todos dados na URL e pronto, a página de destino já estará recendo os dados.

{% highlight php linenos %}curl_setopt($ch, CURLOPT_URL, 'http://sounoob.com.br/labs/testeCurl.php?parameter1=value&parameter2=secondevalue');{% endhighlight %} 

Funcionou, mas não aconselho usar desta forma, fica feio e difícil de entender. Ao invés disso utilize um array para distribuir as informações a serem enviadas e depois use a função http\_build\_query para formatar no padrão.

{% highlight php linenos %}//distribuindo a informação a ser enviada
$queryString = array(
    'parameter1' => 'value',
    'parameter2' => 'secondevalue'
);
 
//Monta a URL
$url = 'http://sounoob.com.br/labs/testeCurl.php?' . http_build_query($queryString);
 
//envia a URL como parâmetro para o cURL;
curl_setopt($ch, CURLOPT_URL, $url);{% endhighlight %} 

Melhor assim né? Outros quem for dar manutenção ao seu código irá agradecer também&#8230;

## Enviando via POST

No caso do POST devemos usar um parâmetro adicional em nossa biblioteca **CURLOPT_POSTFIELDS.** Este parâmetro recebe como valor um array, que irá ser enviado como POST. Simples né?

{% highlight php linenos %}//distribuindo a informação a ser enviada
$post = array('
    post1' => 'postvalue',
    post2' => 'othervalue'
);
 
curl_setopt($ch, CURLOPT_POSTFIELDS, $post);{% endhighlight %} 

## Como enviar XML?

Para enviar o XML utilizaremos a mesma forma que enviamos um POST, só que ao invés de enviar um array, enviaremos o XML como string e passaremos um novo parâmetro: O cabeçalho, nele informaremos que estamos enviando um XML com o encoding utf-8

{% highlight php linenos %}//Montando o XML
$xml = '<?xml version="1.0" encoding="utf-8">
<xml>
    <parameter1>value</parameter1>
    <parameter1>secondevalue</parameter1>
</xml>

//Enviando o XML como POST
curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);

//Informando que estamos enviando um XML com encoding utf-8
curl_setopt($ch, CURLOPT_HTTPHEADER, Array('Content-Type: application/xml; charset=utf-8'));
{% endhighlight %} 

Algumas vezes alguns servidores possuem certificados de segurança e o cURL possui a opção de verificar se estes certificados é valido ou não. Não iremos abordar isso neste tutorial, mas&#8230; se precisar fazer uma conexão segura, desative a verificação SSL (Mas procure aprender futuramente sobre isso)

{% highlight php linenos %}curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);{% endhighlight %} 

<span style="font-size: 17px; line-height: 1.55;">Pronto. Agora conseguimos fazer o básico com o cURL.</span>

Para facilitar a vida algumas pessoas costumam jogar isso em alguma função assim, não precisa ficar escrevendo todo código toda vez, veja um exemplo
{% highlight php linenos %}
<div id="curlExec"></div>
function curlExec($url, $post = NULL, array $header = array()){
 
    //Inicia o cURL
    $ch = curl_init($url);
 
    //Pede o que retorne o resultado como string
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
 
    //Envia cabeçalhos (Caso tenha)
    if(count($header) > 0) {
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
    }
 
    //Envia post (Caso tenha)
    if($post !== null) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
    }
 
    //Ignora certificado SSL
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
 
    //Manda executar a requisição
    $data = curl_exec($ch);
 
    //Fecha a conexão para economizar recursos do servidor
    curl_close($ch);
 
    //Retorna o resultado da requisição
 
    return $data;
}
{% endhighlight %} 

 

o cURL não é só isso. Dá para fazer muito mais com ele, recomendo a leitura da documentação no link abaixo:

<a title="Documentação cURL" target="_blank" rel="external nofollow href=">http://php.net/manual/pt_BR/book.curl.php</a>

 

 