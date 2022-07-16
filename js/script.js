// --------------------------- скрипт на смену иконок при наведении в блоке contacts -----------------------
let contacts__card_1 = document.querySelector('.contacts__card_1');
let contacts__card_2 = document.querySelector('.contacts__card_2');
let contacts__card_3 = document.querySelector('.contacts__card_3');

let contacts__cardImg_1 = document.querySelector('.contacts__card-img_1');
let contacts__cardImg_2 = document.querySelector('.contacts__card-img_2');
let contacts__cardImg_3 = document.querySelector('.contacts__card-img_3');


contacts__card_1.addEventListener('mouseenter', function() {
  contacts__cardImg_1.src = '../img/contacts/1-img-white.png';
});
contacts__card_1.addEventListener('mouseleave', function () {
  contacts__cardImg_1.src = '../img/contacts/1-img-green.png';
});

contacts__card_2.addEventListener('mouseenter', function () {
  contacts__cardImg_2.src = '../img/contacts/2-img-white.png';
});
contacts__card_2.addEventListener('mouseleave', function () {
  contacts__cardImg_2.src = '../img/contacts/2-img-green.png';
});

contacts__card_3.addEventListener('mouseenter', function () {
  contacts__cardImg_3.src = '../img/contacts/3-img-white.png';
});
contacts__card_3.addEventListener('mouseleave', function () {
  contacts__cardImg_3.src = '../img/contacts/3-img-green.png';
});