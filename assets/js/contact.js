function send() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://magic.sounoob.com.br/contato.php");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText);
            if(response.status == 200) {
                //window.location = '/contato/obrigado'
            } else {
                alert(response.msg);
            }
        }
    };
    xhttp.send("name=" + document.getElementById("name").value + "&email=" + document.getElementById("email").value + "&msg=" + document.getElementById("msg").value + "");
}
