---
title: Consultar frete utilizando webservice dos correios - PHP
date: 2012-02-08 05:48:51 -02:00
permalink: "/consultar-frete-utilizando-webservice-dos-correios-php/"
categories:
- Tutoriais
tags:
- Correios
- cURL
redirect_from: "/2012/02/08/consultar-frete-utilizando-webservice-dos-correios-php/"
id: 336
author: Sena
layout: post
guid: http://sounoob.com.br/?p=336
short-url:
- http://bit.ly/VjgHoJ
dsq_thread_id:
- '2819540744'
---

Muito utilizado nos e-commerces é a função para calculo de frete, o que dizer de uma loja virtual que não realiza calculo de frete automaticamente, seria péssimo para as vendas, né? Pois bem, você precisa apenas saber que é fácil e que não precisa pagar por esse serviço. Seu sistema poderá realizar a consulta diretamente nos correios de forma totalmente gratuita. Claro que você pode contratar os serviços dos correios, porem nesse caso já é outra história.<!--more-->

Vamos ao que interessa…

Para esse script vamos utilizar a função do cURL para enviar os dados para os correios, e ao receber utilizaremos o simplexml\_load\_string para dar aquela ajudinha na hora de manipular os elementos.

O webservice dos correios irá esperar os dados usando uma string no padrão parametro1=valor2&parametro2=valor2&parametro3=va… Tudo isso enviado via GET.
  
Para o nosso cenário não iremos trabalhar dessa forma porque o código irá ficar muito difícil de se entender o que é o que, então utilizaremos um array para incluir todos os dados e no final usaremos uma função para transformar tudo no padrão correto.

Do que o correios precisa?

Código da sua empresa, se você tiver contrato com os correios saberá qual é esse código… Ele é opcional, se não tiver apenas envie o parâmetro em branco.

{% highlight php linenos %}$data['nCdEmpresa'] = '';{% endhighlight %} 

Senha de acesso ao serviço. Geralmente é os 8 primeiros números do CNPJ correspondente ao código administrativo, caso não tiver é só passar o parâmetro em branco – Se quiser alterar a senha é só clicar aqui - http://www.corporativo.correios.com.br/encomendas/servicosonline/recuperaSenha

{% highlight php linenos %}$data['sDsSenha'] = '';{% endhighlight %} 

Um agora acho que o item mais importante que é o CEP de origem, no caso o CEP de onde sai à encomenda. Esse parametro precisa ser numérico, ou seja, você deverá formatar ele para que não entre o "-" (hífen) espaços ou algo diferente de um número.

{% highlight php linenos %}$data['sCepOrigem'] = '43820080';{% endhighlight %} 

CEP de destino, é o CEP do comprador, para onde irá o produto, esse parâmetro também é somente números.

{% highlight php linenos %}$data['sCepDestino'] = '43810040';{% endhighlight %} 

O peso do produto deverá ser enviado em quilogramas, leve em consideração que isso deverá incluir o peso da embalagem.

{% highlight php linenos %}$data['nVlPeso'] = '1';{% endhighlight %} 

Não sei por qual motivo mas é necessário falar qual formato da encomenda, nesse caso tem apenas duas opções: 1 para caixa / pacote e 2 para rolo/prisma.

{% highlight php linenos %}$data['nCdFormato'] = '1';{% endhighlight %} 

O comprimento, altura, largura e diametro deverá ser informado em centímetros e somente números

{% highlight php linenos %}$data['nVlComprimento'] = '16';
 $data['nVlAltura'] = '5';
 $data['nVlLargura'] = '15';
 $data['nVlDiametro'] = '0';{% endhighlight %} 

Mão própria, nesse parâmetro você informa se quer a encomenda deverá ser entregue somente para uma determinada pessoa após confirmação por RG. Use "s" para declarar e "n" para não declarar.

{% highlight php linenos %}$data['sCdMaoPropria'] = 's';{% endhighlight %} 

O valor declarado serve para o caso de sua encomenda extraviar, então você poderá recuperar o valor dela. Vale lembrar que o valor da encomenda interfere no valor do frete. Se não quiser declarar pode passar 0 (zero).

{% highlight php linenos %}$data['nVlValorDeclarado'] = '200';{% endhighlight %} 

Mão própria, nesse parâmetro você informa se quer a encomenda deverá ser entregue somente para uma determinada pessoa após confirmação por RG. Use "s"para declarar e "n" para não declarar
  
No parâmetro aviso de recebimento, você informa se quer ser avisado sobre a entrega da encomenda. Para não avisar use "n", para avisar use "s".

{% highlight php linenos %}$data['sCdAvisoRecebimento'] = 'n';{% endhighlight %} 

Por ultimo podemos informar qual formato queremos a consulta seja retornada, podendo ser

  * Popup – mostra uma janela pop-up
  * URL – envia os dados via post para a URL informada
  * XML – Retorna a resposta em XML

<div>
  <span style="line-height: 18px;">Nesse caso iremos usar XML para permitir uma personalização maior na hora de mostrar esses dados na tela.</span>
</div>

<div>
</div>

{% highlight php linenos %}$data['StrRetorno'] = 'xml';{% endhighlight %} 

Por fim o código do serviço.

  * 40010 SEDEX sem contrato.
  * 40045 SEDEX a Cobrar, sem contrato.
  * 40126 SEDEX a Cobrar, com contrato.
  * 40215 SEDEX 10, sem contrato.
  * 40290 SEDEX Hoje, sem contrato.
  * 40096 SEDEX com contrato.
  * 40436 SEDEX com contrato.
  * 40444 SEDEX com contrato.
  * 40568 SEDEX com contrato.
  * 40606 SEDEX com contrato.
  * 41106 PAC sem contrato.
  * 41068 PAC com contrato.
  * 81019 e-SEDEX, com contrato.
  * 81027 e-SEDEX Prioritário, com conrato.
  * 81035 e-SEDEX Express, com contrato.
  * 81868 (Grupo 1) e-SEDEX, com contrato.
  * 81833 (Grupo 2) e-SEDEX, com contrato.
  * 81850 (Grupo 3) e-SEDEX, com contrato.

Os serviços marcados com contrato irão necessitar do código da empresa e senha de acesso ao serviço.

{% highlight php linenos %}$data['nCdServico'] = '41106';{% endhighlight %} 

Muitas vezes precisamos consultar mais que um serviço e para evitar fazer várias consultas desnecessárias, os correios deixa como opção você informar todos serviços em uma unica requisição.
  
Para isso envie todos no parâmetro **nCdServico** seguidos de virgual, como mostrado no exemplo abaixo.

{% highlight php linenos %}$data['nCdServico'] = '40010,40045,40215,40290,41106';{% endhighlight %} 

Com todos os dados informados, é hora de tratar o array para converter no formato apropriado para o webservice receber todas informações, para isso usaremos a função **http\_build\_query** onde ele irá converter os dados para o formato http query.

{% highlight php linenos %}$data = http_build_query($data);{% endhighlight %} 

Agora que os dados já estão prontos basta sabermos onde iremos enviar esses dados, nesse caso será o endereço utilizaremos a variavel **$url** para inserir esse endereço.

{% highlight php linenos %}$url = "http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx";{% endhighlight %} 

Já podemos iniciar nossa conexão para isso usaremos o biblioteca **cURL**. Ao inciar iremos passar a URL seguido do http query criado anteriormente estilo get. Nesse caso juntaremos a URL mais o interrogação e os dados, mantendo criando assim o padrão GET.

{% highlight php linenos %}$curl = curl_init($url . '?' .  $data);{% endhighlight %} 

Como nossa intenção realizar uma consulta então precisamos configurar o **cURL** que iremos precisar disso.

{% highlight php linenos %}curl\_setopt($curl, CURLOPT\_RETURNTRANSFER, true);{% endhighlight %} 

Por sorte o webservice dos correios não precisa de muita frescura então podemos inciar a comunicação, e gravaremos o resultado na variavel **$result.**

{% highlight php linenos %}$result = curl_exec($curl);{% endhighlight %} 

Lembrando que no parametro StrRetorno informaos que queremos receber um XML, porem não será fácil manipular esse dados facilmente do jeito que o webservice retornou, para facilitar a vida usaremos a função **simplexml\_load\_string** o qual irá converter o XML em um objeto, assim irá poderemos facilmente navegar por entre os dados.

{% highlight php linenos %}$result = simplexml_load_string($result);{% endhighlight %} 

E agora, como usar os dados retornardos?

Simples: Usaremos um **foreach** para percorrer todos os serviços solicitados e assim pegar os dados seguintes.

{% highlight php linenos %}foreach($result -> cServico as $row) {
 //Os dados de cada serviço estará aqui
}{% endhighlight %} 

Agora dentro do **foreach** podemos pegar os dados de cada serviço o qual estará em **$row**

Código do Serviço de Entrega - É o valor que você passou em nCdServico.

{% highlight php linenos %}echo $row -> Codigo;{% endhighlight %} 

Valor do frete.

{% highlight php linenos %}echo $row -> Valor;{% endhighlight %} 

Prazo para a encomenda ser entregue. Caso retornar zero, significa que ocorreu erro no cálculo.

{% highlight php linenos %}echo $row -> PrazoEntrega;{% endhighlight %} 

Valor do serviço de mão própria**.**

{% highlight php linenos %}echo $row -> ValorMaoPropria;{% endhighlight %} 

Valor do serviço de aviso de recebimento**.**

{% highlight php linenos %}echo $row -> ValorAvisoRecebimento;{% endhighlight %} 

Valor que você passou em nVlValorDeclarado.

{% highlight php linenos %}echo $row -> ValorValorDeclarado;{% endhighlight %} 

Ver se o local possui entrega domiciliar.

{% highlight php linenos %}echo $row -> EntregaDomiciliar;{% endhighlight %} 

Ver se o local possui entrega aos sábados.

{% highlight php linenos %}echo $row -> EntregaSabado;{% endhighlight %} 

Número do erro (caso houver).

{% highlight php linenos %}echo $row -> Erro;{% endhighlight %} 

Descrição do erro (caso houver).

{% highlight php linenos %}echo $row -> MsgErro;{% endhighlight %} 

Como sempre, segue o código na integra…

{% highlight php linenos %}<?php
 $data['nCdEmpresa'] = '';
 $data['sDsSenha'] = '';
 $data['sCepOrigem'] = '43820080';
 $data['sCepDestino'] = '43810040';
 $data['nVlPeso'] = '1';
 $data['nCdFormato'] = '1';
 $data['nVlComprimento'] = '16';
 $data['nVlAltura'] = '5';
 $data['nVlLargura'] = '15';
 $data['nVlDiametro'] = '0';
 $data['sCdMaoPropria'] = 's';
 $data['nVlValorDeclarado'] = '200';
 $data['sCdAvisoRecebimento'] = 'n';
 $data['StrRetorno'] = 'xml';
 //$data['nCdServico'] = '40010';
 $data['nCdServico'] = '40010,40045,40215,40290,41106';
 $data = http_build_query($data);

 $url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx';

 $curl = curl_init($url . '?' . $data);
 curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

 $result = curl_exec($curl);
 $result = simplexml_load_string($result);
 foreach($result -> cServico as $row) {
 //Os dados de cada serviço estará aqui
 if($row -> Erro == 0) {
     echo $row -> Codigo . '<br>';
     echo $row -> Valor . '<br>';
     echo $row -> PrazoEntrega . '<br>';
     echo $row -> ValorMaoPropria . '<br>';
     echo $row -> ValorAvisoRecebimento . '<br>';
     echo $row -> ValorValorDeclarado . '<br>';
     echo $row -> EntregaDomiciliar . '<br>';
     echo $row -> EntregaSabado;
 } else {
     echo $row -> MsgErro;
 }
 echo '<hr>';
 }{% endhighlight %} 

Só lembrando que caso houver dúvidas é só comentar que tentei ajudar até onde for possivel…

Curtiu? Então faz a doação para ajudar o blog… Não gostou? Manda sugestão que tentaremos melhorar.