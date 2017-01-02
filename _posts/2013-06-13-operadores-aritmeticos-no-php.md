---
title: Operadores Aritméticos no PHP
date: 2013-06-13 06:39:05 Z
permalink: "/operadores-aritmeticos-no-php/"
redirect_from: "/2013/06/13/operadores-aritmeticos-no-php/"
categories:
- Aulas
id: 809
author: Sena
layout: post
guid: http://sounoob.com.br/?p=809
short-url:
- http://bit.ly/14Zm7WK
dsq_thread_id:
- '2833700567'
---

Se você não sabe o que são os "Operadores Aritméticos" significa que você provavelmente fugiu da escola… Bom isso não importa, tentarei mostrar no PHP como usá-los de uma forma bem simples.

Para você que não sabe, operadores aritméticos são simbolos que representam alguma coisa na matemática, dentre elas a adição (**+**), subtração (**-**), multiplicação (*****) e divisão (**/**). No caso do PHP incluiremos o simbolo **%** que representará o resto da divisão.<!--more-->

Pronto, agora o PHP já conseguirá realizar cálculos de álgebra básica. Vamos ver como funciona?

## Adição

{% highlight php linenos %}$numero1 = 10; //Primeiro número
  
$numero2 = 3; // Segundo número
  
$resultado = $numero1 + $numero2; // Realizando o calculo
  
echo $numero1 . " + " . $numero2 . " = " . $resultado; //Mostrando resultado{% endhighlight %} 

## Subtração

{% highlight php linenos %}$numero1 = 10; //Primeiro número
  
$numero2 = 3; // Segundo número
  
$resultado = $numero1 - $numero2; // Realizando o calculo
  
echo $numero1 . " - " . $numero2 . " = " . $resultado; //Mostrando resultado{% endhighlight %} 

## Multiplicação

{% highlight php linenos %}$numero1 = 10; //Primeiro número
  
$numero2 = 3; // Segundo número
  
$resultado = $numero1 * $numero2; // Realizando o calculo
  
echo $numero1 . " * " . $numero2 . " = " . $resultado; //Mostrando resultado{% endhighlight %} 

## Divisão

{% highlight php linenos %}$numero1 = 10; //Primeiro número
  
$numero2 = 3; // Segundo número
  
$resultado = $numero1 / $numero2; // Realizando o calculo
  
echo $numero1 . " / " . $numero2 . " = " . $resultado; //Mostrando resultado{% endhighlight %} 

## Resto da divisão

{% highlight php linenos %}$numero1 = 10; //Primeiro número
  
$numero2 = 3; // Segundo número
  
$resultado = $numero1 % $numero2; // Realizando o calculo
  
echo $numero1 . " % " . $numero2 . " = " . $resultado; //Mostrando resultado{% endhighlight %} 

Simples né? Bom, assim como na matemática o PHP consegue realizar cálculos utilizando vários operadores ao mesmo tempo <del style="color: #f00;" datetime="2013-06-13T09:05:56+00:00">vulgo expressões matemáticas</del>, vamos ver alguns exemplos?

{% highlight php linenos %}echo 200 + 20 - 50 % 3 * 3 / 8;{% endhighlight %} 

Assim como na matemática, os operadores de tem uma certa prioridade na hora de realizar o calculo, logo ele tentará calcular a Divisão ou multiplicação ou módulo (O que vier primeiro), depois calculará o resto das operações.

Claro que você pode controlar isso utilizando parenteses, informando assim o que irá ser calculado primeiro, veja o exemplo abaixo:

{% highlight php linenos %}echo 200 + (20 - 50) % 3 * 3 / 8;{% endhighlight %} 

Veja outros posts como este aqui:
  
[PHP para noobs](./php-para-noobs/ "PHP para Noobs")