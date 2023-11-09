let userInput = "";

function btnClick(inputValue) {
    if (inputValue == "AC") {
        userInput = "";
    } else {
        userInput += inputValue;
        console.log(inputValue);
    }
    document.getElementById("hahaha").value = userInput;
}
