let swiperCards = new Swiper('.card-content', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
 
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });