---
title: Controllers e Views - CodeIgniter
date: 2014-04-14 12:56:54 -03:00
permalink: "/controllers-e-views-codeigniter/"
categories:
- Tutoriais
tags:
- CodeIgniter
redirect_from: "/2014/04/14/controllers-e-views-codeigniter/"
id: 1023
author: Sena
layout: post
guid: http://sounoob.com.br/?p=1023
short-url:
- http://bit.ly/1kpnR6G
dsq_thread_id:
- '2818789380'
---

Basicamente toda informação é processada no controller e mostrada para o usuário por meio das View.

O controller servirá como ponte entre o usuário e o nosso sistema, o usuário irá chamar um controller pela URL e este irá processar todas informações e chamar a View para enfim exibir as informações do usuário. Sendo assim teremos a todo um momento uma troca de informações entre Controllers e Views.
  
<!--more-->

### Como os controllers funcionam no CodeIgniter

O CodeIgniter utiliza classes como controllers e essas classes podem ser acessadas pela URL, todo novo controller deve ser estendido do controller padrão do CodeIgniter, que é chamado de CI_Controller.

Cada URL que você tentar acessar, possivelmente estará acessando um controller diferente.

Por padrão você deve acessar raiz/index.php/controler/método. Se você não diginar um controler, ele irá chamar o controler padrão (falaremos disso mais tarde) e ele carregará o método index caso você não digite nenhum método na URL

Considerando que nosso CodeIgniter pode ser acessado na URL _http://localhost/ci/_, vamos considerar a seguinte URL: _http://localhost/ci/index.php/home_.  Ao acessar esta URL o CodeIgniter irá procurar um controller chamado "Home" e carregará o método chamado index. Vamos tentar criar nosso primeiro controller.

{% highlight php linenos %}<?php
class Home extends CI_Controller {
    public function index() 
    {
        echo 'Olá, Eu sou Goku!';
    }
}{% endhighlight %} 

Salve este arquivo como **Home.php** dentro da pasta **application/controllers/** e acesse na URL o endereço **_http://localhost/ci/index.php/home _**

**Informação importante, todo controller precisa necessáriamente começar com letra maiuscula, caso contrário não irá funcionar.**

Se tudo der certo deverá aparecer na sua tela o texto:

<pre>Olá, Eu sou Goku!</pre>

Obviamente você nunca deverá fazer o que acabei de fazer, os controllers nunca deverão mostrar nada na tela, para isso existem as Views.

### Como as Views funcionam no CodeIgniter

No CodeIgniter as Views são arquivos PHP que tem códigos HTMLs mesclado com variáveis PHP que foram processadas no controller.

Crie um arquivo chamado **saudacao.php** e salve dentro de **application/views/** e cole o código abaixo:

{% highlight php linenos %}<html>
    <head>
        <title>Página do Goku</title>
    </head>
    <body>
        <h1>Olá, Eu sou Goku!</h1>
        <p>Tenho 200 ano terrestre</p>
    </body>
</html>{% endhighlight %} 

Usaremos a rotina abaixo do CodeIgniter para chamar nossa View:

{% highlight php linenos %}$this->load->view('nomedaview');{% endhighlight %} 

Essa rotina deverá estar dentro de um controller, nesse caso usaremos o controller Home.php que criamos anteriormente, veja o código como ficou:

{% highlight php linenos %}<?php
class Home extends CI_Controller {
    public function index()
    {
        $this->load->view('saudacao');
    }
}{% endhighlight %} 

### Enviando informações do controller para a View

É uma boa pratica usar a View apenas para exibir informações, todo processamento da informação deverá ser feito apenas no controller, somente quando as informações estiverem prontas que devem ser enviados para a View mostrar para o usuário.

Para enviar essas informações para a View utilizaremos a mesma rotina que carrega a View, e enviaremos como segundo parâmetro um array com todas informações.

{% highlight php linenos %}<?php
class Home extends CI_Controller {
    public function index()
    {
        $data = array();
        $data['name'] = 'Goku';
        $data['age'] = '200';
        $this->load->view('saudacao', $data);
    }
}{% endhighlight %} 

Como visto acima, usei um array chamado **$data** para enviar as informações. Esss informações irão estar disponíveis na View, como variaveis. Ou seja, cada indice de array será uma variavel. No nosso caso temos **$data["name"]** que estará disponivel como **$name** e teremos **$data["age"]** que estará disponível como **$age. **Veja como ficará nossa View:

{% highlight php linenos %}<html>
    <head>
        <title>Página do <?php echo $name;?></title>
    </head>
    <body>
        <h1>Olá, Eu sou <?php echo $name;?>!</h1>
        <p>Tenho <?php echo $age;?> ano terrestre</p>
    </body>
</html>{% endhighlight %} 

Se você não conhece muito o CodeIgniter você poderá conhecer o nosso manual básico:
  
[Curso básico de CodeIgniter para Noobs](/codeigniter-para-noobs/ "CodeIgniter para Noobs")