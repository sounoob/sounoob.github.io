---
title: Instalando XAMPP no Linux
date: 2012-08-08 11:53:43
permalink: "/instalando-xampp-no-linux/"
categories:
- Aulas
- Tutoriais
tags:
- xampp
redirect_from: "/2012/08/08/instalando-xampp-no-linux/"
id: 454
author: Sena
layout: post
guid: http://sounoob.com.br/?p=454
short-url:
- http://bit.ly/VjbltA
dsq_thread_id:
- '2819420478'
---

No Linux é bem mais fácil configurar um interpretador PHP (apache), e que para alegria dos nerds uma linha de comando resolveria a situação. Mas… Eu gosto muito do XAMPP e nesse tutorial vou mostrar como é simples instalar o XAMPP no Linux também…<!--more-->

  1. Baixe o arquivo do XAMPP. <a title="XAMPP versão 1.8 para linux" href="http://www.apachefriends.org/download.php?xampp-linux-1.8.0.tar.gz" target="_blank">http://www.apachefriends.org/download.php?xampp-linux-1.8.0.tar.gz</a>
  2. Usando o terminal navegue até a pasta onde foi realizado o download e descompacte o arquivo para o diretório /opt.
    Você poderá descompacatar e mover usando o comando abaixo:
    {% highlight php linenos %}sudo tar xvfz xampp-linux-1.8.0.tar.gz -C /opt{% endhighlight %} 

  3. Caso você esteja utilizando Ubuntu 64 bits será necessário baixar uma biblioteca adicional para fazer o XAMPP funcionar, para isso digite a comando abaixo no terminal: 
    {% highlight php linenos %}sudo apt-get install ia32-libs{% endhighlight %} 
    Caso o sistema solicite confirmação para baixar arquivos adicionais confirme digitando Y.</li> 
    
      * Com o terminal acessando o arquivo lampp dentro da pasta lampp dentro de /opt, use o parâmetro start para iniciar e stop para finalizar, lembre-se de executar esses comandos como administrador.
  
        Para ver se está tudo correto, vamos iniciar. Use o comando abaixo para iniciar:</p> 
        {% highlight php linenos %}sudo /opt/lampp/lampp start{% endhighlight %} 
        
        Caso tudo ocorra correto o Linux irá exibir o texto: “XAMPP for Linux started”, assim como mostrado na imagem abaixo:[<img class="aligncenter size-full wp-image-455" title="xampp-start-linux" alt="" src="/assets/uploads/2012/08/xampp-start-linux.png" srcset="/assets/uploads/2012/08/xampp-start-linux.png 387w, /assets/uploads/2012/08/xampp-start-linux-300x160.png 300w" sizes="(max-width: 387px) 100vw, 387px" />](/assets/uploads/2012/08/xampp-start-linux.png)</li> 
        
          * Abra um browser qualquer e digite http://localhost, deverá aparecer uma tela similar a mostrada abaixo
  
            [<img class="aligncenter size-full wp-image-444" title="xamp_home_page" alt="Pagina inicial do XAMPP" src="/assets/uploads/2012/08/xamp_home_page.png" srcset="/assets/uploads/2012/08/xamp_home_page.png 800w, /assets/uploads/2012/08/xamp_home_page-300x199.png 300w" sizes="(max-width: 800px) 100vw, 800px" />](/assets/uploads/2012/08/xamp_home_page.png)</ol> 
        
        Só para lembrar, a pasta onde seu código PHP deverá estar para o interpretador consiga ler é no endereço:
        
        <address>
          /opt/lampp/htdocs/
        </address>
        
        <address>
           
        </address>
        
        Veja outros posts como este aqui:
  
        [PHP para noobs](/php-para-noobs/ "PHP para Noobs")