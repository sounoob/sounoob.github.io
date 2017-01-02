---
title: Codificando e-mail marketing sem problemas
date: 2014-02-28 09:47:02 Z
permalink: "/codificando-e-mail-marketing-sem-problemas/"
categories:
- Curiosidades
- Dicas
tags:
- css
- e-mail marketing
- html
redirect_from: "/2014/02/28/codificando-e-mail-marketing-sem-problemas/"
id: 919
author: Sena
layout: post
guid: http://sounoob.com.br/?p=919
short-url:
- http://bit.ly/1lnr08U
dsq_thread_id:
- '2818905238'
image: "./assets/uploads/2014/02/emailmarketing.jpg"
---

Uma coisa eu odiava mais do que o IE6 <del style="color: #ff0000;">(e o funk)</del> era criar um e-mail marketing e fazer funcionar "bonitinho" em todos clientes de e-mail.

Parte do meu trabalho <del style="color: #ff0000;">(Sim meu blog não paga minhas contas então tenho que trabalhar) XD</del> era fazer um monte destes e-mail marketing e como sou muito noob em relação a isso tudo, sofri bastante com e-mails com assuntos do tipo: _"E-mail marketing quebrado", "E-mail marketing sem formatação", "E-mail marketing com espaços entre as imagens"…_ nem preciso dizer que a lista de reclamações é imensa… foi por isso que gastei alguns milésimos de segundos do meu dia em pesquisas para evitar que o telefone toque, vou tentar passar algumas dicas afim de vocês também evitarem esses problemas.<!--more-->

### Nada de sair "Fatiando"

Nunca cometa o erro de abrir um photoshop da vida e fatiar uma arte, exportar para web e dizer que isso é um e-mail marketing. Alem de ficar pesado o cliente de e-mail irá bloquear suas imagens e o usuário raramente terá um experiencia agradável.
  
Então largue de preguiça e monte algo decente com o mínimo de imagens possíveis.

### Evitando que o layout fique "quebrado"

Sem panico, isso é mais normal do que se parece. Primeira coisa, utilize tabelas para alinhar tudo. - Isso mesmo, nada de abusar das **<div>** para criar seu layout, a maioria das coisas legais que você for tentar utilizar provavelmente não irá funcionar.

Toda em toda **<table>** defina o espaço entre espaço do lado de fora das células **cellspacing="0&#8243;** e espaço do lado de dentro das das células **cellpadding="0&#8243;**

Toda **<tr>**, deve ter sua largura e altura definida **width="600&#8243; height**="600&#8243;****, e evite o máximo usar

Toda imagem informe que ela é um bloco **style="display:block" **e defina a borda **border="0&#8243;**, evitando assim espaços entre as imagens e o elemento pai. Nunca utilize caminho relativo, use sempre o caminho completo da imagem, alguns sistemas de envios consegue enviar apenas o HTML.

### CSS - Somente inline e uso muito moderado.

Nunca use uma folha de estilo externa, procure utilizar sempre de forma inline, e sempre que for utilizar dê uma olhada nesta tabela para ver quais elementos css irá funcionar: <a title="Campaign monitor - CSS" href="http://www.campaignmonitor.com/css/" target="_blank" rel="external nofollow">campaignmonitor.com/css/</a>

### Imagens - E se não carregar?

Com o problema do uso limitado do CSS, muita gente acaba abusando das imagens, quando o único trabalho é que fazem é "Fatiar a arte" e dizer que o e-mail marketing está pronto. Não faça isso, os clientes de e-mail por padrão irão bloquear todas imagens dos e-mails até que quem estiver acessando marque a opção que deseja ver essas imagens… O que fazer? Utilize o mínimo de imagens possível, e sempre use o atributo **alt** para descrever o que essas imagens representa, assim quando alguém não visualizar a imagem, poderá ter uma noção do que deveria estar ali.

### Nada de Javascript, Flash, Vídeo e Formulários

Por questões de segurança e privacidade os clientes de e-mails geralmente irão bater de frente contra isso…

### E-mail marketing não é um site.

Acho que o item mais importante é saber seria este. Porque quem está acostumado desenvolver sites, provavelmente tudo que vai fazer já pensa em utilizar vários recursos do HTML 5, CSS3… Esqueça tudo isso, e volte alguns anos antes, quando a tag **<table>** reinava. Este será seu novo jeito de desenvolver HTML.

E lembre-se a ideia do e-mail marketing é mostrar alguma novidade para os leitores, só isso…

Bom acho que em resumo é isso… Quem tiver mais dicas, é só postar aqui em baixo.