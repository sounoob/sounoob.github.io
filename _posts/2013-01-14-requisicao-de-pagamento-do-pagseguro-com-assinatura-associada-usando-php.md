---
title: Requisição de pagamento do PagSeguro com assinatura associada usando PHP
date: 2013-01-14 04:01:21 Z
permalink: "/requisicao-de-pagamento-do-pagseguro-com-assinatura-associada-usando-php/"
redirect_from: "/2013/01/14/requisicao-de-pagamento-do-pagseguro-com-assinatura-associada-usando-php/"
categories:
- Tutoriais
tags:
- API Pagamento
- API PagSeguro
- PagSeguro
- recorrencia
redirect_from: "/2013/01/14/requisicao-de-pagamento-do-pagseguro-com-assinatura-associada-usando-php/"
id: 670
author: Sena
layout: post
guid: http://sounoob.com.br/?p=670
short-url:
- http://bit.ly/VjaIAg
dsq_thread_id:
- '2819814646'
---

Agora a API de pagamentos conta com um novo "Upgrade", que é a possibilidade de fazer uma requisição e incluir um pagamento recorrente tudo em "uma tacada só" . Para isso usaremos o que já foi descrito aqui em no tutorial para <a title="Criando uma requisição de pagamento do PagSeguro via parametros HTTP usando PHP – Sem utilizar a biblioteca oficial" href="./criando-uma-requisicao-de-pagamento-do-pagseguro-via-parametros-http-usando-php-sem-utilizar-a-biblioteca-oficial/" target="_blank">Criando requisição de pagamento via HTTP</a> e <a title="Criando uma requisição de pagamento do PagSeguro via XML usando PHP – Sem utilizar a biblioteca oficial" href="./criando-uma-requisicao-de-pagamento-do-pagseguro-via-xml-usando-php-sem-utilizar-a-biblioteca-oficial/" target="_blank">Criando requisição de pagamento via XML</a>  será necessário apenas incluir uns dados adicionais para enviar ao PagSeguro, o resto segue do mesmo jeito.<!--more-->

No outro tutorial usamos array **$data** para enviar todos os dados, então continuaremos usar o mesmo campo para passar os dados referente a recorrência, no caso do XML criaremos uma tag e chamaremos de **preApproval **essa tag deverá estar dentro da tag **checkout**, depois incluiremos todos parâmetros lá dentro.

Primeiro vou mostrar o pedaço do código em PHP, na linha de baixo o XML, e depois a explicação, espero que fique de fácil compreensão.

{% highlight php linenos %}$data['preApprovalCharge'] = 'manual';{% endhighlight %} 

{% highlight php linenos %}<charge>manual</charge>{% endhighlight %} 

A primeira coisa que se deve definir é isso, é configurar sua recorrência para cobrança manual, seria na verdade uma pré-aprovação.

{% highlight php linenos %}$data['preApprovalName'] = 'Super seguro para notebook';{% endhighlight %} 

{% highlight php linenos %}<name>Super seguro para notebook</name>{% endhighlight %} 

Serve para mostrar ao comprador do que se trata a assinatura. Esse campo é obrigatório e aceita até 100 caracteres, lembrando que apesar de ser livre o PagSeguro irá remover os caracteres < (menor que) ou > (maior que) se encontrar no seu texto, então não use.

{% highlight php linenos %}$data['preApprovalDetails'] = 'Toda segunda feira será cobrado o valor de R$150,00 para o seguro do notebook';{% endhighlight %} 

{% highlight php linenos %}<details>Toda segunda feira será cobrado o valor de R$150,00 para o seguro do notebook</details>{% endhighlight %} 

Mais detalhes do que é a assinatura em questão, mas cuidado para não abusar de detalhes, esse campo só aceita 255 caracteres, semelhante ao **preApprovalName** o PagSeguro irá remover os caracteres < (menor que) ou > (maior que).

{% highlight php linenos %}$data['preApprovalAmountPerPayment'] = '150.00';{% endhighlight %} 

{% highlight php linenos %}<amountPerPayment>150.00</amountPerPayment>{% endhighlight %} 

Valor exato de cada cobrança, como padrão do PagSeguro todos campos referente a valores deverão ser decimal com duas casas decimais separadas por ponto. Não um erro muito comum é as pessoas utilizarem virgulas o que irá resultar erro. Nesse campo você deverá passa um valor entre 1.00 e 1000000.00, qualquer coisa diferente disso poderá ocorrer erro.

{% highlight php linenos %}$data['preApprovalPeriod'] = 'WEEKLY';{% endhighlight %} 

{% highlight php linenos %}<period>WEEKLY</period>{% endhighlight %} 

Um dos campos que devem ter muita atenção é esse, porque ele irá determinar qual periodicidade que a cobrança será feita, imagina você cobrar seu cliente todo ano ao invés de todo mês, então cuidado. Não preciso nem falar que esse é um campo obrigatório, afinal sem ele não dá para saber qual periodicidade será a recorrência. Nesse campo você poderá usar:

  * <strong style="line-height: 22px;">WEEKLY</strong> para toda semana;
  * <strong style="line-height: 22px;">MONTHLY</strong> para todo mês;
  * <strong style="line-height: 22px;">BIMONTHLY</strong> para a cada dois meses;
  * <strong style="line-height: 22px;">TRIMONTHLY</strong> para cada três meses;
  * <strong style="line-height: 22px;">SEMIANNUALLY</strong> a cada seis meses.
  * <strong style="line-height: 22px;">YEARLY</strong> para cada ano;

Esse é um campo case insensitive, ou seja não importa se os valores estão maiúsculo ou minusculo, o PagSeguro irá reconhece-los.

{% highlight php linenos %}$data['preApprovalDayOfWeek'] = 'MONDAY';{% endhighlight %} 

{% highlight php linenos %}<dayOfWeek>MONDAY</dayOfWeek>{% endhighlight %} 

Utilize esse campo caso no parâmetro **preApprovalPeriod** esteja configurado como **WEEKLY**; Os parâmetros que podem ser passados são:

  * **MONDAY** para toda Segunda-Feira;
  * **TUESDAY **para toda Terça-Feira;
  * **WEDNESDAY **para toda Quarta-Feira;
  * **THURSDAY **para toda Quinta-Feira;
  * **FRIDAY **para toda Sexta-Feira;
  * **SATURDAY **para todo Sábado;
  * **SUNDAY **para todo Domingo;

{% highlight php linenos %}$data['preApprovalDayOfMonth'] = 1;{% endhighlight %} 

{% highlight php linenos %}<dayOfMonth>1</dayOfMonth>{% endhighlight %} 

Utilize esse campo caso no parâmetro **preApprovalPeriod **esteja configurado como **MONTHLY**, ****BIMONTHLY**** ou ****TRIMONTHLY****. Nesse campo você pode enviar um valor inteiro entre 1 e 28 <span style="color: #ff0000;" data-mce-mark="1"><del>(Okay sua cobrança nunca poderá ocorrer dias 29, 30 ou 31. Não insista rs )</del></span>

{% highlight php linenos %}$data['preApprovalDayOfYear'] = '03-12';{% endhighlight %} 

{% highlight php linenos %}<dayOfYear>03-12</dayOfYear>{% endhighlight %} 

Utilize esse campo caso no parâmetro **preApprovalPeriod **esteja configurado como **YEARLY**. Nesse campo você deve enviar o dia e mês em que ocorrerá a cobrança, lembrando que no PagSeguro primeiro vem o mês, depois o dia, seguindo o formato **MM-dd**

{% highlight php linenos %}$data['preApprovalInitialDate' ] = '2015-01-17T19:20:30.45-03:00';{% endhighlight %} 

{% highlight php linenos %}<initialDate>2015-01-17T19:20:30.45-03:00</initialDate>{% endhighlight %} 

Esse é um parâmetro interessante, ele define quando que será o inicio da vigência da assinatura, assim seu sistema poderá enviar todos dados para o PagSeguro e só começar a cobrar tempos depois, será muito útil em promoções do tipo, compre agora e comece a pagar somente depois do carnaval…
  
Valores desse parâmetro deve seguir o formato **YYYY-MM-DDThh:mm:ss.sTZD** <a title="clique para ver regras veja detalhes no site W3C" href="http://www.w3.org/TR/NOTE-datetime" target="_blank">clique para ver regras veja detalhes no site W3C</a>, lembrando que a data não deverá ser inferior a data atual, e não poderá ser superior a dois anos da data atual.

{% highlight php linenos %}$data['preApprovalFinalDate'] = '2017-01-17T19:20:30.45-03:00';{% endhighlight %} 

{% highlight php linenos %}<finalDate>2017-01-17T19:20:30.45-03:00</finalDate>{% endhighlight %} 

Semelhante ao parâmetro **preApprovalInitialDate** com diferença que este define qual será o final da vigência da assinatura, essa data obviamente deverá não ser inferior a data atual, e não poderá ser superior até dois anos da data atual. Caso o parâmetro **preApprovalInitialDate** foi definido o **preApprovalFinalDate** deverá ser superior a data definida em **preApprovalInitialDate**, e poderá ser superior até dois anos da **preApprovalInitialDate**

{% highlight php linenos %}$data['preApprovalMaxAmountPerPeriod'] = '200.00';{% endhighlight %} 

{% highlight php linenos %}<maxAmountPerPeriod>200.00</maxAmountPerPeriod>{% endhighlight %} 

Nesse parâmetro deve ser informado qual valor total máximo que o PagSeguro irá cobrar dentro do período. Esse campo deverá ser decimal com duas casas decimais separadas por ponto. Nesse campo você deverá passa um valor entre 1.00 e 2000.00.

{% highlight php linenos %}$data['preApprovalMaxTotalAmount'] = '900.00';{% endhighlight %} 

{% highlight php linenos %}<maxTotalAmount>900.00</maxTotalAmount>{% endhighlight %} 

Nesse parâmetro deve ser informado qual valor total máximo que o PagSeguro irá cobrar enquanto a assinatura for válida. Como todo campo de moeda esse deverá ser decimal com duas casas decimais separadas por ponto. Nesse campo você deverá passa um valor entre 1.00 e 35000.00.

{% highlight php linenos %}$data['reviewURL'] = 'http://sounoob.com.br/produto1';{% endhighlight %} 

{% highlight php linenos %}<reviewURL>http://sounoob.com.br/produto1</reviewURL>{% endhighlight %} 

Na documentação esse parâmetros deveria ser para informar a URL onde o usuário possa ver as regras da assinatura, mas… depois de testes eu vi que esse link aparece em: "Assinatura - alterar", sendo assim ele possivelmente possa ser utilizado para dar outras opções ao assinante, como alteração de datas e afins…

Enfim, suponhamos que temos que criar uma assinatura com periodicidade semanal nosso array **$data** estaria com os seguintes campos adicionais:

{% highlight php linenos %}$data['preApprovalCharge'] = 'auto';
$data['preApprovalName'] = 'Super seguro para notebook';
$data['preApprovalDetails'] = 'Todo dia 15 será cobrado o valor de R$150,00 para o seguro do notebook';
$data['preApprovalAmountPerPayment'] = '150.00';
$data['preApprovalPeriod'] = 'WEEKLY';
$data['preApprovalDayOfWeek'] = 'MONDAY';
$data['preApprovalInitialDate' ] = '2015-01-17T19:20:30.45+01:00';
$data['preApprovalFinalDate'] = '2017-01-17T19:20:30.45+01:00';
$data['preApprovalMaxAmountPerPeriod'] = '200.00';
$data['preApprovalMaxTotalAmount'] = '900.00';
$data['reviewURL'] = 'http://sounoob.com.br/produto1';{% endhighlight %} 

Já o XML terá uma nova tag dentro da tab **checkout** chamada **preApproval**

{% highlight php linenos %}<preApproval>
    <charge>auto</charge>
    <name>Super seguro para notebook</name>
    <details>Toda segunda feira será cobrado o valor de R$150,00 para o seguro do notebook</details>
    <amountPerPayment>150.00</amountPerPayment>
    <period>WEEKLY</period>
    <dayOfWeek>MONDAY</dayOfWeek>
    <initialDate>2015-01-17T19:20:30.45-03:00</initialDate>
    <finalDate>2017-01-17T19:20:30.45-03:00</finalDate>
    <maxAmountPerPeriod>200.00</maxAmountPerPeriod>
    <maxTotalAmount>900.00</maxTotalAmount>
    <reviewURL>http://sounoob.com.br/produto1</reviewURL>
</preApproval>{% endhighlight %} 

Feito isso é só enviar a requisição da mesma forma mostrada <a title="Criando uma requisição de pagamento do PagSeguro via parametros HTTP usando PHP – Sem utilizar a biblioteca oficial" href="./criando-uma-requisicao-de-pagamento-do-pagseguro-via-parametros-http-usando-php-sem-utilizar-a-biblioteca-oficial/" target="_blank">Criando requisição de pagamento via HTTP</a> ou <a title="Criando uma requisição de pagamento do PagSeguro via XML usando PHP – Sem utilizar a biblioteca oficial" href="./criando-uma-requisicao-de-pagamento-do-pagseguro-via-xml-usando-php-sem-utilizar-a-biblioteca-oficial/" target="_blank">Criando requisição de pagamento via XML</a>

Veja outros posts como este aqui:
  
[Utilizando as APIs do PagSeguro e PHP – Sem utilizar a biblioteca oficial.](./utilizando-as-apis-do-pagseguro-e-php-sem-utilizar-a-biblioteca-oficial/ "Utilizando as APIs do PagSeguro e PHP – Sem utilizar a biblioteca oficial.")