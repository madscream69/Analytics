const header_btn = document.querySelector('.header__top-menu');
header_btn.addEventListener('click', ()=>{
    document.querySelector('.menu').classList.toggle('menu--open')
});
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });