---
title: Não recebo posts do PagSeguro, como resolver?
date: 2013-10-17T09:04:28.000+00:00
permalink: "/nao-recebo-posts-do-pagseguro-como-resolver/"
categories:
- Dicas
tags:
- PagSeguro
redirect_from: "/2013/10/17/nao-recebo-posts-do-pagseguro-como-resolver/"
id: "903"
author: Sena
layout: post
guid: http://sounoob.com.br/?p=903
short-url:
- http://bit.ly/GQYD1c
dsq_thread_id:
- '2818906285'
image: "/assets/uploads/2013/10/Nao-recebo-posts-do-PagSeguro-como-resolver.gif"

---
Já faz muito tempo que vejo frases como estas em fóruns, a maioria são ditas por <del style="color: #ff0000;">pseudo-</del>desenvolvedores que já estão putos da vida pelo fato de não entender o motivo de não estar recebendo posts do PagSeguro. Então… vou tentar ajudar, listando alguns passos que devem ser seguidos, serão apenas alguns testes simples mas que poderão fazer a diferença futuramente.<!--more-->

### Você configurou corretamente?

Antes de mais nada, verifique se está configurado em sua conta uma URL para receber essas notificações.

* Produção: [https://pagseguro.uol.com.br/preferencias/integracoes.jhtml#frmTransactionNotification](https://pagseguro.uol.com.br/preferencias/integracoes.jhtml#frmTransactionNotification "https://pagseguro.uol.com.br/preferencias/integracoes.jhtml#frmTransactionNotification"){:target="_blank"}
* Sandbox: [https://sandbox.pagseguro.uol.com.br/vendedor/configuracoes.html#page-seller-data](https://sandbox.pagseguro.uol.com.br/vendedor/configuracoes.html#page-seller-data "https://sandbox.pagseguro.uol.com.br/vendedor/configuracoes.html#page-seller-data"){:target="_blank"}

Além desta opção a maioria das APIs aceitam um parâmetro chamado `notificationURL`, o qual pode sobrescrever as configurações da sua conta (as do link acima).

### O problema é seu ou do PagSeguro?

Use um serviço de terceiros para capturar a requisição e monitore o que chegou.
Se não funcionar, dê print e envie para o PagSeguro como evidência que a ferramenta deles não está funcionando.

Minha recomendação é o [Webhook.site](https://webhook.site/ "Webhook.site"){:target="_blank"}, você gera uma URL, configura para receber a notificação e monitora o resultado. Se passar desse ponto, de fato o problema está contigo, então siga os outros passos.

### Faça uma coisa de cada vez

Antes de sair programando igual louco, tente inserir instrução por instrução e ir testando. As vezes uma instrução equivocada no começo do teu código pode fazer a ultima linha dar pau, e o pior você poderá perder muito tempo tentando descobrir a origem do problema. Sendo assim faça por etapas, e vá testando, ative o modo debugger que existe dentro de você, tenha certeza do que está dentro de cada variável

### Sua URL está acessível?

Pode parecer uma pergunta tanto quanto estranha, mas acredite em mim, as vezes <del>a merda</del> do problema está ai. Deixe apenas uma instrução para exibir na tela do usuário um texto qualquer e peça para um amigo <del>de outro estado ou país,</del> acessar a pagina e ver se ele consegue visualizar o resultado da página. Se seu amigo não conseguir ver, nada poderá ser feito.

### 3xx você não é bem-vindo

Muita gente comete um erro grave ter uma URL para receber informações, e redirecionar para outra URL para fazer o trabalho. Se a URL primária não for fazer o serviço, esqueça ela, trabalhe direto com a URL final. Muitos problemas ocorrem quando fazemos esse redirecionamento de pagina e no meio do caminho esquecemos que os dados que a primeira URL recebeu deve ser enviados para a segunda URL. Então evite usar redirecionamentos.

### 5xxx você fez merda em seu código.

Se o PagSeguro informar que seu site está retornando algum código 5xx então, seu servidor está com problemas, e você precisa analisar com calma a sua aplicação.

### 4xxx é necessário abrir caminhos para o PagSeguro.

Seu servidor ou aplicação está bloqueando o PagSeguro de alguma forma, nesse caso você precisa aplicar alguma exceção seu servidor.
A URL deve ser acessível, mas isso não vale aplicar uma restrição para um IP ou para quem segue determinado caminho em seu sistema ou por uso de senhas… a URL deve ser acessível de forma instantânea para qualquer host externo. Esqueça a parte de segurança frenética que você tenha em seu servidor, para esta URL em especifica não poderá ter nenhuma restrição de acesso por parte do seu servidor.

### "Houve erro ao tentar conexão"

Se você caiu nesse cenário, pode ser um problema no seu site ou um problema no PagSeguro, nunca saberemos. Segundo alguns posts no fórum, o sistema está sendo refeito para esse cenário não ocorrer novamente. Meu conselho para você nesse cenário é:

* Tente utilizar uma URL sem https (okay, é feio isso, mas é uma saida).
* Tente um segundo servidor para receber as notificações.
* Abra uma reclamação no reclame aqui. - [https://www.reclameaqui.com.br/reclamar/10023/detalhes/](https://www.reclameaqui.com.br/reclamar/10023/detalhes/ "https://www.reclameaqui.com.br/reclamar/10023/detalhes/"){:target="_blank"}

### Seja amigo dos _robots_

Acredite, não é um chinês que fica enviando posts para o seu servidor, é o script pronto que faz esse processo, então se seu servidor realiza bloqueios de robots, altere as configurações para isso não acontecer.

### Não use portas especificas.

Okay, não sei defender este quesito, mas se você usar postas especificas em sua URL poderás ter problemas com o PagSeguro.

### Grave logs de tudo que seja possível (de preferência em arquivo de texto).

Espere. Antes de gravar logs, verifique se sua aplicação consegue gravar log, primeiro tenha na sua pagina APENAS uma instrução onde grava um teste de log. Exemplo: "Teste de log". Realize o teste, se sua aplicação conseguir fazer esta tarefa então próximo passo é mandar gravar todos POSTs e GETs, assim você saberá o que está chegando via POST e o que está chegando via GET. PS: Se você usa PHP clique aqui e veja <a title="Escrevendo um arquivo de texto, usando PHP" href="/escrevendo-um-arquivo-de-texto-usando-php/" target="_blank">como gravar arquivo de log</a>.

### Seu próprio teste.

Já que o PagSeguro não tem um ambiente de testes você mesmo poderá fazer parte do teste. Crie um formulário HTML com os campos que você espera receber, e coloque um valor para cada campo. No action do **<form>** inclua a URL que você usará para receber os dados do PagSeguro. Abra este formulário pelo seu próprio computador ou envie para um servidor diferente do da sua aplicação, acesse o formulário e faça o teste enviando as informações. Se seu log conseguir pegar esses dados significa que você já está meio caminho dado.

### A URL que você informou é a mesma que você está trabalhando?

Pode parecer pergunta para idiotas, mas isso é mais comum do que se imagina, então quando for informar a URL, primeiro acesse ela, verifique se é esta URL mesmo, só então informe para o servidor do PagSeguro ou qualquer outro que esteja trabalhando. Se todos estes testes foram feitos e refeitos e ainda assim seu sistema não recebe nenhuma informação, então o caso pode ser mais grave. Se você lembra de algum passo que pode ser importante verificar coloque nos comentários abaixo que incluiremos na lista.

### Item importante a sempre saber.

Não importa o status que o PagSeguro informe ter recebido de sua URL, as vezes seu arquivo recebeu o parâmetro e ainda assim processou a informação. Se isso acontecer e ele fizer requisição no PagSeguro para pegar os detalhes da notificação, você vai receber a coluna "Data de consulta", que o PagSeguro vai entender que você recebeu o código e pegou detalhes sobre ele. Então se isso ocorrer ele nem vai fazer outra retentiva.

Se na coluna "Data de consulta" tiver algum valor, significa que parte do seu script rodou e a parte que ele consulta no PagSeguro foi concluída. Nisso eu recomendo revisar seu código, e colocar log na primeira linha do código para gravar em arquivo tudo que o PagSeguro enviou. Assim você terá certeza se o problema é da sua aplicação ou do PagSeguro.