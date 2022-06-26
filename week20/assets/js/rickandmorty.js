document.addEventListener("DOMContentLoaded", 
    function(event) {
        fetch('https://rickandmortyapi.com/api/character/2',{
            method: 'GET'
        })
        .then(response => response.json())
        .then(character => {
                console.log(character);
                document.querySelector('.name').innerText = character.name;
                document.querySelector('.status').innerText = character.status;
                document.querySelector('.species').innerText = character.species;
                document.querySelector('.location').innerText = character.location.name;
                document.querySelector('.image').src = character.image;
            })
        .catch(error => console.log(error));
    });
