let data = `[{
    "name": "Бэтмен",
    "universe": "DC Comics",
    "alterEgo": "Брюс Уэйн",
    "typeOfActivity": ["борец с преступностью", "филантроп", "миллиардер"],
    "friends": ["Робин", "Бэтгерл"],
    "superpowers": ["интеллект", "обширные познания", "знания боевых искусств", "ловкость"],
    "rating": 0,
    "image": "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
},{
    "name": "Супермен",
    "universe": "DC Comics",
    "alterEgo": "Кларк Кент",
    "typeOfActivity": ["борец за справедливость"],
    "friends": ["собака Крипто"],
    "superpowers": ["непробиваемость", "суперсила", "полет", "самоисцеление", "суперзрение и суперслух", "классный костюм"],
    "rating": 0,
    "image": "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"
},{
    "name": "Железный человек",
    "universe": "Marvel Comics",
    "alterEgo": "Тони Старк",
    "typeOfActivity": ["гений", "миллиардер", "плейбой", "филантроп"],
    "friends": ["Мстители"],
    "superpowers": ["высокий уровень интеллекта", "широкие познания науки и техники", "связь со всемирной паутиной", "бронекостюмы"],
    "rating": 0,
    "image": "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg"
},{
    "name": "Спайдер-мен/Человек-паук",
    "universe": "Marvel Comics",
    "alterEgo": "Питер Паркер",
    "typeOfActivity": ["борец за справедливость", "студент", "фотограф"],
    "friends": ["Мстители", "Фантастическая четверка", "Люди Икс"],
    "superpowers": ["сверхчеловеческие рефлексы", "«паучье чутье»", "способность прилепляться к твердым поверхностям", "производство паутины"],
    "rating": 0,
    "image": "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg"
},{
    "name": "Капитан Америка",
    "universe": "Marvel Comics",
    "alterEgo": "Стивен Роджерс",
    "typeOfActivity": ["супер-солдат"],
    "friends": ["Мстители"],
    "superpowers": ["сила", "выносливость", "бессмертие", "быстрая регенерация", "мастерство скрытности и боя"],
    "rating": 0,
    "image": "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg"
},{
    "name": "Тор",
    "universe": "Marvel Comics",
    "alterEgo": "нет; полное имя — Тор Одинсон",
    "typeOfActivity": ["борец за справедливость", "скандинавский бог"],
    "friends": ["Мстители"],
    "superpowers": ["все, что может бог, плюс молот Мьелнир"],
    "rating": 0,
    "image": "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg"
},{
    "name": "Халк",
    "universe": "Marvel Comics",
    "alterEgo": "Брюс Беннер",
    "typeOfActivity": ["супергерой", "борец за справедливость", "ученый-биохимик"],
    "friends": ["Мстители"],
    "superpowers": ["сверхчеловеческая сила и скорость", "выносливость"],
    "rating": 0,
    "image": "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg"
},{
    "name": "Чудо-женщина",
    "universe": "DC Comics",
    "alterEgo": "Диана Принс",
    "typeOfActivity": ["супергероиня", "секретарь-референт"],
    "friends": ["Лига Справедливости", "Бэтмен", "Супермен"],
    "superpowers": ["сверхчеловеческая сила и скорость", "выносливость", "полет"],
    "rating": 0,
    "image": "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg"
},{
    "name": "Черная вдова",
    "universe": "Marvel Comics",
    "alterEgo": "Наташа Романофф",
    "typeOfActivity": ["супергероиня", "шпионка"],
    "friends": ["Мстители"],
    "superpowers": ["пик человеческого физического потенциала", "замедленное старение", "знание многих языков"],
    "rating": 0,
    "image": "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg"
},{
    "name": "Дэдпул",
    "universe": "Marvel Comics",
    "alterEgo": "Уэйд Уинстон Уилсон",
    "typeOfActivity": ["антигерой", "наемник"],
    "friends": ["частично Мстители", "Человек-паук", "Росомаха"],
    "superpowers": ["высокий болевой порог", "регенерация и бессмертие", "сверхчеловеческая иммунная система"],
    "rating": 0,
    "image": "https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg"
}]`;

document.addEventListener("DOMContentLoaded", function(event) {
    let heroes = JSON.parse(data);

    let heroesContent = "";
    for (let hero of heroes) {
        heroesContent += `<div class='hero'>
        <h2>${hero.name}</h2>
        <div>Вселенная: ${hero.universe}</div>
        <div>Альтер эго: ${hero.alterEgo}</div>
        <div>Род деятельности: ${hero.typeOfActivity}</div>
        <div>Друзья: ${hero.friends}</div>
        <div>Суперсилы: ${hero.superpowers}</div>
        <div id="rat">Рейтинг: <input type="text" name="rating" class="heroRating" value="0"></div>
        <button class="decrease">Понизить рейтинг</button>
        <button class="increase">Повысить рейтинг</button><br>
        <img src="${hero.image}">
        </div>`;
    }

    document.querySelector('#superheroes').innerHTML = heroesContent;
});
document.addEventListener('click', function(e) {
    if(e.target.classList.contains("increase")) {
        ++e.target.parentElement.querySelector("input").value;
    } else if(e.target.classList.contains("decrease")) {
        --e.target.parentElement.querySelector("input").value;
    }
});








// JSON.parse(data);

// JSON.stringify(data);

// button.addEventListener('click', (e) => {
//     const name = e.target.getAttribute('data-name');

//     const selected = data.find(item => item.name === name);

//     if(selected) {
//         selected.rating = selected.rating + 1;
//         //Добавить селектед со значением
//     }
// });

// const superheroes = document.querySelector('#superheroes');

// data.forEach(item => {
//     const div = document.createElement('div'),
//     divInfo = document.createElement('div'),
//     button = document.createElement('button');

//     divInfo.innerHTML = `
//         ${item.name} 
//         Вселенная: ${item.universe} 
//         Альтер эго: ${item.alterEgo} 
//         Род деятельности: ${item.typeOfActivity} 
//         Друзья: ${item.friends}
//         Суперсилы: ${item.superpowers}
//         <img src="${item.image}">`;

//     button.innerHTML = 'Повысить рейтинг';
//     button.setAttribute('data-name', item.name);

//     div.append(divInfo);
//     div.append(button);

//     superheroes.append(div);
// });




