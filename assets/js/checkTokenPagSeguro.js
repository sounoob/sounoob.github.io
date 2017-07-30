function searchInProd() {
    document.getElementById('result').innerHTML = 'Pesquisando no ambiente de produção...';

    var data = null;

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if(this.responseText == 'True') {
                document.getElementById('result').innerHTML = 'Seu email e token é valido apenas em produção';
            }else{
                searchInSandbox();
            }
        }
    });

    xhr.open("GET", "https://magic.sounoob.com.br/pagseguro/token/check.php?email="
        + document.getElementById('email').value + "&token=" + document.getElementById('token').value);

    xhr.send(data);
}
function searchInSandbox() {
    document.getElementById('result').innerHTML = 'Pesquisando no ambiente de sandbox...';

    var data = null;

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if(this.responseText == 'True') {
                document.getElementById('result').innerHTML = 'Seu email e token é valido apenas em sandbox';
            }else{
                document.getElementById('result').innerHTML = 'Seu email ou token não é valido nem em produção nem em sandbox';
            }
        }
    });

    xhr.open("GET", "https://magic.sounoob.com.br/pagseguro/token/check.php?sandbox=true&email="
        + document.getElementById('email').value + "&token=" + document.getElementById('token').value);

    xhr.send(data);
}
function sayTheTrue() {
    document.getElementById('result').innerHTML = 'Ligando os motores...';
    searchInProd();
    return false;
}