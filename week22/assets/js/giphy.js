let container = document.querySelector('.container');

function getGif() {
    let gif = document.querySelector('#gifSearch').value;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=32ttrma8WYdWOo2UXaoGnHGIoQwgnyyG&q=${gif}&limit=5&offset=0&rating=g&lang=ru`)
        .then(response => response.json())
        .catch(error => {
            if(!Navigator.onLine) {
                alert("Нет подключения к интернету. Подключитесь к другой сети, или перезагрузите свое устройство и попробуйте позже.")
            }
            if(response == 0) {
                alert("Введите правильный запрос!") //не работает
            }
        })
        .then(user => {
            console.log(user);
            try {
                for(let i=0; i<5; i++){
                    let imgBox = document.createElement('img')
                    imgBox.setAttribute('src', user.data[i].images.downsized.url);
                    container.append(imgBox);
                }
            }
            catch(error) {
                console.log(error.message)
            }
        })
        .catch(error => console.log(error));
}
// let xhr = new XMLHttpRequest();

// xhr.open('GET', '/article/xmlhttprequest/hello.txt', false);
// try {
//     xhr.send();
//     if (xhr.status != 200) {
//         alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
//     } else {
//         alert(xhr.response);
//     }
// } catch(err) {
//     alert("Запрос не удался")
// }

document.querySelector('#btn').addEventListener('click', getGif)










// try {
//     ыыыы;
//     if (parseInt('ыыыы')==NaN)
//         throw new Error("Переменная не является числом");
//     console.log(parseInt('ыыыы'));
//     }
//     catch (error) {
//         console.log("Ошибка данных: переменная не является числом. Подробности: "+ error.message);
//     }




