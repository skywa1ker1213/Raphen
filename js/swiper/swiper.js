var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 4000
  },
});

// TEAM SWIPER
var swiper = new Swiper(".teamSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000
  },

  breakpoints: {
    0:{
      slidesPerView: 1
    },

    600:{
      slidesPerView:2
    },

    918: {
      slidesPerView: 3
    }

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// GALLERY SWIPE

var swiper = new Swiper(".gallerySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000
  },
  breakpoints: {
    0:{
      slidesPerView: 1
    },

    935:{
      slidesPerView:2
    },

    1174: {
      slidesPerView: 3
    }

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});