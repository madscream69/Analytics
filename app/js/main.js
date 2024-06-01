const header_btn = document.querySelector('.header__top-menu');
header_btn.addEventListener('click', ()=>{
    document.querySelector('.menu').classList.toggle('menu--open')
});