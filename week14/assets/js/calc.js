let calculate;
function calc() {
    let result;
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    switch(calculate){
        case '+': result=number1 + number2;
        break;
        case '-': result=number1-number2;
        break;
        case '*': result=number1*number2;
        break;
        case '/': result=number1/number2;
        break;
        case '^': result=number1**number2;
        break;
        case '%': result=number1%number2;
        break;
    }
    document.getElementById("result").innerHTML = result;
}


