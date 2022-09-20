//получаю все импуты и кнопки на странице
const formName = document.querySelector('.form__name');
const formAva = document.querySelector('.form__ava');
const formText = document.querySelector('.form__text');
const formButton = document.querySelector('.form__button');
//получаю контейнер, в который положу разметку
const listComments = document.querySelector('.list-comments');
//создаю массив, пока пустой, он для отправки последних сообщений в локальное хранилище
const arr = [];
//если в локальном хранилище есть комменты и фотограии - я их отрисовываю, иначе получаю null и ничего в html не  отображатеся, 
// в локальном хранилище у меня все хранится под ключом mess-item
const oldComments = localStorage.getItem('mess-item');
listComments.innerHTML = oldComments;
//это url картинки, вывела в консоль, что бы не искть в инете постоянно, пользуйтесь ) 
console.log('https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg');

// функция, которая создает html элемент разметки. Обратите внимание на параметры. Специально все нахзывала по разному
// в данном случае name, url, comment - это пустые коробки, которые ожидают определенные значения. первое name - имя
// url адрес аватарки, comment - текст комментария
// функция создает элементы, присваивает им классы и текст. Все это подробно обсуждали на вебинаре. 
//возвращает div элемент с уже встроенной в него разметкой, в конце все элементы "удочеряются"
const createElement = (name, url, comment) => {
  const div = document.createElement('div');
  div.classList.add('item');
  const p = document.createElement('p');
  const img = document.createElement('img');
  const span = document.createElement('span');
  p.textContent = comment;
  p.className = 'item__text';
  img.src = url;
  img.className = 'item__img';
  span.textContent = name;
  span.className = 'item__name';
  div.append(img);
  div.append(span);
  div.append(p);
  return div;
}

//создаю функцию которая ждет, что в нее добавят контейнер, куда складывать элементы
// функция внутри себя вызывает функцию createElement, при вызове нам необходимо заполнить пустые коробки name, url, 
//comment (обратите внимания что я в них положила), 
const addElement = (container) => {
  const element = createElement(formName.value, formAva.value, formText.value);//тут возвращается див с комментарием и 
  //именем в общем его я кладу в переменную и дальше ее удочеряю в разметку
  // console.log(element);
  arr.push(`${element.outerHTML}`);//это новый для вас код, признаюсь я тоже его только сегодня узнала
  // задала гуглу вопрос, есть ли что-то что превращает html разметку в строку и вуаля, есть все, что душе угодно =)
  //.outerHTML пользуйтесь. И не нужен JSON =) 
  container.append(element);
}

//Ну и сама магия =) при клике должна запустится последняя функция, внутрь которой надо передать контейнер
// listComments - смотри константы вверху, можно передавать любой 

formButton.addEventListener('click', () => {
  addElement(listComments);
  localStorage.setItem('mess-item', arr.join(''));//склеиваю массив, который состоит из строк в одну мега строку, ее и 
  // передаю в локальное хранилище, и ее же потом отрисовываю
  // console.log(arr.join(''));
});

//этот код не совершенен, тут нет отдельного запоминания имени и подстановки его в input, но думаю, что суть понятна. 