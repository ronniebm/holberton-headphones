let header = document.querySelector('.header');
let burger = document.querySelector('.js-burger');

burger.addEventListener('click', () => {
  header.classList.toggle('header--active');
})
