---
title: Transação inválida. Sempre inicie transações a partir de sites confiáveis.
date: 2011-09-05 18:05:36 -03:00
permalink: "/transacao-invalida-sempre-inicie-transacoes-a-partir-de-sites-confiaveis/"
categories:
- Dicas
tags:
- PagSeguro
redirect_from: "/2011/09/05/transacao-invalida-sempre-inicie-transacoes-a-partir-de-sites-confiaveis/"
id: 36
author: Sena
layout: post
guid: http://sounoob.com.br/?p=36
short-url:
- http://bit.ly/12PDUTK
dsq_thread_id:
- '2821890585'
---

<p style="text-align: left;">
  Tenho visto na internet muita gente reclamando que ao tentar implantar o PagSeguro no sistema é exibido o erro: "Transação inválida. Sempre inicie transações a partir de sites confiáveis."<!--more-->
</p>

<p style="text-align: left;">
  <img class="aligncenter" style="border: 1px solid black;" title="Transação inválida. Sempre inicie transações a partir de sites confiáveis." src="/assets/uploads/2011/09/Transacao-invalida.-Sempre-inicie-transacoes-a-partir-de-sites-confiaveis..jpg" alt="Transação inválida. Sempre inicie transações a partir de sites confiáveis." /><br /> Porque isso ocorre?
</p>

No dia 3 de agosto o PagSeguro lançou as famosas API, uma delas é a de pagamento, onde a finalidade é fazer uma integração mais dinâmica e ao mesmo tempo segura. O fato é que junto com o lançamento dessa API foi liberado uma opção que permite que a conta receba apenas pagamento usando essa nova API e demonstrarei abaixo o procedimento completo para corrigir o erro mostrado acima.

<p style="text-align: left;">
  <strong>1 - Acesse sua conta do PagSeguro - <a href="https://pagseguro.uol.com.br/">https://pagseguro.uol.com.br/</a></strong>
</p>

<p style="text-align: center;">
  <img class="aligncenter" style="border: 1px solid black;" title="Tela de Login do PagSeguro" src="/assets/uploads/2011/09/PagSeguro-FazendoLogin.jpg" alt="Tela de Login do PagSeguro" />
</p>

<p style="text-align: left;">
  <strong>Acesse no menu a opção "Integrações".</strong>
</p>

<p style="text-align: center;">
  <img class="aligncenter" style="border: 1px solid black;" title="Menu - integrações" src="/assets/uploads/2011/09/MenuIntegracoes.jpg" alt="Menu - integrações"  />
</p>

<p style="text-align: left;">
  <strong>Escolha "Pagamentos via API"</strong>
</p>

<p style="text-align: center;">
  <img class="aligncenter" style="border: 1px solid black;" title="Menu - Integrações - Pagamento Via API" src="/assets/uploads/2011/09/MenuIntegracoes_PagamentoViaAPI.jpg" alt="Menu - Integrações - Pagamento Via API" /><br /> <strong>Desmarque a opção "Quero receber somente pagamentos via API".</strong>
</p>

<p style="text-align: center;">
  <img class="aligncenter" style="border: 1px solid black;" title="Quero receber somente pagamentos via API" src="/assets/uploads/2011/09/desmarcarOpcaoDeReceberSomentePagamentosViaAPI.jpg" alt="Quero receber somente pagamentos via API" /><br /> <strong>Será exibida uma caixa de diálogo com a seguinte pergunta: “Deseja desativar a restrição de pagamentos com API?”</strong>
</p>

<p style="text-align: center;">
  <img class="aligncenter" style="border: 1px solid black;" title="Deseja desativar a restrição dos pagamentos com API?" src="/assets/uploads/2011/09/confirmarDesmarcarOpcaoDeReceberSomentePagamentosViaAPI.jpg" alt="Deseja desativar a restrição dos pagamentos com API?" /><strong>Seguindo todos os passos corretamente, será exibida a tela abaixo:<br /> </strong>
</p>

<p style="text-align: center;">
  <img class="aligncenter" style="border: 1px solid black;" title="A restrição dos pagamentos com API foi desativada" src="/assets/uploads/2011/09/opcaoDeReceberSomentePagamentosViaAPIDesativada.jpg" alt="A restrição dos pagamentos com API foi desativada" />
</p>

<acronym title="claro se não tiver algum outro problema">Pronto agora você já poderá vender com o PagSeguro</acronym> …

Até a próxima…