---
layout: post
date: 2019-05-11T03:00:30.000+00:00
author: sena
title: PagSeguro muda estrutura de token e não avisa a ninguém.
categories:
- curiosidades
tags:
- pagseguro
image: "/assets/uploads/2019/05/11/pagseguro-health-check-de-api.jpg"

---
Manhã de domingo, crianças correndo, pássaros cantando, porém tinha e o PagSeguro mudando o padrão do token de acesso de suas APIs.
<!--more-->
Brincadeiras a parte, notamos recentemente uma movimentação um tanto estranha no fórum do PagSeguro com a galera estranhando a estrutura do post do PagSeguro.

A postagem mais antiga é de 01/04/19, onde a galera falava referente o número de caracteres do token passar de 32 para 100 caracteres.

> <a target="_blank" rel="external noreferrer nofollow" href="https://comunidade.pagseguro.uol.com.br/hc/pt-br/community/posts/360029376833-Estrutura-do-Token-" title="Fórum PagSeguro - Estrutura do Token">Boa tarde, estou configurando o pag seguro para o open cart na versao 3.0.3.1 , mas apresentou o erro Unauthorized, ja peguei as soluções de forum e no outro site deu certo já nesse nao está. Uma coisa que reparei o Token ao gerar, esta muito extenso, o do outro cliente é mais curto.. <br> Teria alguma forma de testar se o token está gerando certo? o que esse cliente nova gerou seria o token com 101 caracteres.</a>


> <a target="_blank" rel="external noreferrer nofollow" href="https://comunidade.pagseguro.uol.com.br/hc/pt-br/community/posts/360028993894-Problema-com-o-Token-gerado" title="Fórum PagSeguro - Problema com o Token gerado">Estou tentando realizar a integração do meu site com o pagseguro.<br>O token solicitado pelo meu site é de apenas 32 dígitos e o token enviado pelo sistema do pagseguro é muito maior, alguém sabe como consigo este token de 32 dígitos?</a>

Fizemos uma análise no novo token e pudemos temos alguns pontos:

* Todos tokens antigos continuam válidos e com 32 caracteres.
* A nova estrutura só atinge quem clicar no botão para gerar um novo token daqui para frente.
* As APIs continuam aceitando tanto uma versão quanto a outra do token.

Um ponto que não conseguimos validar foi a estrutura do token de sandbox, para mim ela continua a 32 caracteres, porém o sandbox não permite alterar o token, imagino que seja por isso que não é 100. Mas e as novas contas, irá vir com a estrutura de token do sandbox com 100 ou 32 caracteres.

Agora fico com a pulga atrás da orelha para saber qual serviço o PagSeguro está para lançar que forçou a mudança da estrutura do token tão repentinamente quem nem deu tempo de avisar aos usuários. Alguém arrisca um palpite?