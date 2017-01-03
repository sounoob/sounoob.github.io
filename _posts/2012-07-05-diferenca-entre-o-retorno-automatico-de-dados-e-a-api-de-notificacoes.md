---
title: Diferença entre o Retorno Automático de Dados e a API de notificações
date: 2012-07-05 13:33:54
permalink: "/diferenca-entre-o-retorno-automatico-de-dados-e-a-api-de-notificacoes/"
categories:
- Curiosidades
- Dicas
tags:
- API Notificação
- API PagSeguro
- PagSeguro
- Retorno Automático de Dados
redirect_from: 2012/07/05/diferenca-entre-o-retorno-automatico-de-dados-e-a-api-de-notificacoes/
id: 376
author: Sena
layout: post
guid: http://sounoob.com.br/?p=376
short-url:
- http://bit.ly/VkhlVk
dsq_thread_id:
- '2818998019'
---

Depois de ver bastante questões em fóruns e afins, sobre a diferença entre o <span style="color: #ff0000;"><del datetime="2012-07-05T14:34:56+00:00">finado</del></span> Retorno Automático de Dados e a API de notificações, resolvi citar algumas diferenças entre ambos serviços.<!--more-->

Acho que a primeira coisa que precisamos deixar claro é que a API de notificações veio sim para substituir o Retorno Automático de Dados, ou seja… hora de migrar o sistema para algo melhor nê!

Segundo item importante, a API de notificações vai alem de receber dados referente a compra, toda a estrutura da API foi desenhada para atender qualquer tipo de notificação (sim terá outros serviços que irão utilizar essa API), um exemplo claro e simples de entender isso quando o o PagSeguro enviar no primeiro POST o tipo de notificações (notificationType) onde por enquanto está chegando sempre transação (transaction), quando tivermos outros serviços o tipo da notificação irá mudar.

Terceiro e não menos importante e que tanto o Retorno Automático de Dados e a API de notificações são enviados em segundo plano, logo NÃO DÁ PARA VER OS DADOS NA TELA, use arquivos de log ([veja como criar log](/escrevendo-um-arquivo-de-texto-usando-php/ "Escrevendo um arquivo de texto, usando PHP")) para ver os dados que estão sendo passados para seu servidor.

Agora para entender as diferenças entre ambas, separei em 3 passos os quais considero importante, os quais seguem abaixo

##### 1 - Aquele POST que o PagSeguro faz sempre que encontra uma alteração no status da transação.

**Retorno Automático de Dados**
  
O PagSeguro envia um POST com todos dados disponíveis da transação.

**API de notificações**
  
O PagSeguro envia um POST com um código de notificação e o tipo da notificação

##### 2 - Como receber os dados

**Retorno Automático de Dados**
  
Não é necessário pesquisar mais informações, todos dados da transação já foram enviados na primeira etapa

**API de notificações**
  
Precisa requisitar os dados da transação enviando e-mail, token e o código da transação o qual quer mais detalhes.

##### 3 - Verificação de segurança.

**Retorno Automático de Dados**
  
É necessário enviar todos os dados que o PagSeguro enviou, exatamente do mesmo jeito que o seu sistema recebeu. Caso não tiver nenhuma divergência o PagSeguro retorna VERIFICADO ou caso contrario ira retornar FALSO.

**API de notificações**
  
Não é necessário nenhuma verificação adicional para segurança uma vez que na requisição de dados o PagSeguro já realiza todas verificações.

Bom, vamos separar em outro ponto de vista… Os pontos fortes e fracos de ambos serviços.

##### Retorno Automático de Dados.

**Ponto forte:**
  
Já na primeira etapa seu sistema tem posse de todas as informações sem nenhuma requisição adicional.

**Ponto Fraco:**
  
Ocorre muito erro na validação dos dados, se usar um charset diferente do usado no PagSeguro sem o devido tratamento significa que quase sempre seu sistema receberá um FALSO.
  
Não é possível forcar uma nova consulta posterior.
  
Se seu servidor estiver fora do ar, seja por um segundo, pode perder um post e NUNCA mas o PagSeguro irá reenviar esses mesmos dados (excerto se houver outra alteração no status do pagamento)

##### API de notificações

**Ponto forte**
  
Quase que a prova de falhas no quesito segurança.
  
É possível guardar o código da notificação e pesquisa-lo sempre que achar necessário.
  
Caso servidor esteja fora do ar o PagSeguro irá envia-la novamente a cada 2 horas, até um máximo de 5 tentativas.

**Ponto fraco.**
  
Não encontrei… (se alguém encontrar deixe um comentário).

Bom, agora para fechar fechar o POST eu deixo uma dica: Se você esta sem tempo hábil para usar a API de notificações e esta com problemas na validação dos POSTs, tirem o site do ar o mais rápido possível.. A coisa mais fácil do mundo e simular o envio do Retorno Automático de Dados, não estranhe se as pessoas comprarem na sua loja e misteriosamente o PagSeguro dizer que não recebeu e seu sistema falar que recebeu o Retorno Automático de Dados com status de aprovado.

Se tiverem alguma dica, sugestão ou o que seja referente ao tema, sinta-se livre em escrever nos comentários as suas mágoas…