---
title: Tipos básicos de variáveis e constantes no PHP
date: 2013-06-12 19:02:17 -03:00
permalink: "/tipos-basicos-de-variaveis-e-constantes-no-php/"
categories:
- Aulas
redirect_from: "/2013/06/22/tipos-basicos-de-variaveis-e-constantes-no-php/"
id: 811
author: Sena
layout: post
guid: http://sounoob.com.br/?p=811
short-url:
- http://bit.ly/11aEIS4
dsq_thread_id:
- '2821890774'
---

Existem vários tipos de dados, porem iremos focar apenas nos quatros tipos básico e outra hora podemos falar sobre cada um dos outros tipo especificamente.<!--more-->

Os quatro tipos básicos são:

  * [String](#string "Tipo string")
  * [Integer](#integer "Tipo string")
  * [Float](#float "Tipo string")
  * [Boolean](#boolean "Tipo string")

Vamos detalhar e exemplificar cada um deles?

## <a name="string"></a>String

Podemos incluir basicamente qualquer coisa, incluiremos letras, números, caracteres especiais. A restrição é que usemos aspas para começar e para terminar (Este é o único tipo que precisamos incluir um aspas para começar e terminar a informação). Veja o exemplo:

{% highlight php linenos %}$string = "Textos com acentuação, 1 número e interrogação?";//Variavel
  
define("string", "Textos com acentuação, 1 número e interrogação?");//Constante{% endhighlight %} 

## <a name="integer"></a>Integer

Esse tipo aceita qualquer número inteiro, como aprendemos na escola são os números tanto negativos, quanto positivos. Veja o exemplo:

{% highlight php linenos %}$integer = 500;
  
define("integer", 500);{% endhighlight %} 

## <a name="float"></a>Float

Trabalha com os números reais, aqueles com casas decimais, semelhante ao **Interger** O sinal separa as casas deve ser o ponto final (.) Não use virgula. Exemplo:

{% highlight php linenos %}$float = 500.99;
  
define("float", 500.99);{% endhighlight %} 

## <a name="boolean"></a>Boolean

Talvez esse seja um dos que tem mais o nome estranho, porem é o mais simples. Ele só aceita valores como TRUE ou FALSE.
  
Seria como TRUE para verdadeiro, e FALSE para falso. Exemplo:

{% highlight php linenos %}$boolean = TRUE;
  
define("boolean", TRUE);{% endhighlight %} 

Veja outros posts como este aqui:
  
[PHP para noobs](/php-para-noobs/ "PHP para Noobs")