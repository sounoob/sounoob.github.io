---
title: API de consulta de transações por código usando PHP - Sem utilizar a biblioteca
  oficial
date: 2012-07-11 14:46:52 -03:00
permalink: "/api-de-consulta-de-transacoes-por-codigo-usando-php-sem-utilizar-a-biblioteca-oficial/"
categories:
- Tutoriais
tags:
- API PagSeguro
- cURL
- PagSeguro
- XML
redirect_from: 2012/07/11/api-de-consulta-de-transacoes-por-codigo-usando-php-sem-utilizar-a-biblioteca-oficial/
id: 384
author: Sena
layout: post
guid: http://sounoob.com.br/?p=384
short-url:
- http://bit.ly/12PHehJ
dsq_thread_id:
- '2819597866'
---

Uma das vantagens de utilizar a API de consulta de transações por código é a opção de poder consultar o detalhe da transação quando der na teia, até mesmo antes de <a title="Recebendo notificações do PagSeguro usando PHP – Sem utilizar a biblioteca oficial" href="/recebendo-notificacoes-do-pagseguro-usando-php-sem-utilizar-a-biblioteca-oficial/" target="_blank">receber notificações da API de notificações</a>, sem contar que pode ser usada em conjunto com outras APIs, tornado sua integração mais "poderosa".

Talvez você deva estar se perguntando: É difícil? Eu respondo que não. Ela é uma das APIs do PagSeguro mais fácil de trabalhar, e podemos utilizar a mesma lógica usada na [API de notificações](/recebendo-notificacoes-do-pagseguro-usando-php-sem-utilizar-a-biblioteca-oficial/ "Recebendo notificações do PagSeguro usando PHP – Sem utilizar a biblioteca oficial").<!--more-->

Basicamente o PagSeguro requer 3 dados o e-mail, token e o código da transação, sendo assim vamos inserir cada informação suas respectivas variáveis.

{% highlight php linenos %}$email = 'seuemail@dominio.com.br';
$token = '95112EE828D94278BD394E91C4388F20';
$transaction = 'G88B885A-7C3F-436C-XX49-049D0F1A9DXX';{% endhighlight %} 

Essas informações deverão ser enviadas para o PagSeguro utilizando o método GET (aquele que você envia todos dados diretamente pela URL como no exemplo abaixo:

<address>
  https://ws.pagseguro.uol.com.br/v2/transactions/9E884542-81B3-4419-9A75-BCC6FB495EF1?email=seuemail@dominio.com.br&token=95112EE828D94278BD394E91C4388F20
</address>

Vamos montar nossa URL igual ao exemplo, utilizando nossas variáveis:

{% highlight php linenos %}$url = 'https://ws.pagseguro.uol.com.br/v2/transactions/' . $transaction . '?email=' . $email . '&token=' . $token;{% endhighlight %} 

Com as informações prontas basta apenas enviar tudo paro PagSeguro. Usaremos o cURL como de costume, para isso vamos iniciar a lib.

Para facilitar usarei a função do tutorial <a title="cURL. Feita para usar e abusar" href="/curl-usando-e-abusando/#curlExec" target="_blank">sobre cURL (Clique aqui para ver) </a>e gravar a resposta dentro de uma variável.

{% highlight php linenos %}$transaction = curlExec($url);{% endhighlight %} 

Caso seu e-mail e token esteja incorreto o PagSeguro irá retornar uma string com o texto "Unauthorized", nesse caso é precisamos fazer uma validação e tratar esse ponto.

{% highlight php linenos %}if($transaction == 'Unauthorized') {
    //Insira seu código avisando que o sistema está com problemas
    //sugiro enviar um e-mail avisando para alguém fazer a manutenção
    exit;//Mantenha essa linha para evitar que o código prossiga
}{% endhighlight %} 

A partir desse ponto os dados provavelmente deverá estar no formato XML, portanto usaremos a função **simplexml\_load\_string** para manipula-lo

{% highlight php linenos %}$transaction = simplexml_load_string($transaction);{% endhighlight %} 

O PagSeguro ainda poderá mostra erros nesse caso precisamos criar outra validação igual à mostrada abaixo:

{% highlight php linenos %}if(count($transaction -> error) > 0) {
    //Insira seu código avisando que o sistema está com problemas
    //sugiro enviar um e-mail avisando para alguém fazer a manutenção
    var_dump($transaction);
}{% endhighlight %} 

Caso não tenha erros é só pegar pegar os dados os quais sua aplicação precisa, respeitando a hierarquia do XML <a href="https://pagseguro.uol.com.br/v2/guia-de-integracao/consulta-de-transacoes-por-codigo.html#v2-item-consulta-de-transacoes-por-codigo-parametros-resposta" target="_blank">retornado do PagSeguro</a>.

Uma forma fácil de pegar as informações é olhar a <a href="https://pagseguro.uol.com.br/v2/guia-de-integracao/consulta-de-transacoes-por-codigo.html#v2-item-consulta-de-transacoes-por-codigo-parametros-resposta" target="_blank">tabela de parâmetros de resposta do PagSeguro</a> onde na coluna "Campo" (Primeira coluna) já possui a hierarquia correta de cada informação. Utilize o mesmo padrão para pegar os dados. Veja no exemplo abaixo como pegar por exemplo o e-mail do comprador:

Como está na <a href="https://pagseguro.uol.com.br/v2/guia-de-integracao/consulta-de-transacoes-por-codigo.html#v2-item-consulta-de-transacoes-por-codigo-parametros-resposta" target="_blank">tabela de parâmetros de resposta do PagSeguro</a>:

Como iremos pegar esse dado:

{% highlight php linenos %}echo $transaction -> sender -> email;{% endhighlight %} 

Bom, veja como que ficou tudo:

{% highlight php linenos %}$email = 'seuemail@dominio.com.br';
$token = '95112EE828D94278BD394E91C4388F20';
$transaction = 'G88B885A-7C3F-436C-XX49-049D0F1A9DXX';

$url = 'https://ws.pagseguro.uol.com.br/v2/transactions/' . $transaction . '?email=' . $email . '&token=' . $token;

$transaction = curlExec($url);

if($transaction == 'Unauthorized') {
    //Insira seu código avisando que o sistema está com problemas
    //sugiro enviar um e-mail avisando para alguém fazer a manutenção
    echo 'You shall not pass';
    exit;//Mantenha essa linha para evitar que o código prossiga
}

$transaction = simplexml_load_string($transaction);

if(count($transaction -> error) > 0) {
   //Insira seu código avisando que o sistema está com problemas, sugiro enviar um e-mail avisando para alguém fazer a manutenção
   var_dump($transaction);
}
echo $transaction -> sender -> email;{% endhighlight %} 

Bom acho que é isso… Qualquer dúvida postem nos comentários abaixo. Curtiu, gostou e quer ajudar o projeto não esqueça de fazer sua doação 🙂

Veja outros posts como este aqui:
  
[Utilizando as APIs do PagSeguro e PHP – Sem utilizar a biblioteca oficial.](/utilizando-as-apis-do-pagseguro-e-php-sem-utilizar-a-biblioteca-oficial/ "Utilizando as APIs do PagSeguro e PHP – Sem utilizar a biblioteca oficial.")