---
id: 668
title: Recorrência (Assinaturas) com o PagSeguro
date: 2012-12-23T08:32:15+00:00
author: Sena
layout: post
guid: http://sounoob.com.br/?p=668
permalink: /recorrencia-com-o-pagseguro/
short-url:
  - http://bit.ly/XbrxdV
dsq_thread_id:
  - "2819473564"
categories:
  - Dicas
tags:
  - API Assinatura
  - API PagSeguro
  - PagSeguro
  - recorrencia
---
Depois de todos pedirem, depois de muito código, depois de muitos testes, enfim saiu o sistema de recorrências do PagSeguro com direito a API de tudo mais.

**Oh Wait,  o que é essa tal de Recorrência ?**
  
Sabe a mensalidade que você paga da sua Internet, TV a cabo ou algo similar? Então, é isso&#8230;
  
Você fala que quer usar o serviço apenas uma vez, e todo mês chega a cobrança. No PagSeguro agora tem isso.<!--more-->

**Quando devo usar isso?**
  
Toda vez que seu sistema precisar ficar gerando cobranças automaticamente para seus clientes.

**Como coloco isso no meu sistema?**
  
O sistema de recorrência já está ativo em todas contas do PagSeguro, basta apenas integrar o seu sistema para fazer as requisições, o que poderá ser feito de três maneiras:

<li dir="ltr">
  Usando código gerado pelo PagSeguro &#8211; <a title="Botão de assinatura PagSeguro" href="https://acesso.uol.com.br/login.html?skin=ps&msg=ex&dest=REDIR|http%3A%2F%2Fpagseguro.uol.com.br%2Fdesenvolvedor%2Fbotoes_de_pagamento.jhtml%23%21assinar" target="_blank">Clique aqui para ver</a>
</li>
<li dir="ltr">
  <a title="Requisição de pagamento do PagSeguro com assinatura associada usando PHP" href="./requisicao-de-pagamento-do-pagseguro-com-assinatura-associada-usando-php/" target="_blank">Usando a API de pagamentos com a assinatura associada.</a>
</li>
<li dir="ltr">
  Usando a própria API de assinatura.
</li>

<b id="internal-source-marker_0.38498711423017085"><br /> Como cancelo uma recorrência?<br /> </b>Poderás cancelar usando a API ou acessando a sua conta do PagSeguro e fazendo o procedimento manual.