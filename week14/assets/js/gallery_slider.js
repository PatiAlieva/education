//индекс слайда по умолчанию
let slideIndex = 1;
showSlides(slideIndex);

//функция увеличивает индекс на 1, переходит на следующий слайд
function getNextSlide() {
    showSlides(slideIndex += 1);
    debugger;
}

//функция уменьшает индекс на 1, переходит на предыдущий слайд
function getPrevSlide() {
    showSlides(slideIndex -= 1);
}

//Функции слайдера
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    //зацикливает слайды
    if (n > slides.length) {
        slideIndex = 1
        // debugger;
    }
    //прячет слайды
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        // debugger;
    }
    //показывает текущий слайд
    slides[slideIndex - 1].style.display = "block";
}