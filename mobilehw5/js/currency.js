var docurrency = function(){
    clean_buttons();
    document.getElementById('currency').classList.add("selected");

    console.log("GETTING CURRENCY");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var currency = JSON.parse(this.responseText);
            console.log(currency);
            buildcurrency(currency);
        }
    };
     url = 'https://api.exchangerate.host/latest?base=USD'

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function buildcurrency(currency){
    var workspace = document.getElementById("content");
    workspace.innerHTML = JSON.stringify(currency);
    //TODO : CURRENCY DATA IS IN JSON OBJECT currency
    //All you need to do is build it into content.
}
