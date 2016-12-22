---
id: 439
title: Instalando XAMPP no Windows
date: 2012-08-07T11:36:28+00:00
author: Sena
layout: post
guid: http://sounoob.com.br/?p=439
permalink: /instalando-xampp-no-windows/
short-url:
  - http://bit.ly/12GRbd2
dsq_thread_id:
  - "2820512017"
categories:
  - Aulas
  - Tutoriais
tags:
  - xampp
---
Para o seu código PHP funcionar corretamente é necessário que tenha um interpretador para ler o seu código e falar para o servidor o que deve ser feito. Existem vários meios de instalar e configurar esse interpretador, alguns mais fáceis outros pouco mais difíceis. O mais comum é o apache, utilizaremos o XAMPP, para instalar esse tal apache.<!--more-->

### Espera ai, mas o que é XAMPP

Esquecendo toda explicação técnica, o XAMPP é um programa que faz do seu computador um servidor web capaz de interpretar o PHP, claro, a unica finalidade do XAMPP não é só interpretar o PHP, ele é capaz de fazer funcionar um banco de dados, servidor de e-mails, servidor FTP&#8230; Tudo isso de gratis 🙂

### Não quero usar o XAMPP, tem outra opção?

Claro, dá para instalar o apache manualmente, utilizar o IIS do proprio windows, o lighttpd&#8230; Mas&#8230; a opção mais rápida e fácil é usar o XAMPP.

### Quero o XAMPP! Como faz?

Só baixar do site oficial e instalar normalmente que já irá funcionar&#8230;

Okay, <del><span style="color: #ff0000;">não precisa resmungar</span></del>, vou mandar um passo-a-passo para você.

  1. Baixe o XAMPP <a title="XAMPP versão 1.8 para windows" href="http://www.apachefriends.org/download.php?xampp-win32-1.8.0-VC9.zip" target="_blank">http://www.apachefriends.org/download.php?xampp-win32-1.8.0-VC9.zip</a>
  2. Descompacte em algum local qualquer, recomendo em C:\ (ou disco principal da sua maquina).
  3. Dentro da pasta do XAMPP deve existir um arquivo chamado &#8220;setup_xampp.bat&#8221;.Esse arquivo é responsável por fazer algumas configurações nos arquivos que você acabou de baixar.Execute-o, e espere até aparecer a mensagem &#8220;Pressione qualquer tecla para continuar&#8230;&#8221;, similar a imagem abaixo:<img class="aligncenter  wp-image-441" title="setup_xampp.bat" alt="Print do arquivo setup_xampp.bat" src="./uploads/2012/08/setup_xampp.bat_.png" />
  4. Na mesma pasta deverá ter um arquivo chamado xampp-control.exe, esse arquivo será o que irá iniciar o apache e outros serviços quando necessário. Abra o arquivo, na primeira vez que abrir-lo, você deverá escolher o idioma, escolha o que achar melhor e clique em OK. No nosso tutorial escolhemos inglês.[<img class="aligncenter size-full wp-image-442" title="xampp_language" alt="Escolhendo o idioma do XAMPP" src="./uploads/2012/08/xampp_language.png" width="229" height="170" />](./uploads/2012/08/xampp_language.png)
  5. Se tudo deverá aparecer uma janela similar a que sendo mostrada abaixo:[<img class=" wp-image-443 aligncenter" title="xampp-control.exe" alt="Painel de controle do XAMPP" src="./uploads/2012/08/xampp-control.exe.png" width="720" height="455" srcset="./uploads/2012/08/xampp-control.exe.png 720w, ./uploads/2012/08/xampp-control.exe-300x189.png 300w" sizes="(max-width: 720px) 100vw, 720px" />](./uploads/2012/08/xampp-control.exe.png)
  6. Veja na área de log se não tiver nada em vermelho significa que ocorreu tudo certo. Caso tenha ocorrido algum erro, o sistema irá mostrar o que está causando o problema, geralmente é coisa simples, se estiver muito dificil de resolver posta nos comentários que TENTAREMOS lhe ajudar.
  7. Clique em start na linha do apache, para inciar nosso interpretador.Na caixa de log deverá aparecer o texto: &#8220;[apache] Status change detected: running&#8221;.
  8. Abra um browser qualquer e digite http://localhost, deverá aparecer uma tela similar a mostrada abaixo:[<img class="aligncenter size-full wp-image-444" title="xamp_home_page" alt="Pagina inicial do XAMPP" src="./uploads/2012/08/xamp_home_page.png" width="800" height="532" srcset="./uploads/2012/08/xamp_home_page.png 800w, ./uploads/2012/08/xamp_home_page-300x199.png 300w" sizes="(max-width: 800px) 100vw, 800px" />](./uploads/2012/08/xamp_home_page.png)
  9. Pronto, está funcionando seu PHP. Caso precise de outros serviços como MySQL, Tomcat ou Mercury é só iniciar como você iniciou o PHP.

A pasta onde você deverá salvar seus arquivos afim do apache poder ler deverá ser:

<address>
  xampp\htdocs
</address>

<address>
   
</address>

Veja outros posts como este aqui:
  
[PHP para noobs](./php-para-noobs/ "PHP para Noobs")