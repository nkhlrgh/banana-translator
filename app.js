var btnInput = document.querySelector("#btn");

var textInput = document.querySelector("#input");

var textOutput = document.querySelector("#output");

var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getUrl(input) {
    return serverUrl + "?" + "text=" + input; 
}

function errorHandler(error) {
    console.log("Error occured: ", error);
    alert("Oops! Something is not working. Please try again after sometime ");
}

function clickHandler() {
    var finalInput = textInput.value;
    fetch(getUrl(finalInput))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.text;
        textOutput.innerHTML = translatedText;
    })
    .catch(errorHandler)
}

btnInput.addEventListener('click', clickHandler)
