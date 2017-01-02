---
title: If, else e ternário no PHP
date: 2013-06-15 14:15:54 Z
permalink: "/if-else-e-ternario-no-php/"
redirect_from: "/2013/06/15/if-else-e-ternario-no-php/"
categories:
- Aulas
id: 851
author: Sena
layout: post
guid: http://sounoob.com.br/?p=851
short-url:
- http://bit.ly/141OZyI
dsq_thread_id:
- '2824237290'
dsq_needs_sync:
- '1'
---

If, else e o ternário sem dúvida o são os recursos mais utilizados no PHP e na maioria das linguagens, afinal é o que deixa o sistema mais "inteligente", afim de o código tomar algumas decisões com base as condições que foi previamente programado.<!--more-->


  
<a name="if"></a>

### Vou começar explicando o if.

Imagine que você tem uma variável chamada nome, o qual poderá conter qualquer nome. Para todo mundo você deverá mostrar o texto "You shall not pass", porém se o valor foi igual à "Gandalf", então, você irá mostrar o texto: "Welcome".

Com o **if** isso é possível de forma muito simples. Basta escrever **if** depois entre parenteses você inclui a condição especifica, logo em seguida entre chaves você inclui o que quer que seja feito caso a condição seja verdadeira. Veja o exemplo abaixo:

{% highlight php linenos %}$nome = 'Balrog';
$saudacao = 'You shall not pass';

if($nome == 'Gandalf'){
    $saudacao = 'Welcome';
}
echo $nome . ', ' . $saudacao;{% endhighlight %} 

Vou tentar explicar esse pedaço de código: 1º linha criamos uma variável que foi atribuído para ela um o texto "Gandalf"; 2º Linha criamos outra variável com uma saudação "You shall not pass"; 3º Linha que deixamos o sistema um pouco mais "inteligente", fazendo a verificação se o conteúdo da variável é igual ao texto "Gandalf"; 4º Linha alteramos o conteúdo da variável para "Welcome"; 6º Linha mostramos na tela o conteúdo da variável **$nome** seguido de virgula depois o conteúdo da variável **$saudacao**;

Se você executar esse código provavelmente terá um texto na sua tela "Balrog, You shall not pass".

O que ocorreu?
  
O conteúdo da variável foi diferente da condição imposta, tente alterar na linha 1 o conteúdo da variável **$nome** para "Gandalf" e veja o que acontece.

Você deve ter notado que utilizamos duas vezes o sinal de = no momento da condição, dai você lembrou do [operador de atribuição](./operadores-de-atribuicao-no-php/ "Operadores de Atribuição no PHP") e deve estar se perguntando <del style="color: #ff0000;" datetime="2013-06-15T16:11:18+00:00">WTF is it?</del> o que é isso? Não criemos pânico, deixe me explicar: Quando utilizamos somente um sinal de igual (=) estamos atribuindo algo para a variável, quando utilizamos dois sinais de iguais (**==**) então estamos comparando o que está a direita, com o que está na esquerda, o resultado disso será um valor booleano (TRUE ou FALSE).

Estamos entendidos? Então vamos ao segundo nivel: O else
  
<a name="else"></a>

### O que é esse tal de else.

O **else** é bem mais simples do que se imagina, a grosso modo seria um complemento do **if**, note que no **if** temos uma condição que caso seja verdadeira então deverá ser executado um determinado código, mas e se você quiser executar um outro código caso a condição seja falsa? Nesse caso existe o **else**.
  
Imagine o seguinte caso: Eu e um amigo possuímos 20 reais e 32 centavos cada um, apostei que o preço do pão era dois reais, se eu ganhasse ele me pagaria 10 reais e 50 centavos, caso contrario eu pagaria para ele. Vamos ver como fica?

{% highlight php linenos %}$meuDinheiro = 20.32;
$dinheiroDoAmigo = 20.32;
$precoDoPao = 2.00;
$meuChute = 2.00;
$valorDaAposta = 10.50;

if($precoDoPao == $meuChute) {
    $dinheiroDoAmigo -= $valorDaAposta;
    $meuDinheiro += $valorDaAposta;
}else{
    $meuDinheiro -= $valorDaAposta;
    $dinheiroDoAmigo += $valorDaAposta;
}

echo 'Meu dinheiro: ' . $meuDinheiro;
echo ' dinheiro do amigo: ' . $dinheiroDoAmigo;{% endhighlight %} 

Bom, note que montamos a estrutura do **if** normalmente e ao final adicionamos **else** e entre parenteses incluímos o queremos que ocorra caso a condição do **if** seja falsa.
  
<a name="ternario"></a>

### Ternário

Muitos casos iremos apenas realizar um processo de condição simples, que não requer muitas linhas de códigos para realizar essa operação, então podemos usar o ternário que tem a ideia do **if **e **else** juntos só que de uma forma contraída e um pouco mais limitada.
  
Para isso primeiro incluímos a condição, seguida de interrogação (**?**) instrução caso verdadeiro seguido de dois pontos (**:**) e finalmente a instrução caso falso. Veja no exemplo abaixo.

{% highlight php linenos %}$idade = 17;
$idadeMinima = 18;
echo $idade < $idadeMinima ? 'Você não pode ver esse site' : 'Você pode ver esse site';{% endhighlight %} 