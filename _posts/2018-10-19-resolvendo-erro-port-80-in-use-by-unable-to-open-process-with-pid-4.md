---
title: 'Resolvendo erro: Port 80 in use by “Unable to open process” with PID 4!'
layout: post
date: 2018-10-19 09:36:40 +0000
author: sena
categories: []
tags: []
redirect_from: erro-port-80-in-use-by-unable-to-open-process-with-pid-4-md
image: "/assets/uploads/2018/10/19/xampp-erro-port80.pid4.png"

---
No Windows 10 ao tentar executar o XAMPP muitas vezes temos o erro "Port 80 in use by “Unable to open process” with PID 4!". Esse erro está relacionado a serviços do Windows o qual está sendo executado na porta 80. Veja como finalizar esses serviços.<!--more-->

Inicie o prompt de comando como administrador.

Execute o comando abaixo.

    net stop w3svc

Depois o comando

    net stop iisadmin

Pronto, execute o xampp e verifique se o problema foi resolvido.

![XAMPP - Painel de controle ](/assets/uploads/2018/10/19/xampp-normal.png "XAMPP - Painel de controle ")