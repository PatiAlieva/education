function getSum() {
    let num1, num2, result;
    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);
    result = num1 + num2;
    document.getElementById('out').innerHTML = result;
}

function getMinus() {
    let num1, num2, result;
    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);
    result = num1 - num2;
    document.getElementById('out').innerHTML = result;
}

function getMultiply() {
    let num1, num2, result;
    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);
    result = num1 * num2;
    document.getElementById('out').innerHTML = result;
}

function getDivide() {
    let num1, num2, result;
    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);
    result = num2 ? num1 / num2 : "На ноль делить нельзя!";
    document.getElementById('out').innerHTML = result;
}

function getDegree() {
    let num1, num2, result;
    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);
    result = num1 ** num2;
    document.getElementById('out').innerHTML = result;
}

function getRemainder() {
    let num1, num2, result;
    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);
    result = num1 % num2;
    document.getElementById('out').innerHTML = result;
}
