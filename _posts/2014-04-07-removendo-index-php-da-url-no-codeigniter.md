---
title: Removendo "index.php" da URL no CodeIgniter
date: 2014-04-07 12:26:55 -03:00
permalink: "/removendo-index-php-da-url-no-codeigniter/"
categories:
- Tutoriais
tags:
- CodeIgniter
- htaccess
- Web.config
redirect_from: "/2014/04/07/removendo-index-php-da-url-no-codeigniter/"
id: 1005
author: Sena
layout: post
guid: http://sounoob.com.br/?p=1005
short-url:
- http://bit.ly/1mUwUPC
dsq_thread_id:
- '2829079704'
image: "/assets/uploads/2014/04/Removendo-index.jpg"
---

O CodeIgniter por padrão já dá suporte a URL amigáveis,  como os grandes frameworks em PHP, o grande problema é que ele ainda insiste em mostrar o arquivo index.php na URL o que deixa toda requisição horrível.
<!--more-->
Veja o padrão de URL na instalação padrão do CodeIgniter:
  
_http://seusite.com.br/index.php/controller/method/parameter_

Como deveria ser:
  
_http://seusite.com.br/controller/method/parameter_

Este problema é muito simples de resolver, basta configurar o servidor para trabalhar com uma sobrescrita de URL, siga o passo-a-passo a baixo:

Primeiro a<span style="line-height: 18px;">bra o arquivo config.php dentro da pasta </span><strong style="line-height: 18px;">\application\config<strong></strong></strong> <span style="line-height: 18px;">e substitua as linhas abaixo:</span>

**$config["index_page"] = "index.php";** para **$config["index_page"] = ";
  
$config["uri_protocol"] = "AUTO";** para **$config["uri\_protocol"] = "REQUEST\_URI";**

Se você estiver usando um apache crie um arquivo **.htaccess** com o seguinte conteúdo:

{% highlight php linenos %}RewriteEngine on
RewriteCond $1 !^(index\.php|assets|robots\.txt)
RewriteRule ^(.*)$ index.php/$1 [L]{% endhighlight %} 

Se você estiver utilizando IIS você deverá criar um arquivo **web.config**

{% highlight xml linenos %}<?xml version="1.0" encoding="UTF-8"?>
 <configuration>
    <system.webServer>
         <rewrite>
             <rules>
                 <rule name="Clean URL" stopProcessing="true">
                     <match url="^(.*)$" />
                     <conditions>
                         <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                         <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                     </conditions>
                     <action type="Rewrite" url="index.php/{R:1}" appendQueryString="false" />
                 </rule>
             </rules>
         </rewrite>
     </system.webServer>
 </configuration>{% endhighlight %} 

Se você não conhece muito o CodeIgniter você poderá conhecer o nosso manual básico:
  
[Curso básico de CodeIgniter para Noobs](/codeigniter-para-noobs/ "CodeIgniter para Noobs")
