let container = document.querySelector('.container');

function getGif() {
    let gif = document.querySelector('#gifSearch').value;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=32ttrma8WYdWOo2UXaoGnHGIoQwgnyyG&q=${gif}&limit=5&offset=0&rating=g&lang=ru`)
        .then(response => response.json())
        .then(user => {
            console.log(user);

            for(let i=0; i<5; i++){
                let imgBox = document.createElement('img')
                imgBox.setAttribute('src', user.data[i].images.downsized.url);
                container.append(imgBox);
            }
        })
        .catch(error => console.log(error))
}

document.querySelector('#btn').addEventListener('click', getGif)