let numbers = [];
function sumInput() {

    while (true) {
        let value = prompt("Введите число");
        if(value === ""||value === null||!isFinite(value)) break;
        numbers.push(+value);
        continue;
        value = [];
    }
    console.log(numbers);
    numbers.sort(function(a,b) {
        return (a-b);
    });
    let sum = 0;
    for(let number of numbers) {
        sum += number;
    }
    return sum;

} 
alert(sumInput());
alert(numbers);
