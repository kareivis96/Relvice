let contacts__card = document.querySelector('.contacts__card');

contacts__card.addEventListener('mouseenter', function() {
  contacts__card.style.background = 'green';
});

contacts__card.addEventListener('mouseleave', function () {
  contacts__card.style.background = 'white';
});