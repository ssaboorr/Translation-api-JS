var btnTranslator = document.querySelector("#translate-btn");
var inputTxt = document.querySelector("#input-txt");
var outputTxt = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslatorURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    alert("Something went wrong.Plzz Try Later")
}

function clickEvent() {
    var textInput = inputTxt.value;

    fetch(getTranslatorURL(textInput))
        .then(response => response.json())
        .then(json => {
            var translatedOutput = json.contents.translated;
            outputTxt.innerText = translatedOutput;
        })
        .catch(errorHandler)
}

btnTranslator.addEventListener("click", clickEvent)