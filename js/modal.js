const openBurgerBtn = document.querySelector('#openBurger');
const burgerMenu = document.querySelector('.burger-container');
const closeBurgerBtn = document.querySelector('#closeBurger');

openBurgerBtn.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('active');
    document.body.classList.add('no-scroll'); // Запрещаем прокрутку
})
closeBurgerBtn.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('active');
    document.body.classList.remove('no-scroll'); // Возвращаем прокрутку
})

const profileBtn = document.querySelector('#profileBtn');
const closeBtn = document.querySelector('.modal-form__close');
const modalOverlay = document.querySelector('.modal-overlay');

profileBtn.addEventListener('click', () => {
    modalOverlay.classList.toggle('active');
    document.body.classList.add('no-scroll'); // Запрещаем прокрутку
    burgerMenu.classList.remove('active');
})

closeBtn.addEventListener('click', () => {
    modalOverlay.classList.toggle('active');
    document.body.classList.remove('no-scroll'); // Возвращаем прокрутку
})


