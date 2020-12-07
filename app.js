var btnInput = document.querySelector("button");

var textInput = document.querySelector("textarea[name='input']");

console.log(textInput);

function clickHandler() {
    console.log(btnInput);
    console.log(textInput.value);
}

btnInput.addEventListener('click', clickHandler)
