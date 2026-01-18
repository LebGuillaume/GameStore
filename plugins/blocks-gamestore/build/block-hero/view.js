/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./src/block-hero/view.js ***!
  \********************************/
document.addEventListener("DOMContentLoaded", function () {
  const swiperHero = new Swiper(".hero-slider .slider-container", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 1500,
    slidesPerView: "auto",
    pagination: {
      el: ".hero-slider .swiper-pagination",
      clickable: true
    },
    grabCursor: true,
    mousewheelControl: true,
    KeyboardControl: true,
    navigation: {
      nextEl: ".hero-slider .swiper-button-next",
      prevEl: ".hero-slider .swiper-button-prev"
    }
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map