---
---
window.onload = function() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://magic.sounoob.com.br/wakeup.php");
    xhttp.send();
}
function send() {
    document.getElementsByTagName('body')[0].classList.add('loading');
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://magic.sounoob.com.br/contato.php");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                const response = JSON.parse(this.responseText);
                if (response.status == 200) {
                    window.location = '/contato/obrigado';
                } else {
                    document.getElementsByTagName('body')[0].classList.remove('loading');
                    alert(response.msg);
                }
            }else {
                document.getElementById('contact').action = 'https://formspree.io/xoqdldoy';
                document.getElementById('contact').submit()
            }
        }
    };
    xhttp.send("name=" + document.getElementById("name").value + "&email=" + document.getElementById("_replyto").value + "&msg=" + document.getElementById("message").value + "");
}

