const textarea = document.querySelector('textarea'),
    button = document.querySelector('#sendButton'),
    chat = document.querySelector('#chat');
button.addEventListener('click', checkMessage)
    
const photo = localStorage.getItem('#photo');

document.addEventListener("DOMContentLoaded", function(event) {
    const name = localStorage.getItem('name');
    if(name != null) {
        document.querySelector('#author').value = name;
    }
});
function sendMessage(author, comment) {
    document.querySelector('#chat').innerHTML += `<div>${photo}</div><span class="author">${author}:</span><span>${comment}</span><br>`;
}
function checkMessage() {
    document.querySelector('#photo').src = document.querySelector('#url').value;
    let photo = document.querySelector('#photo').value;
    let author = document.querySelector('#author').value;
    let comment = document.querySelector('#comment').value;

    if(localStorage.getItem('name') == null) {
        localStorage.setItem('name', author);
    }
    if(localStorage.getItem('messages') == null) {
        localStorage.setItem('messages', comment );
    }
    if(localStorage.getItem('avatar') == null) {
        localStorage.setItem('avatar', photo);
    }
    sendMessage(author, comment);
}









//     document.addEventListener('DOMContentLoaded', () => {
//         const comments = getData();
    
//         comments.map(comment => {
//             const box = document.createElement('div');
//             box.innerHTML = messages;
    
//             list.append(box);
//         });
//     });

//     function setData(value) {
//         const comments = getData();
//         localStorage.setItem('messages', JSON.stringify(messages.push(value)));
//     }
//     function getData() {
//         return JSON.parse(localStorage.getItem('comments')) || [];
//     }


//     function postComment() {
//         textarea.value
//         const messages = getData();
//         setData(textarea.value);
//     }


// document.addEventListener('DOMContentLoaded', () => {
//     const comments = getData();
//     comments.map(comment => {
//         const box = document.createElement('div');
//         box.innerHTML = comment;

//         chat.append(box);
//     });
// });
// function setData(value) {
//     const comments = getData();
//     localStorage.setItem('comments', JSON.stringify(comments.push(value)));
// }
// function getData() {
//     return JSON.parse(localStorage.getItem('comments')) || [];
// }

// localStorage.setItem('messages', JSON.stringify(messages));









