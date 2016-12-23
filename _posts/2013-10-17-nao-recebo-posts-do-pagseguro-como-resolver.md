---
id: 903
title: Não recebo posts do PagSeguro, como resolver?
date: 2013-10-17T09:04:28+00:00
author: Sena
layout: post
guid: http://sounoob.com.br/?p=903
permalink: /nao-recebo-posts-do-pagseguro-como-resolver/
short-url:
  - http://bit.ly/GQYD1c
dsq_thread_id:
  - "2818906285"
image: /wp-content/uploads/2013/10/Nao-recebo-posts-do-PagSeguro-como-resolver.gif
categories:
  - Dicas
tags:
  - PagSeguro
---
Já faz muito tempo que vejo frases como estas em fóruns, a maioria são ditas por <del style="color: #ff0000;">pseudo-</del>desenvolvedores que já estão putos da vida pelo fato de não entender o motivo de não estar recebendo posts do PagSeguro. Então… vou tentar ajudar, listando alguns passos que devem ser seguidos, serão apenas alguns testes simples mas que poderão fazer a diferença futuramente.<!--more-->

### Faça uma coisa de cada vez

Antes de sair programando igual louco, tente inserir instrução por instrução e ir testando. As vezes uma instrução equivocada no começo do teu código pode fazer a ultima linha dar pau, e o pior você poderá perder muito tempo tentando descobrir a origem do problema. Sendo assim faça por etapas, e vá testando, ative o modo debugger que existe dentro de você, tenha certeza do que está dentro de cada variável

### Sua URL está acessível?

Pode parecer uma pergunta tanto quanto estranha, mas acredite em mim, as vezes <del>a merda d</del>o problema está ai. Deixe apenas uma instrução para exibir na tela do usuário um texto qualquer e peça para um amigo <del>de outro estado ou país,</del> acessar a pagina e ver se ele consegue visualizar o resultado da página. Se seu amigo não conseguir ver, nada poderá ser feito.

### 3xx você não é bem-vindo

Muita gente comete um erro grave ter uma URL para receber informações, e redirecionar para outra URL para fazer o trabalho. Se a URL primária não for fazer o serviço, esqueça ela, trabalhe direto com a URL final. Muitos problemas ocorrem quando fazemos esse redirecionamento de pagina e no meio do caminho esquecemos que os dados que a primeira URL recebeu deve ser enviados para a segunda URL. Então evite usar redirecionamentos.

### Não tenha regras no firewall

Como citado no item anterior a URL deve ser acessível, mas isso não vale aplicar uma restrição para um IP ou para quem segue determinado caminho em seu sistema ou por uso de senhas… a URL deve ser acessível de forma instantânea para qualquer host externo. Esqueça a parte de segurança frenética que você tenha em seu servidor, para esta URL em especifica não poderá ter nenhuma restrição de acesso por parte do seu servidor.

### Seja amigo dos _robots_

Acredite, não é um chinês que fica enviando posts para o seu servidor, é o script pronto que faz esse processo, então se seu servidor realiza bloqueios de robots, altere as configurações para isso não acontecer.

### Não use portas especificas.

Okay, não sei defender este quesito, mas se você usar postas especificas em sua URL poderás ter problemas com o PagSeguro.

### Grave logs de tudo que seja possível (de preferência em arquivo de texto).

Espere. Antes de gravar logs, verifique se sua aplicação consegue gravar log, primeiro tenha na sua pagina APENAS uma instrução onde grava um teste de log. Exemplo: "Teste de log". Realize o teste, se sua aplicação conseguir fazer esta tarefa então próximo passo é mandar gravar todos POSTs e GETs, assim você saberá o que está chegando via POST e o que está chegando via GET. PS: Se você usa PHP clique aqui e veja <a title="Escrevendo um arquivo de texto, usando PHP" href="./escrevendo-um-arquivo-de-texto-usando-php/" target="_blank">como gravar arquivo de log</a>.

### Seu próprio teste.

Já que o PagSeguro não tem um ambiente de testes você mesmo poderá fazer parte do teste. Crie um formulário HTML com os campos que você espera receber, e coloque um valor para cada campo. No action do **<form>** inclua a URL que você usará para receber os dados do PagSeguro. Abra este formulário pelo seu próprio computador ou envie para um servidor diferente do da sua aplicação, acesse o formulário e faça o teste enviando as informações. Se seu log conseguir pegar esses dados significa que você já está meio caminho dado.

### A URL que você informou é a mesma que você está trabalhando?

Pode parecer pergunta para idiotas, mas isso é mais comum do que se imagina, então quando for informar a URL, primeiro acesse ela, verifique se é esta URL mesmo, só então informe para o servidor do PagSeguro ou qualquer outro que esteja trabalhando. Se todos estes testes foram feitos e refeitos e ainda assim seu sistema não recebe nenhuma informação, então o caso pode ser mais grave. Se você lembra de algum passo que pode ser importante verificar coloque nos comentários abaixo que incluiremos na lista.