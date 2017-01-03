---
title: Links para pagamento - PagSeguro
date: 2011-12-22 13:41:02 -02:00
permalink: "/links-para-pagamento-pagseguro/"
categories:
- Dicas
- Tutoriais
tags:
- PagSeguro
redirect_from: "/2011/12/22/links-para-pagamento-pagseguro/"
id: 306
author: Sena
layout: post
guid: http://sounoob.com.br/?p=306
short-url:
- http://bit.ly/Vja99B
dsq_thread_id:
- '2818943292'
---

O formato atual que o PagSeguro utiliza para fazer uma requisição de pagamento ou doação é utilizando formulários HTML ou fazendo requisição diretamente pelo servidor.

Em algumas plataformas não é possível fazer requisição diretamente do servidor, ou até inserir formulários, como por exemplo, o blog do WordPress quando hospedado diretamente do servidor do WordPress, no Facebook…

Estando como contornar essa situação imaginei mil formas de burlar isso porem foram todas frustradas, mas… Eu consegui gerar um link de pagamento. Como?<!--more-->

Leve em consideração que os formulários que o PagSeguro utilizam o formulário com método POST para enviar esses dados. Quando escrevi o formulário, acabei esquecendo de especificar o método de envio como post e o formulário enviou os dados como GET, e funcionou normalmente. Logo, se eu passar todos os parâmetros na URL o PagSeguro irá aceitar na boa.

Pensando nisso, porque utilizar o formulário, se eu posso passar tudo como fosse um link, o qual funciona em todo lugar?

Mas como irá ficar esse link, deve ser a sua pergunta.

Simples. Pegue todos os campos enviados no formulário e adicione na URL como url?campo=valor&outroCampo=valor…

Um exemplo simples seria o botão de doação

Veja o formulário abaixo:

{% highlight php linenos %}<!-- INICIO FORMULARIO BOTAO PAGSEGURO -->
<form target="pagseguro" action="https://pagseguro.uol.com.br/checkout/doacao.jhtml" method="post">
    <input type="hidden" name="email_cobranca" value="financeiro@sounoob.com.br " />
    <input type="hidden" name="moeda" value="BRL" />
    <input type="image" src="https://p.simg.uol.com.br/out/pagseguro/i/botoes/doacoes/209x48-doar-assina.gif" name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" />
</form>
<!-- FINAL FORMULARIO BOTAO PAGSEGURO -->{% endhighlight %} 

Notem que existem dois campos **email_cobranca** e moeda enviando para a URL https://pagseguro.uol.com.br/checkout/doacao.jhtml, logo posso criar um link de doação dessa forma:

_https://pagseguro.uol.com.br/checkout/doacao.jhtml?email_cobranca=financeiro@sounoob.com.br&moeda=BRL_

Simples né? Vamos tentar agora com algo com mais campos. Um botão de pagamento.

{% highlight php linenos %}<!-- INICIO FORMULARIO BOTAO PAGSEGURO -->
<form target="pagseguro" action="https://pagseguro.uol.com.br/v2/checkout/cart.html?action=add" method="post">
    <input type="hidden" name="receiverEmail" value="financeiro@sounoob.com.br" />
    <input type="hidden" name="currency" value="BRL" />
    <input type="hidden" name="itemId" value="0001" />
    <input type="hidden" name="itemDescription" value="Cadeira elétrica" />
    <input type="hidden" name="itemQuantity" value="1" />
    <input type="hidden" name="itemAmount" value="50.00" />
    <input type="hidden" name="itemWeight" value="18000" />
    <input type="image" src="https://p.simg.uol.com.br/out/pagseguro/i/botoes/pagamentos/209x48-comprar-assina.gif" name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" />
</form>
<!-- FINAL FORMULARIO BOTAO PAGSEGURO -->
{% endhighlight %} 

Note que na URL a ser enviado já possui um parâmetro action=add, iremos manter isso, e apenas adicionar os outros:

_https://pagseguro.uol.com.br/v2/checkout/cart.html?action=add&receiverEmail=financeiro@sounoob.com.br&currency=BRL&itemId=0001&itemDescription=Cadeira elétrica&itemQuantity=1&itemAmount=50.00&itemWeight=18000_

<a name="carrinho"></a>
  
Também simples né? Bom vamos apenas para mais um outro case. Adicionando vários itens em um único link.

Para esse case não irei incluir aqui o formato HTML, por ter muitos campos, e dentre eles tem opcionais e obrigatórios. Então deem uma olhada na documentação em:

_https://pagseguro.uol.com.br/v2/guia-de-integracao/pagamento-via-html.html_

Enfim devemos enviar para a URL https://pagseguro.uol.com.br/v2/checkout/payment.html todos os parâmetros. Veja como fica:

_https://pagseguro.uol.com.br/v2/checkout/payment.html?receiverEmail=financeiro@sounoob.com.br&currency=BRL&itemId1=0001&itemDescription1=Cadeira elétrica&itemAmount1=200.00&itemQuantity1=1&itemWeight1=1000&itemId2=0002&itemDescription2=Esponja&itemAmount2=6.00&itemQuantity2=2&itemWeight2=750&reference=REF1234&shippingType=1&shippingAddressPostalCode=01452002&shippingAddressStreet=Av. Brig. Faria Lima&shippingAddressNumber=1384&shippingAddressComplement=5o andar&shippingAddressDistrict=Jardim Paulistano&shippingAddressCity=Sao Paulo&shippingAddressState=SP&shippingAddressCountry=BRA&senderName=José Comprador&senderAreaCode=11&senderPhone=56273440&senderEmail=comprador@uol.com.br_

Resolver um problema, porem gerou outro, ficou um link enorme apenas com dois produtos… imagina só enviar um link desse tamanho no facebook para alguém pagar alguma coisa… Nem rola né? Twitter nem se fala.

Como resolver esse caso? Simples, use um encurtador de URL, uma sugestão é o encurtador do Google

_http://goo.gl/_

Encurtando o ultimo link de pagamento ficaria algo como:

_http://goo.gl/YLtjW_

Notem que deu erro na acentuação, esse erro ocorre porque o encurtador utiliza o charset UTF-8, resolvemos esse caso simplesmente adicionando o parâmetro **encoding=utf-8** no nosso link:

_https://pagseguro.uol.com.br/v2/checkout/payment.html?receiverEmail=financeiro@sounoob.com.br&currency=BRL&itemId1=0001&itemDescription1=Cadeira elétrica&itemAmount1=200.00&itemQuantity1=1&itemWeight1=1000&itemId2=0002&itemDescription2=Esponja&itemAmount2=6.00&itemQuantity2=2&itemWeight2=750&reference=REF1234&shippingType=1&shippingAddressPostalCode=01452002&shippingAddressStreet=Av. Brig. Faria Lima&shippingAddressNumber=1384&shippingAddressComplement=5o andar&shippingAddressDistrict=Jardim Paulistano&shippingAddressCity=Sao Paulo&shippingAddressState=SP&shippingAddressCountry=BRA&senderName=José Comprador&senderAreaCode=11&senderPhone=56273440&senderEmail=comprador@uol.com.br& encoding=utf-8_

Agora só encurtar a URL, veja como ficou:

_http://goo.gl/RHj3s_

**Lembre-se**_ **que você pode usar o encurtador de URL para os links de doações e botões de pagamento.**_

Legal né? Então até a próxima.