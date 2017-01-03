---
title: Módulo Joomla 1.7 - Básico
date: 2012-02-02 12:30:23
permalink: "/modulo-joomla-1-7-basico/"
categories:
- Tutoriais
tags:
- Joomla
- Joomla 1.7
redirect_from: "/2012/02/02/modulo-joomla-1-7-basico/"
id: 319
author: Sena
layout: post
guid: http://sounoob.com.br/?p=319
short-url:
- http://bit.ly/VjbKw0
dsq_thread_id:
- '2852522008'
---

Todo modulo em Joomla deverá ter no mínimo dois arquivos, um arquivo XML o qual irá determinar todos os parâmetros e informações do módulo, e um arquivo PHP  o qual irá inicializar e/ou processar todas as tarefas.

Vamos criar um exemplo simples apenas para representar algo básico, esse módulo irá se chamar: "mod\_sou\_goku", esse modulo irá apenas mostrar na tela um texto básico.<!--more-->

Crie uma pasta com o nome do plug-in que no nosso caso será:  "mod\_sou\_goku". Dentro da pasta crie um arquivo XML com o mesmo nome.

Como todo XML o nosso deverá ter a declaração padrão

[xml]<?xml version="1.0" encoding="utf-8"?>[/xml]

Nosso primeiro nó deverá ser o **extension**, nele deveremos incluir alguns parâmetros como tipo da extenção que será um módulo, versão do Joomla que será 1.7, para onde será o plug-in no caso se será para o site e o método que no nosso caso será uma atualização. Em resumo fica a nossa tag igual à abaixo.

[xml]<extension type="module" version="1.7" client="site" method="upgrade">
  
</extension>[/xml]

Perfeito agora o sistema já saberá para que irá servir nosso modulo, porem falta mais informações, por isso iremos várias tags dentro dessa recém criada. Precisamos apenas evitar acentuação porque muitas vezes pode gerar uma dor de cabeça com isso, em particular peguei o costume de escrever tudo em inglês justo para evitar isso, mas apenas para efeitos didáticos abaixo está às descrições em português.

Nome do modulo

[xml]<name>Modulo Sou Goku</name>[/xml]

Versão do modulo

[xml]<version>0.1</version>[/xml]

Uma rápida descrição do modulo

[xml]<description>Mostra um texto simples na tela</description>[/xml]

Autor, no seu caso seria o seu nome ou da empresa que trabalha.

[xml]<author>Sena</author>[/xml]

E-mail do autor, em caso de quem for usar precisar contatar eles procuraram esse e-mail.

[xml]<authorEmail>sena@sounoob.com.br</authorEmail>[/xml]

Site do autor, em muitos casos esse link corresponde a um link direto para a pagina da documentação do modulo ou apenas o site portfolio do autor.

[xml]<authorUrl>www.senartes.com.br</authorUrl>[/xml]

Data de criação do modulo, nesse caso é ano, mês e dia.

[xml]<creationDate>2012-02-02</creationDate>[/xml]

Direito autoral correspondente a sua empresa

[xml]<copyright>Copyright (C) 2011 – 2012 souNoob. All rights reserved</copyright>[/xml]

Tipo de licença  para o modulo

[xml]<license>Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License</license>[/xml]

Por ultimo iremos informar os arquivos que corresponde ao nosso módulo, para isso iremos criar uma tag chamada files e dentro dela especificar os arquivos que no nosso caso será o XML que estamos criando agora, e o arquivo PHP que irá processar todas as informações.

[xml]<files>
      
<filename module="mod\_sou\_goku">mod\_sou\_goku.php</filename>
      
<filename>mod\_sou\_goku.xml</filename>
  
</files>[/xml]

Nosso arquivo XML já está pronto, agora podemos partir para o arquivo PHP que se chamará mod\_sou\_goku.php, o que nesse caso ele não irá fazer muita coisa. Como falado no começo do post esse modulo irá apenas mostrar um texto simples. Então usaremos o echo e o nosso texto

{% highlight php linenos %}echo "Olá, Eu sou goku";{% endhighlight %} 

Agora é só compactar o módulo e instalar no Joomla

Essa ainda não é a estrutura padrão de um modulo para o Joomla, é apenas um jeito de rodar um modulo no mínimo. Nos próximos posts irei detalhar mais recursos e padronizar um pouco mais.

Segue código na integra:

**mod\_sou\_goku.xml**

[xml]<?xml version="1.0" encoding="utf-8"?>
  
<extension type="module" version="1.7" client="site" method="upgrade">
  
<name>Modulo Sou Goku</name>
  
<version>0.1</version>
  
<description>Mostra um texto simples na tela</description>
  
<author>Sena</author>
  
<authorEmail>sena@sounoob.com.br</authorEmail>
  
<authorUrl>www.senartes.com.br</authorUrl>
  
<creationDate>2012-02-02</creationDate>
  
<copyright>Copyright (C) 2011 – 2012 souNoob. All rights reserved</copyright>
  
<license>Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License</license>
  
<files>
      
<filename module="mod\_sou\_goku">mod\_sou\_goku.php</filename>
      
<filename>mod\_sou\_goku.xml</filename>
  
</files>
  
</extension>[/xml]

**mod\_sou\_goku.php**

{% highlight php linenos %}<?php
  
echo "Olá, Eu sou goku";{% endhighlight %} 