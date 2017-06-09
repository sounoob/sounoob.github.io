---
title: Recorrência (Assinaturas) com o PagSeguro
date: 2012-12-23 06:32:15 -02:00
permalink: "/recorrencia-com-o-pagseguro/"
categories:
- Dicas
tags:
- API Assinatura
- API PagSeguro
- PagSeguro
- recorrencia
redirect_from: "/2012/12/23/recorrencia-com-o-pagseguro/"
id: 668
author: Sena
layout: post
guid: http://sounoob.com.br/?p=668
short-url:
- http://bit.ly/XbrxdV
dsq_thread_id:
- '2819473564'
---

Depois de todos pedirem, depois de muito código, depois de muitos testes, enfim saiu o sistema de recorrências do PagSeguro com direito a API de tudo mais.

**Oh Wait,  o que é essa tal de Recorrência ?**
  
Sabe a mensalidade que você paga da sua Internet, TV a cabo ou algo similar? Então, é isso…
  
Você fala que quer usar o serviço apenas uma vez, e todo mês chega a cobrança. No PagSeguro agora tem isso.<!--more-->

**Quando devo usar isso?**
  
Toda vez que seu sistema precisar ficar gerando cobranças automaticamente para seus clientes.

**Como coloco isso no meu sistema?**
  
O sistema de recorrência já está ativo em todas contas do PagSeguro, basta apenas integrar o seu sistema para fazer as requisições, o que poderá ser feito de três maneiras:

<li dir="ltr">
  Usando código gerado pelo PagSeguro - <a title="Botão de assinatura PagSeguro" href="https://pagseguro.uol.com.br/integracao/botoes_de_pagamento.jhtml" target="_blank">Clique aqui para ver</a>.
</li>
<li dir="ltr">
  <a title="Requisição de pagamento do PagSeguro com assinatura associada usando PHP" href="/requisicao-de-pagamento-do-pagseguro-com-assinatura-associada-usando-php/" target="_blank">Usando a API de pagamentos com a assinatura associada.</a>
</li>
<li dir="ltr">
  Usando a própria API de assinatura.
</li>

<b id="internal-source-marker_0.38498711423017085"><br /> Como cancelo uma recorrência?<br /> </b>Poderás cancelar usando a API ou acessando a sua conta do PagSeguro e fazendo o procedimento manual.
