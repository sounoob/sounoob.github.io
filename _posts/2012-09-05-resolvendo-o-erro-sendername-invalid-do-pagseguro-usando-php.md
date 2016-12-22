---
id: 488
title: Resolvendo o erro senderName invalid do PagSeguro usando PHP
date: 2012-09-05T23:43:49+00:00
author: Sena
layout: post
guid: http://sounoob.com.br/?p=488
permalink: /resolvendo-o-erro-sendername-invalid-do-pagseguro-usando-php/
short-url:
  - http://bit.ly/VUVhAR
dsq_thread_id:
  - "2821890716"
categories:
  - Tutoriais
tags:
  - API Pagamento
  - API PagSeguro
  - PagSeguro
---
Desde que a API de pagamentos do PagSeguro foi lançada, alguns desenvolvedores reportaram erros como "senderName invalid", o que já está se tornado um pouco comum a cada dia.

Esse erro ocorre sempre que o nome do comprador é diferente do padrão estabelecido pelo PagSeguro, que é Nome + sobrenome, sem espaços duplicados e obrigatoriamente deve ter apenas letras e espaços, nada de números, o que é até coerente, desde que seu sistema esteja preparado para isso.

E se não o nome do cliente não tiver como o PagSeguro gostaria? Simples damos um jeito, sem obrigar o comprador digitar novamente o nome dele <del style="color: #ff0000;">o que é uma coisa extremamente chata</del>.<!--more-->

Primeiro item importante <del style="color: #ff0000;">(até meio obvio)</del> é localizar o arquivo que faz a requisição de pagamentos e tratar a variável contendo o nome do usuário no momento em que é enviada para a biblioteca ou para a instrução que faz a requisição.

Em alguns passos será necessário usar uma função chamada preg_replace para poder localizar partes especificas do texto e alterar pelo que quisermos.

A primeira coisa localizar todos números do texto usando **\d** e remove-los.

{% highlight php linenos %}$name = preg_replace('/\d/', '', $name);{% endhighlight %} 

Próximo passo pode parecer meio bizarro mais já vi muito sistema dando erro porque no banco os dados estavam todos bagunçados, então lá vai.
  
Usaremos o o **\n** para localizar a quebra de linha, **\t** para encontrar as tabulações e **\r** para os retornos de carro, logo em seguida alteraremos por espaço.

{% highlight php linenos %}$name = preg_replace('/[\n\t\r]/', ' ', $name);{% endhighlight %} 

Se no nome do usuário tiver algum espaço duplicado, o PagSeguro irá retornar erro, então vamos procurar por espaços e remove-los, especificamente nesse caso usaremos **\s** para achar o espaço depois **?=** para procurar um conteúdo após esse espaço, o que em nosso caso será outro espaço **\s**. Como precisaremos substituir apenas o espaço duplicado precisaremos envolve-lo em parênteses, o como mostrado abaixo

{% highlight php linenos %}$name = preg_replace('/\s(?=\s)/', '', $name);{% endhighlight %} 

Depois é necessário remover espaços antes e depois do nome do usuário, usamos a função trim para isso.

{% highlight php linenos %}$name = trim($name);{% endhighlight %} 

Agora precisamos verificar se é um nome composto (Nome seguido de sobrenome), para isso iremos dividir o texto a partir dos espaços, separando as palavras.

{% highlight php linenos %}$name = explode(' ', $name);{% endhighlight %} 

Agora é necessario contar quantas palavras encontramos para ver se o sobrenome está presente no texto se tiver apenas uma palavra significa que tem só o nome, então criaremos um sobrenome fictício para o comprador <del><span style="color: #ff0000;">(Apenas para o PagSeguro não encher o saco)</span></del>

{% highlight php linenos %}if(count($name) == 1 ) {
    $name[] = ' dos Santos';
}{% endhighlight %} 

Perfeito agora sim não ocorrerá nenhum erro relacionado ao nome, juntaremos todo texto (que foi separado para verificação do sobrenome) e enviaremos para o PagSeguro.

{% highlight php linenos %}$name = implode(' ', $name);{% endhighlight %} 

Pronto agora nunca mais você terá um erro [HTTP 400] - BAD_REQUEST [11011] - senderName invalid length ou [11012] - senderName invalid value

Veja o código na integra como fica:

{% highlight php linenos %}<?php
$name = preg_replace('/\d/', '', $name);
$name = preg_replace('/[\n\t\r]/', ' ', $name);
$name = preg_replace('/\s(?=\s)/', '', $name);
$name = trim($name);
$name = explode(' ', $name);
 
if(count($name) == 1 ) {
    $name[] = ' dos Santos';
}
$name = implode(' ', $name);{% endhighlight %} 