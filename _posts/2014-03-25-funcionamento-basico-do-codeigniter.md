---
title: Funcionamento básico do CodeIgniter
date: 2014-03-25 19:33:12 Z
permalink: "/funcionamento-basico-do-codeigniter/"
categories:
- Aulas
tags:
- CodeIgniter
redirect_from: "/2014/03/25/funcionamento-basico-do-codeigniter/"
id: 995
author: Sena
layout: post
guid: http://sounoob.com.br/?p=995
short-url:
- http://bit.ly/1jS3JIj
dsq_thread_id:
- '2819458222'
---

Primeira reação de quem nunca trabalhou com o CodeIgniter <del style="color: #ff0000;">(Ou qualquer outro framework)</del> é abrir as pastas e falar: <del style="color: #ff0000;">Que merda é essa…</del> Que estrutura é essa…

Para todos vocês que pensaram ou disseram isso, tenho boas notícias: CodeIgniter é a coisa mais fácil do mundo. Sério, provavelmente quando você entender o básico, provavelmente nunca mais voltará aqui… Mas, enquanto isso descreverei aqui como ele funciona.<!--more-->

Bom, primeiro começarei explicando o básico das pastas que estão na raiz do CodeIgniter.

  * **application**: Esta será a pasta que trabalharemos, tudo que nosso projeto precisar modificaremos ou criaremos aqui dentro.
  * **system**: Nunca altere nada dentro desta pasta. Aqui está o coração do CodeIgniter, sempre que surgir uma atualização do CodeIgniter poderemos simplesmente atualizar essa pasta e tudo funcionará com a nova versão, com poucas ou nenhuma mudança no nosso projeto (Excerto para atualizações que envolvem mudanças bruscas no sistema).
  * **user_guide**: Aqui está toda documentação do CodeIgniter, de modo offline, nunca use apenas informações de tutoriais da internet, sempre dê uma olhada na documentação onde toda informação será totalmente compatível com a versão do CodeIgniter que você estiver trabalhando.

Bom, dentro das pastas **application** e **system** existem várias pastas que você precisará utilizar, mas… deixarei para explicar apenas quando precisar utilizar cada uma delas.

Segundo item e um dos mais essenciais. O CodeIgniter trabalha com o padrão **MVC**, que é basicamente separar o sistema em 3 principais camadas:

  * **Model** ou **Modelo**, onde temos todo e qualquer acesso a dados (Pegar informações no banco de dados por exemplo);
  * **View** ou **Visão**, será nosso template, basicamente onde terá nosso código HTML…
  * **Controller** ou **Controlador**, Irá processar toda informação e mandar para a **View**, eventualmente poderá solicitar informações da **Model.**

Bom o conceito de **MVC** vai além destas simples palavras, recomendo que você procure mais detalhes em outro momento com mais calma, mas, para trabalhar com o CodeIgniter basta entender esta parte, o interessante é nunca usar um **controller** para acessar o banco de dados ou uma **view** para processar uma informação.
  
Se você manter tudo separado, cada um fazendo sua parte, o seu código irá ficar melhor para outros entenderem e até você mesmo, então evite misturar as coisas, mesmo se a tentação. Seja forte!

Veja outros posts como este aqui:
  
[CodeIgniter para Noobs](./codeigniter-para-noobs/ "CodeIgniter para Noobs")