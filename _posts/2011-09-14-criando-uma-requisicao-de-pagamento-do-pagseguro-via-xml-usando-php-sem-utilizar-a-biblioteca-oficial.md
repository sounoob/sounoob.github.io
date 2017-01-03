---
title: Criando uma requisição de pagamento do PagSeguro via XML usando PHP – Sem utilizar
  a biblioteca oficial
date: 2011-09-14 11:15:51
permalink: "/criando-uma-requisicao-de-pagamento-do-pagseguro-via-xml-usando-php-sem-utilizar-a-biblioteca-oficial/"
categories:
- Tutoriais
tags:
- API Pagamento
- API PagSeguro
- cURL
- PagSeguro
- XML
redirect_from: "/2011/09/14/criando-uma-requisicao-de-pagamento-do-pagseguro-via-xml-usando-php-sem-utilizar-a-biblioteca-oficial/"
id: 139
author: Sena
layout: post
guid: http://sounoob.com.br/?p=139
short-url:
- http://bit.ly/12GOece
dsq_thread_id:
- '2819422718'
---

Um dos maiores pontos fortes da API de pagamento é a possibilidade de enviar os dados, sem que o internauta consiga interceptar e alterar esses dados usando apenas a interface apresentada na tela, sem contar a possibilidade de mudar a URL de redirecionamento (não confunda com a URL de notificação).

<!--more-->O que iremos utilizar para a comunicação irá ser a biblioteca do cURL, e para manipular os dados recebidos vamos usar função simplexml\_load\_string  para transformar o XML em objeto, igual utilizamos para receber as notificações em "

[Recebendo notificações do PagSeguro usando PHP](/recebendo-notificacoes-do-pagseguro-usando-php-sem-utilizar-a-biblioteca-oficial/ "Recebendo notificações do PagSeguro usando PHP – Sem utilizar a biblioteca oficial")". Enfim, vamos ao que interessa… Código…
  
<a name="passo-a-passo"></a>
  
Por questões de segurança o PagSeguro precisa do e-mail e token, então iremos gravar cada um em uma variável

{% highlight php linenos %}$email = 'seuemail@dominio.com.br';
$token = '95112EE828D94278BD394E91C4388F20';{% endhighlight %} 

O e-mail e token serão enviados via GET como na URL mostrada abaixo.

{% highlight php linenos %}https://ws.pagseguro.uol.com.br/v2/checkout/?email=seuemail@dominio.com.br&token=95112EE828D94278BD394E91C4388F20{% endhighlight %} 

Vamos montar nossa URL juntando a variável **$email** e a **$token**, mais a parte fixa da URL ficará algo assim.

{% highlight php linenos %}$url = 'https://ws.pagseguro.uol.com.br/v2/checkout/?email=' . $email . '&token=' . $token;{% endhighlight %} 

O XML a ser enviado vou colocar na variável  **$XML**, para efeito de testes iremos utilizar dados fixos, a forma que você irá montar o XML irá depender da sua criatividade, sugestão, pegar do banco de dados, percorrer o Array (ou objeto) de dados montando o nó item. Se tiver muita demanda posso até escrever sobre isso mais tarde, porem eu acredito que é algo simples de vocês fazerem. Caso alguma alma bondosa quiser montar o tutorial e disponibilizar poderei publicar aqui…<del></del>

{% highlight php linenos %}$xml = '<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
    <checkout>
        <currency>BRL</currency>
        <redirectURL>http://www.minhaloja.com.br/paginaDeRedirecionamento</redirectURL>
        <items>
            <item>
                <id>0001</id>
                <description>Notebook Prata</description>
                <amount>1.00</amount>
                <quantity>1</quantity>
                <weight>1000</weight>
            </item>
            <item>
                <id>0002</id>
                <description>Notebook Rosa</description>
                <amount>2.00</amount>
                <quantity>2</quantity>
                <weight>750</weight>
            </item>
        </items>
        <reference>REF1234</reference>
        <sender>
            <name>José Comprador</name>
            <email>sounoob@comprador.com.br</email>
            <phone>
                <areaCode>11</areaCode>
                <number>55663377</number>
            </phone>
        </sender>
        <shipping>
            <type>1</type>
            <address>
                <street>Rua sem nome</street>
                <number>1384</number>
                <complement>5o andar</complement>
                <district>Jardim Paulistano</district>
                <postalCode>01452002</postalCode>
                <city>Sao Paulo</city>
                <state>SP</state>
                <country>BRA</country>
            </address>
        </shipping>
    </checkout>';{% endhighlight %} 

<span style="color: #000000;">Um campo que merece destaque é o <strong>redirectURL</strong>, onde o mesmo SÓ IRÁ FUNCIONAR SE NA SUA CONTA CONTA ESTIVER MARCADO "<strong><label for="onlyAcceptAPIPayments">Quero receber somente pagamentos via API";</label></strong></span>

Agora vamos chamar o cURL e passar como endereço, a URL que acabamos de montar.

{% highlight php linenos %}$curl = curl_init($url);{% endhighlight %} 

Possivelmente pode ocorrer o seguinte erro: **Fatal error**: Call to undefined function curl_init(); Isso ocorre quando a biblioteca do cURL não está presente no seu servidor, ou está desativada.

Vamos configurar o cURL para não verificar os certificados SSL do PagSeguro.

{% highlight php linenos %}curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);{% endhighlight %} 

Como precisamos da resposta do servidor do PagSeguro então vamos marcar no cURL que é para ele trazer uma resposta.

{% highlight php linenos %}curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);{% endhighlight %} 

O cURL precisa saber que tipo de dados ele está transportando, para isso teremos que alterar o cabeçalho.

{% highlight php linenos %}curl_setopt($curl, CURLOPT_HTTPHEADER, Array('Content-Type: application/xml; charset=ISO-8859-1'));{% endhighlight %} 

E por fim, o mais importante, o XML com os dados que o cURL irá transportar.

{% highlight php linenos %}curl_setopt($curl, CURLOPT_POSTFIELDS, $xml);{% endhighlight %} 

Hora de executar o cURL, ele deverá retornar a resposta do servidor do PagSeguro, que deverá ser um XML, iremos gravar essa informação na variável **$xml**

{% highlight php linenos %}$xml= curl_exec($curl);{% endhighlight %} 

Se por algum acaso seu token ou e-mail estiver errado dentro de **$xml** irá ter o texto: Unauthorized. Nesse caso sugiro redirecionar o comprador para uma pagina mostrando uma tela de erro qualquer, e tentar tratar o erro de alguma forma.

{% highlight php linenos %}if($xml == 'Unauthorized'){
    //Insira seu código avisando que o sistema está com problemas, sugiro enviar um e-mail avisando para alguém fazer a manutenção 

    header('Location: paginaDeErro.php');
    exit;//Mantenha essa linha
}{% endhighlight %} 

Não iremos precisar mais do cURL, então vamos fechar

{% highlight php linenos %}curl_close($curl);{% endhighlight %} 

Caso os dados informados estejam tudo certinho e você tiver passado os parâmetros para o PagSeguro como descrito na documentação oficial, dentro de **$xml** deverá ter algo similar ao abaixo:

{% highlight xml linenos %}<?xml version="1.0" encoding="ISO-8859-1"?>
<checkout>
    <code>8CF4BE7DCECEF0F004A6DFA0A8243412</code>
    <date>2010-12-02T10:11:28.000-02:00</date>
</checkout>{% endhighlight %} 

Caso você tenha passado algum parâmetro inválido você irá receber um XML igual ao abaixo:

{% highlight xml linenos %}<?xml version="1.0" encoding="UTF-8"?>  
<errors>  
    <error>
        <code>11004</code>
        <message>Currency is required.</message>  
    </error>
    <error>
        <code>11005</code>
        <message>Currency invalid value: 100</message>  
    </error>  
</errors>{% endhighlight %} 

Para conseguirmos manipular o XML facilmente, vamos transforma-lo em um objeto.

{% highlight php linenos %}$xml= simplexml_load_string($xml);{% endhighlight %} 

O próximo passo é verificar em qual cenários acima estamos, se é o xml do erro ou se é o xml com o código identificador do pagamento, então chamaremos a função **count** para verificar se ocorreu algum erro.

{% highlight php linenos %}if(count($xml -> error) > 0){
    //Insira seu código avisando que o sistema está com problemas, sugiro enviar um e-mail avisando para alguém fazer a manutenção, talvez seja útil enviar os códigos de erros.

    header('Location: paginaDeErro.php');
    exit;
}{% endhighlight %} 

Se passou do código acima só nos resta pegar o código e redirecionar o comprador para o PagSeguro.

{% highlight php linenos %}header('Location: https://pagseguro.uol.com.br/v2/checkout/payment.html?code=' . $xml -> code);{% endhighlight %} 

Um ponto que vale a pena lembrar, o código gerado na requisição de pagamento, só irá servir para a requisição de pagamento, ele é diferente do código de transação e do código de notificação.

Como sempre, segue abaixo o código na integra:

{% highlight php linenos %}<?php
$email = 'seuemail@seudominio.com.br';
$token = 'EEA7A261333147B3AF644102BF7EED07';
$url = 'https://ws.pagseguro.uol.com.br/v2/checkout/?email=' . $email . '&token=' . $token;
$xml = '<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
    <checkout>
        <currency>BRL</currency>
        <redirectURL>http://www.minhaloja.com.br/paginaDeRedirecionamento</redirectURL>
        <items>
            <item>
                <id>0001</id>
                <description>Notebook Prata</description>
                <amount>1.00</amount>
                <quantity>1</quantity>
                <weight>1000</weight>
            </item>
            <item>
                <id>0002</id>
                <description>Notebook Rosa</description>
                <amount>2.00</amount>
                <quantity>2</quantity>
                <weight>750</weight>
            </item>
        </items>
        <reference>REF1234</reference>
        <sender>
            <name>José Comprador</name>
            <email>sounoob@comprador.com.br</email>
            <phone>
                <areaCode>11</areaCode>
                <number>55663377</number>
            </phone>
        </sender>
        <shipping>
            <type>1</type>
            <address>
                <street>Rua sem nome</street>
                <number>1384</number>
                <complement>5o andar</complement>
                <district>Jardim Paulistano</district>
                <postalCode>01452002</postalCode>
                <city>Sao Paulo</city>
                <state>SP</state>
                <country>BRA</country>
            </address>
        </shipping>
    </checkout>';

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, Array('Content-Type: application/xml; charset=ISO-8859-1'));
curl_setopt($curl, CURLOPT_POSTFIELDS, $xml);
$xml= curl_exec($curl);

if($xml == 'Unauthorized'){
    //Insira seu código avisando que o sistema está com problemas, sugiro enviar um e-mail avisando para alguém fazer a manutenção 

    header('Location: paginaDeErro.php');
    exit;//Mantenha essa linha
}

curl_close($curl);

$xml= simplexml_load_string($xml);

if(count($xml -> error) > 0){
    //Insira seu código avisando que o sistema está com problemas, sugiro enviar um e-mail avisando para alguém fazer a manutenção, talvez seja útil enviar os códigos de erros.
    header('Location: paginaDeErro.php');
    exit;
}

header('Location: https://pagseguro.uol.com.br/v2/checkout/payment.html?code=' . $xml -> code);{% endhighlight %} 

Lembrando que é possível também enviar informações para incluir uma assinatura(cobrança recorrente) tudo nesse mesmo processo.

Veja detalhes em: <a title="Requisição de pagamento do PagSeguro com assinatura associada usando PHP" href="/requisicao-de-pagamento-do-pagseguro-com-assinatura-associada-usando-php/" target="_blank">Requisição de pagamento do PagSeguro com assinatura associada usando PHP</a>

Bom até a próxima, duvidas, sugestões e o qualquer coisa que possa ajudar o blog só comentar abaixo…

Veja outros posts como este aqui:
  
[Utilizando as APIs do PagSeguro e PHP – Sem utilizar a biblioteca oficial.](/utilizando-as-apis-do-pagseguro-e-php-sem-utilizar-a-biblioteca-oficial/ "Utilizando as APIs do PagSeguro e PHP – Sem utilizar a biblioteca oficial.")