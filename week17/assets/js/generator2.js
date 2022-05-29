function vyv(){
    let arr = [] ;
    document.getElementById("IshMas").value = "";
    let min = -10;
    let max = 10;
    let one = document.getElementById("Chislo").valueAsNumber;
    
    for (let i = 0, rand; i < one; i++) {
        rand = Math.round(min + Math.random() * (max - min + 1));
        arr[i] = rand;
    }
    
    document.getElementById("IshMas").value = arr.join(",");
    document.getElementById("minElem").onclick = minElement.bind(null, arr);
    document.getElementById("maxElem").onclick = maxElement.bind(null, arr);
    document.getElementById("meanElem").onclick = meanElement.bind(null, arr);
    document.getElementById("sumElem").onclick = sumElements.bind(null, arr);
    document.getElementById("multElem").onclick = multElements.bind(null, arr);

}

function minElement(arr){
    if(document.getElementById("minElem").checked) {
        let MinEl = Infinity;
        for(let i = 0, len = arr.length; i < len; i++) {
            if(MinEl > arr[i])
                MinEl = arr[i];
        }
        document.querySelector('#min').innerHTML = MinEl;
    }
}

function maxElement(arr) {
    let MaxEl = Math.max(...arr);
    document.querySelector('#max').innerHTML = MaxEl;
}

function meanElement(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    let meanEl = sum / arr.length;
    document.querySelector('#mean').innerHTML = meanEl;
}

function sumElements(arr) {
    let sumEl = arr.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);
    document.querySelector('#sum').innerHTML = sumEl;
}

function multElements(arr) {
    let multEl = arr.reduce((a,b) => a*b);
    document.querySelector('#mult').innerHTML = multEl;
}