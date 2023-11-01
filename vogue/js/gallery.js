// 보그 PJ 갤러리 페이지 JS - gallery.js


var swiper = new Swiper(".mySwiper", {
  autoplay:{
    // 자동넘김 시간
    delay: 2500,
    // 상호작용 (건들여놓기)에 대한 재가동
    disableOnInteraction:false
  },
  // 한번에 보일 슬라이드 수
  slidesPerView:3,
  // 사이간격
  spaceBetween: 30,

  // 하단블릿
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 양쪽이동버튼 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 루프
  loop: true,

  // 분기점
  breakpoints: {
    // when window width is >= 200px
    200: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView:3,
      spaceBetween:10,
    }
  }
});