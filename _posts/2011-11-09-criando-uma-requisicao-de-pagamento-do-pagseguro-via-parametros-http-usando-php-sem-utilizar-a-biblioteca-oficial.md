---
title: Criando uma requisição de pagamento do PagSeguro via parametros HTTP usando
  PHP – Sem utilizar a biblioteca oficial
date: 2011-11-09 14:43:56 Z
permalink: "/criando-uma-requisicao-de-pagamento-do-pagseguro-via-parametros-http-usando-php-sem-utilizar-a-biblioteca-oficial/"
redirect_from: "/2011/11/09/criando-uma-requisicao-de-pagamento-do-pagseguro-via-parametros-http-usando-php-sem-utilizar-a-biblioteca-oficial/"
categories:
- Tutoriais
tags:
- API Pagamento
- API PagSeguro
- cURL
- PagSeguro
- recorrencia
id: 259
author: Sena
layout: post
guid: http://sounoob.com.br/?p=259
short-url:
- http://bit.ly/VjgUbp
dsq_thread_id:
- '2819814603'
---

A requisição de pagamento informando os dados em parâmetros HTTP funciona de forma muito semelhante ao formato XML.<!--more-->

A primeira coisa a ser definida é para qual URL será enviado os dados, diferente do mostrado no formato XML não iremos enviar nenhum parâmetro via GET, então ficará algo mais ou menos assim:

{% highlight php linenos %}$url = 'https://ws.pagseguro.uol.com.br/v2/checkout';{% endhighlight %} 

De acordo com a documentação os dados devem ser enviados como uma string no padrão parametro1=valor2&parametro2=valor2&parametro3=va… A mesma estrutura do parâmetro GET. Então os dados a ser enviados ficará dessa forma:

{% highlight php linenos %}$data = 'email=seuemail@dominio.com.br&amp;token=95112EE828D94278BD394E91C4388F20&amp;currency=BRL&amp;itemId1=0001&amp;itemDescription1=Notebook Prata&amp;itemAmount1=24300.00&amp;itemQuantity1=1&amp;itemWeight1=1000&amp;itemId2=0002&amp;itemDescription2=Notebook Rosa&amp;itemAmount2=25600.00&amp;itemQuantity2=2&amp;itemWeight2=750&amp;reference=REF1234&amp;senderName=Jose Comprador&amp;senderAreaCode=11&amp;senderPhone=56273440&amp;senderEmail=comprador@uol.com.br&amp;shippingType=1&amp;shippingAddressStreet=Av. Brig. Faria Lima&amp;shippingAddressNumber=1384&amp;shippingAddressComplement=5o andar&amp;shippingAddressDistrict=Jardim Paulistano&amp;shippingAddressPostalCode=01452002&amp;shippingAddressCity=Sao Paulo&amp;shippingAddressState=SP&amp;shippingAddressCountry=BRA';{% endhighlight %} 

Enviando dessa forma o código ficará muito difícil de montar os parâmetros dessa forma irá ficar muito confuso de se trabalhar e entender posteriormente, então iremos montar preparar os dados utilizando um array, assim o código ficará com um visual agradável.

{% highlight php linenos %}$data['email'] = 'seuemail@dominio.com.br';
$data['token'] = '95112EE828D94278BD394E91C4388F20';
$data['currency'] = 'BRL';
$data['itemId1'] = '0001';
$data['itemDescription1'] = 'Notebook Prata';
$data['itemAmount1'] = '24300.00';
$data['itemQuantity1'] = '1';
$data['itemWeight1'] = '1000';
$data['itemId2'] = '0002';
$data['itemDescription2'] = 'Notebook Rosa';
$data['itemAmount2'] = '25600.00';
$data['itemQuantity2'] = '2';
$data['itemWeight2'] = '750';
$data['reference'] = 'REF1234';
$data['senderName'] = 'Jose Comprador';
$data['senderAreaCode'] = '11';
$data['senderPhone'] = '56273440';
$data['senderEmail'] = 'comprador@uol.com.br';
$data['shippingType'] = '1';
$data['shippingAddressStreet'] = 'Av. Brig. Faria Lima';
$data['shippingAddressNumber'] = '1384';
$data['shippingAddressComplement'] = '5o andar';
$data['shippingAddressDistrict'] = 'Jardim Paulistano';
$data['shippingAddressPostalCode'] = '01452002';
$data['shippingAddressCity'] = 'Sao Paulo';
$data['shippingAddressState'] = 'SP';
$data['shippingAddressCountry'] = 'BRA';
$data['redirectURL'] = 'http://www.sounoob.com.br/paginaDeAgracedimento';{% endhighlight %} 

Lembrando que o campo **redirectURL** SÓ IRÁ FUNCIONAR SE NA SUA CONTA CONTA ESTIVER MARCADO "**Quero receber somente pagamentos via API**"

Como os dados estão em array e o PagSeguro só será possivel completar a requisição enviando no formato similar ao GET, então usaremos a **http\_build\_query** para converter o array no formato correto

{% highlight php linenos %}$data = http_build_query($data);{% endhighlight %} 

Vamos iniciar o cURL e passar como endereço, a URL que criamos no começo do tutorial.

{% highlight php linenos %}$curl = curl_init($url);{% endhighlight %} 

Caso ocorra erros como: _Fatal error: Call to undefined function curl_init();_ Verifique se a a biblioteca do cURL está presente e ativado em seu servidor.

A URL a ser enviado os dados contem um certificado de segurança, nesse caso vamos ignorá-lo utilizando o parâmetro abaixo.

{% highlight php linenos %}curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);{% endhighlight %} 

O PagSeguro deverá responder enviando alguma coisa, vamos avisar ao cURL que precisaremos desses dados.

{% highlight php linenos %}curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);{% endhighlight %} 

Vamos avisar ao cURL que esses dados será enviado via POST

{% highlight php linenos %}curl_setopt($curl, CURLOPT_POST, true);{% endhighlight %} 

O PagSeguro só irá aceitar a versão 1.1 do HTTP, logo devemos especificar isso tambem.

{% highlight php linenos %}curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);{% endhighlight %} 

E por fim,  iremos informar os dados que o cURL irá transportar.

{% highlight php linenos %}curl_setopt($curl, CURLOPT_POSTFIELDS, $data);{% endhighlight %} 

Com tudo pronto é hora de executar o cURL e gravar a resposta do PagSeguro na variável **$xml**

{% highlight php linenos %}$xml= curl_exec($curl);{% endhighlight %} 

Se os dados de autenticação (e-mail e token) estiverem incorretos, o PagSeguro irá exibir o texto: Unauthorized. Vamos verificar se ocorreu esse erro, e redirecionar o comprador para uma tela de erro qualquer.

{% highlight php linenos %}if($xml == 'Unauthorized'){
//Insira seu código de prevenção a erros

header('Location: erro.php?tipo=autenticacao');
exit;//Mantenha essa linha
}{% endhighlight %} 

Para liberar memoria deveremos fechar o cURL

{% highlight php linenos %}curl_close($curl);{% endhighlight %} 

Caso tudo ocorra bem, dentro da variável **$xml** deverá ter um XML similar ao abaixo:

{% highlight xml linenos %}<?xml version="1.0" encoding="ISO-8859-1"?>
<checkout>
<code>8CF4BE7DCECEF0F004A6DFA0A8243412</code>
<date>2010-12-02T10:11:28.000-02:00</date>
</checkout>{% endhighlight %} 

Caso ocorra erro você terá algo como:

{% highlight xml linenos %}<?xml version="1.0" encoding="UTF-8"?>
<errors>
<error>
<code>11004</code>
<message>Currency is required.</message>
</error>
<error>
<code>11005</code>
<message>Currency invalid value: 100</message>
</error>
</errors>{% endhighlight %} 

Utilizaremos a simplexml\_load\_string para converter a resposta em um objeto

{% highlight php linenos %}$xml= simplexml_load_string($xml);{% endhighlight %} 

Próximo passo é verificar o PagSeguro enviou algum erro

{% highlight php linenos %}if(count($xml -> error) > 0){
//Insira seu código de tratamento de erro, talvez seja útil enviar os códigos de erros.

header('Location: erro.php?tipo=dadosInvalidos');
exit;
}{% endhighlight %} 

Caso não tenha parado no caso acima é só pegar o código de pagamento e redirecionar o comprador para a tela de pagamento.

{% highlight php linenos %}header('Location: https://pagseguro.uol.com.br/v2/checkout/payment.html?code=' . $xml -> code);{% endhighlight %} 

Lembrando que, esse código de pagamento, só irá servir para a requisição de pagamento, ele é diferente do código de transação e do código de notificação.

Veja o código na integra

{% highlight php linenos %}<?php
$url = 'https://ws.pagseguro.uol.com.br/v2/checkout';

//$data = 'email=seuemail@dominio.com.br&amp;token=95112EE828D94278BD394E91C4388F20&amp;currency=BRL&amp;itemId1=0001&amp;itemDescription1=Notebook Prata&amp;itemAmount1=24300.00&amp;itemQuantity1=1&amp;itemWeight1=1000&amp;itemId2=0002&amp;itemDescription2=Notebook Rosa&amp;itemAmount2=25600.00&amp;itemQuantity2=2&amp;itemWeight2=750&amp;reference=REF1234&amp;senderName=Jose Comprador&amp;senderAreaCode=11&amp;senderPhone=56273440&amp;senderEmail=comprador@uol.com.br&amp;shippingType=1&amp;shippingAddressStreet=Av. Brig. Faria Lima&amp;shippingAddressNumber=1384&amp;shippingAddressComplement=5o andar&amp;shippingAddressDistrict=Jardim Paulistano&amp;shippingAddressPostalCode=01452002&amp;shippingAddressCity=Sao Paulo&amp;shippingAddressState=SP&amp;shippingAddressCountry=BRA';
/*
Caso utilizar o formato acima remova todo código abaixo até instrução $data = http_build_query($data);
*/

$data['email'] = 'seuemail@dominio.com.br';
$data['token'] = '95112EE828D94278BD394E91C4388F20';
$data['currency'] = 'BRL';
$data['itemId1'] = '0001';
$data['itemDescription1'] = 'Notebook Prata';
$data['itemAmount1'] = '24.00';
$data['itemQuantity1'] = '1';
$data['itemWeight1'] = '1000';
$data['itemId2'] = '0002';
$data['itemDescription2'] = 'Notebook Rosa';
$data['itemAmount2'] = '20.00';
$data['itemQuantity2'] = '2';
$data['itemWeight2'] = '750';
$data['reference'] = 'REF1234';
$data['senderName'] = 'Jose Comprador';
$data['senderAreaCode'] = '11';
$data['senderPhone'] = '56273440';
$data['senderEmail'] = 'comprador@uol.com.br';
$data['shippingType'] = '1';
$data['shippingAddressStreet'] = 'Av. Brig. Faria Lima';
$data['shippingAddressNumber'] = '1384';
$data['shippingAddressComplement'] = '5o andar';
$data['shippingAddressDistrict'] = 'Jardim Paulistano';
$data['shippingAddressPostalCode'] = '01452002';
$data['shippingAddressCity'] = 'Sao Paulo';
$data['shippingAddressState'] = 'SP';
$data['shippingAddressCountry'] = 'BRA';
$data['redirectURL'] = 'http://www.sounoob.com.br/paginaDeAgracedimento';

$data = http_build_query($data);

$curl = curl_init($url);

curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
$xml= curl_exec($curl);

if($xml == 'Unauthorized'){
//Insira seu código de prevenção a erros

header('Location: erro.php?tipo=autenticacao');
exit;//Mantenha essa linha
}
curl_close($curl);

$xml= simplexml_load_string($xml);
if(count($xml -> error) > 0){
//Insira seu código de tratamento de erro, talvez seja útil enviar os códigos de erros.

header('Location: erro.php?tipo=dadosInvalidos');
exit;
}
header('Location: https://pagseguro.uol.com.br/v2/checkout/payment.html?code=' . $xml -> code);{% endhighlight %} 

Lembrando que é possível também enviar informações para incluir uma assinatura(cobrança recorrente) tudo nesse mesmo processo.
  
Veja detalhes em: <a title="Requisição de pagamento do PagSeguro com assinatura associada usando PHP" href="./requisicao-de-pagamento-do-pagseguro-com-assinatura-associada-usando-php/" target="_blank">Requisição de pagamento do PagSeguro com assinatura associada usando PHP</a>

Como sempre, duvidas sugestões e qualquer coisa relacionada <span style="color: #ff0000;"><del>excerto reclamações rs </del></span> só comentar abaixo…

Veja outros posts como este aqui:
  
[Utilizando as APIs do PagSeguro e PHP – Sem utilizar a biblioteca oficial.](./utilizando-as-apis-do-pagseguro-e-php-sem-utilizar-a-biblioteca-oficial/ "Utilizando as APIs do PagSeguro e PHP – Sem utilizar a biblioteca oficial.")