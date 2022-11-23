var btnTranslate = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL (text) {
 return serverURL + "?" + "text=" + text

}








function clickHandler () {
var inputText = txtInput.value;


fetch(getTranslationURL(inputText))
.then(response => response.json())
.then (json => {
    var translatedText = json.contents.traslated;
    outputDiv.innerText = translatedText;






})







};
















btnTranslate.addEventListener("click", clickHandler)