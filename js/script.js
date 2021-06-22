function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

const burger = document.querySelectorAll('.header__burger');
const menu = document.querySelectorAll('.nav-list');


burger.forEach(el => {
    el.addEventListener('click', function () {
        menu.forEach(elem => {
            elem.classList.toggle('active');
        })
        burger.forEach(elem => {
            elem.classList.toggle('active');
        })
        document.querySelector('body').classList.toggle('lock');
    })
});