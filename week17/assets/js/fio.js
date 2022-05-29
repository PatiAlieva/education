const button = document.querySelector('#outButton'), input = document.querySelector('#decoder');

button.addEventListener('click', formatText);

function formatText() {
    const value = input.value,
    str = value.trim(), // избавляемся от пробелов в начале и в конце
    arr = str.split(' ').map(word => {
            let newWord = '';
            newWord = word[0].toUpperCase() + word.toLowerCase().slice(1);
            return newWord;
        });

    document.querySelector("#surname").value = arr[0]
    document.querySelector("#firstname").value = arr[1]
    document.querySelector("#patronymic").value = arr[2]
    // console.log(arr)
}