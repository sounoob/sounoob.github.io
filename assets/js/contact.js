// ---
// ---
function send() {
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
