
let rootPath = "https://mysite.itvarsity.org/api/ContactBooK/";
let apiKey = checkApiKey();

function checkApiKey(){
    if(!localStorage.getItem("apikey")) {
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}