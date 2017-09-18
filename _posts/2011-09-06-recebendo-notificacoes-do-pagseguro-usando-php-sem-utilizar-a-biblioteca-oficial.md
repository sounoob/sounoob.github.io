---
title: Recebendo notificações do PagSeguro usando PHP - Sem utilizar a biblioteca
  oficial
date: 2011-09-06 19:10:00 -03:00
permalink: "/recebendo-notificacoes-do-pagseguro-usando-php-sem-utilizar-a-biblioteca-oficial/"
categories:
- Tutoriais
tags:
- API Notificação
- API PagSeguro
- PagSeguro
- XML
redirect_from: "/2011/09/06/recebendo-notificacoes-do-pagseguro-usando-php-sem-utilizar-a-biblioteca-oficial/"
id: 72
author: Sena
layout: post
guid: http://sounoob.com.br/?p=72
short-url:
- http://bit.ly/VjdsgV
dsq_thread_id:
- '2818796140'
---

Primeiro você deve configurar sua URL na sua conta do PagSeguro para receber o código da notificação ( <a href="/assets/uploads/2011/09/PagSeguro_UOL_Notificacao_de-transacoes_pagseguro_uol_com_br_integracao_notificacao_de_transacoes.png" target="_blank">clique aqui para ver como que se faz</a>),  após isso vamos enviar esse código para o PagSeguro afim de receber os detalhes da transação.<!--more-->

Para fazer a comunicação com o PagSeguro vamos usar a biblioteca do CURL, e a função simplexml\_load\_string  para transformar o XML em objeto, para manipular facilmente.

A primeira coisa e a mais importante a saber é, o PagSeguro envia esses dados via POST em uma outra sessão, e você não irá conseguir imprimir isso na tela ( usar **echo**, **print_r**, **var_dump**…) <span style="color: #ff0000;"><del> é proibido, se você usar o FBI vai entrar na sua casa… (to de brinks…)</del></span>. Para saber o que está chegando via post, <a title="Escrevendo um arquivo de texto, usando PHP" href="/escrevendo-um-arquivo-de-texto-usando-php/#recebendo-post" target="_blank">grave esses dados em arquivos de log</a>.
  
<a name="passo-a-passo"></a>
  
Dito isso vamos verificar se o tipo da notificação é ****referente a uma transação, porem para evitar problemas com o servidor local iremos verificar primeiro se chegou a chave referente o tipo de notificação.

{% highlight php linenos %}if(isset($_POST['notificationType']) && $_POST['notificationType'] == 'transaction'){
    //Todo resto do código iremos inserir aqui.
}{% endhighlight %} 

Por questões de segurança o PagSeguro precisa do e-mail e token, então iremos gravar cada um em uma variável

{% highlight php linenos %}$email = 'seuemail@dominio.com.br';
$token = '95112EE828D94278BD394E91C4388F20';{% endhighlight %} 

Esses dados são passados para o PagSeguro junto a uma URL como no exemplo abaixo.

{% highlight php linenos %}https://ws.pagseguro.uol.com.br/v2/transactions/notifications/766B9C-AD4B044B04DA-77742F5FA653-E1AB24?email=seuemail@dominio.com.br&token=95112EE828D94278BD394E91C4388F20{% endhighlight %} 

Ou caso esteja usando sandbox.

{% highlight php linenos %}https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/notifications/766B9C-AD4B044B04DA-77742F5FA653-E1AB24?email=seuemail@dominio.com.br&token=95112EE828D94278BD394E91C4388F20{% endhighlight %} 

Vamos montar nossa URL juntando a variável do e-mail mais a variável do token e o código da notificação, mais a parte fixa da URL ficará algo assim.

{% highlight php linenos %}$url = 'https://ws.pagseguro.uol.com.br/v2/transactions/notifications/' . $_POST['notificationCode'] . '?email=' . $email . '&token=' . $token;{% endhighlight %} 
Caso estejas usando ambiente de sandbox utilize a linha abaixo
{% highlight php linenos %}$url = 'https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/notifications/' . $_POST['notificationCode'] . '?email=' . $email . '&token=' . $token;{% endhighlight %} 

Agora vamos chamar o CURL e passar como endereço, a URL que acabamos de montar.

{% highlight php linenos %}$curl = curl_init($url);{% endhighlight %} 

Vamos configurar o CURL para não verificar os certificados SSL do PagSeguro.

{% highlight php linenos %}curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);{% endhighlight %} 

Como precisamos da resposta do servidor do PagSeguro então vamos marcar no CURL que é para ele trazer uma resposta.

{% highlight php linenos %}curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);{% endhighlight %} 

Hora de executar o CURL, ele deverá retornar a resposta do servidor do PagSeguro, que deverá ser um XML, iremos gravar essa informação na variavel **$transaction**

{% highlight php linenos %}$transaction= curl_exec($curl);{% endhighlight %} 

Se seu token estiver errado dentro de **$transaction** irá ter o texto: Unauthorized
  
Nesse caso podemos verificar se tem isso e chamar uma função para enviar um e-mail informando informando a alguém responsável para inserir novo token ou e-mail , ou o que se adaptar melhor ao seu sistema. Aconselho inserir um **exit** para não correr o risco de o código continuar e sair dando erro em tudo que é coisa pela frente

{% highlight php linenos %}if($transaction == 'Unauthorized'){
    //Insira seu código avisando que o sistema está com problemas, sugiro enviar um e-mail avisando para alguém fazer a manutenção 

   exit;//Mantenha essa linha
}{% endhighlight %}

Caso seu e-mail e token esteja tudo certinho dentro de **$transaction** deverá ter algo similar a esse

{% highlight xml linenos %}<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
	<transaction>
		<date>2011-02-10T16:13:41.000-03:00</date>
		<code>9E884542-81B3-4419-9A75-BCC6FB495EF1</code>
		<reference>REF1234</reference>
		<type>1</type>
		<status>3</status>
		<paymentMethod>
			<type>1</type>
			<code>101</code>
		</paymentMethod>
		<grossAmount>49900.00</grossAmount>
		<discountAmount>0.00</discountAmount>
		<feeAmount>0.00</feeAmount>
		<netAmount>49900.00</netAmount>
		<extraAmount>0.00</extraAmount>
		<installmentCount>1</installmentCount>
		<itemCount>2</itemCount>
		<items>
			<item>
				<id>0001</id>
				<description>Notebook Prata</description>
				<quantity>1</quantity>
				<amount>24300.00</amount>
			</item>
			<item>
				<id>0002</id>
				<description>Notebook Rosa</description>
				<quantity>1</quantity>
				<amount>25600.00</amount>
			</item>
		</items>
		<sender>
			<name>José Comprador</name>
			<email>comprador@uol.com.br</email>
			<phone>
				<areaCode>11</areaCode>
				<number>56273440</number>
			</phone>
		</sender>
		<shipping>
			<address>
				<street>Av. Brig. Faria Lima</street>
				<number>1384</number>
				<complement>5o andar</complement>
				<district>Jardim Paulistano</district>
				<postalCode>01452002</postalCode>
				<city>Sao Paulo</city>
				<state>SP</state>
				<country>BRA</country>
			</address>
			<type>1</type>
			<cost>21.50</cost>
		</shipping>
	</transaction>{% endhighlight %} 

Não iremos precisar mais do CURL, então vamos fechar

{% highlight php linenos %}curl_close($curl);{% endhighlight %} 

O XML recebido é inutil se não conseguirmos manipular, então vamos transformar o XML em um objeto.

{% highlight php linenos %}$transaction = simplexml_load_string($transaction);{% endhighlight %} 

Perfeito, agora é só pegar o que precisa respeitando a hierarquia do XML…

O Mais importante nesse caso é localizar primeiro a informação no XML. Veja no exemplo abaixo como capturar por exemplo o endereço do comprador, veja as tags em verde:

{% highlight xml linenos %}<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
	<transaction>
		<date>2011-02-10T16:13:41.000-03:00</date>
		<code>9E884542-81B3-4419-9A75-BCC6FB495EF1</code>
		<reference>REF1234</reference>
		<type>1</type>
		<status>3</status>
		<paymentMethod>
			<type>1</type>
			<code>101</code>
		</paymentMethod>
		<grossAmount>49900.00</grossAmount>
		<discountAmount>0.00</discountAmount>
		<feeAmount>0.00</feeAmount>
		<netAmount>49900.00</netAmount>
		<extraAmount>0.00</extraAmount>
		<installmentCount>1</installmentCount>
		<itemCount>2</itemCount>
		<items>
			<item>
				<id>0001</id>
				<description>Notebook Prata</description>
				<quantity>1</quantity>
				<amount>24300.00</amount>
			</item>
			<item>
				<id>0002</id>
				<description>Notebook Rosa</description>
				<quantity>1</quantity>
				<amount>25600.00</amount>
			</item>
		</items>
		<sender>
			<name>José Comprador</name>
			<email>comprador@uol.com.br</email>
			<phone>
				<areaCode>11</areaCode>
				<number>56273440</number>
			</phone>
		</sender>
		<shipping>
			<address>
			    <street>Av. Brig. Faria Lima</street>
				<number>1384</number>
				<complement>5o andar</complement>
				<district>Jardim Paulistano</district>
				<postalCode>01452002</postalCode>
				<city>Sao Paulo</city>
				<state>SP</state>
				<country>BRA</country>
			</address>
			<type>1</type>
			<cost>21.50</cost>
		</shipping>
	</transaction>{% endhighlight %} 

Como ficaria no objeto.

{% highlight php linenos %}$transaction -> shipping -> address -> street;{% endhighlight %} 

Se fossemos buscar por exemplo o e-mail do comprador:

{% highlight xml linenos %}<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
	<transaction>
		<date>2011-02-10T16:13:41.000-03:00</date>
		<code>9E884542-81B3-4419-9A75-BCC6FB495EF1</code>
		<reference>REF1234</reference>
		<type>1</type>
		<status>3</status>
		<paymentMethod>
			<type>1</type>
			<code>101</code>
		</paymentMethod>
		<grossAmount>49900.00</grossAmount>
		<discountAmount>0.00</discountAmount>
		<feeAmount>0.00</feeAmount>
		<netAmount>49900.00</netAmount>
		<extraAmount>0.00</extraAmount>
		<installmentCount>1</installmentCount>
		<itemCount>2</itemCount>
		<items>
			<item>
				<id>0001</id>
				<description>Notebook Prata</description>
				<quantity>1</quantity>
				<amount>24300.00</amount>
			</item>
			<item>
				<id>0002</id>
				<description>Notebook Rosa</description>
				<quantity>1</quantity>
				<amount>25600.00</amount>
			</item>
		</items>
		<sender>
			<name>José Comprador</name>
			<email>comprador@uol.com.br</email>
			<phone>
				<areaCode>11</areaCode>
				<number>56273440</number>
			</phone>
		</sender>
		<shipping>
			<address>
				<street>Av. Brig. Faria Lima</street>
				<number>1384</number>
				<complement>5o andar</complement>
				<district>Jardim Paulistano</district>
				<postalCode>01452002</postalCode>
				<city>Sao Paulo</city>
				<state>SP</state>
				<country>BRA</country>
			</address>
			<type>1</type>
			<cost>21.50</cost>
		</shipping>
	</transaction>{% endhighlight %} 

Como ele ficaria:

{% highlight php linenos %}$transaction -> sender -> email;{% endhighlight %} 

Na maioria das vezes o que todo sistema irá precisar mesmo é do status da transação que de ser capturado como mostrado abaixo.

{% highlight php linenos %}$transaction -> status;{% endhighlight %} 

Para todos os <span style="color: #ff0000;"><del>folgados</del></span> que preferem copiar e colar, segue o código fonte.

{% highlight php linenos %}<?php
if(isset($_POST['notificationType']) && $_POST['notificationType'] == 'transaction'){
    //Todo resto do código iremos inserir aqui.

    $email = 'seuemail@dominio.com.br';
    $token = '95112EE828D94278BD394E91C4388F20';

    $url = 'https://ws.pagseguro.uol.com.br/v2/transactions/notifications/' . $_POST['notificationCode'] . '?email=' . $email . '&token=' . $token;
    //Caso use sandbox descontente a linha abaixo.
    //$url = 'https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/notifications/' . $_POST['notificationCode'] . '?email=' . $email . '&token=' . $token;

    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $transaction= curl_exec($curl);
    curl_close($curl);

    if($transaction == 'Unauthorized'){
        //Insira seu código avisando que o sistema está com problemas, sugiro enviar um e-mail avisando para alguém fazer a manutenção

        exit;//Mantenha essa linha
    }
    $transaction = simplexml_load_string($transaction);
}{% endhighlight %} 

Bom esse era para ser uma explicação simples, caso alguem não entender qualquer coisa, ou achar algum erro no meu código ou de português comenta ai em baixo que eu irei atualizar o post

Veja outros posts como este aqui:
  
[Utilizando as APIs do PagSeguro e PHP – Sem utilizar a biblioteca oficial.](/utilizando-as-apis-do-pagseguro-e-php-sem-utilizar-a-biblioteca-oficial/ "Utilizando as APIs do PagSeguro e PHP – Sem utilizar a biblioteca oficial.")
