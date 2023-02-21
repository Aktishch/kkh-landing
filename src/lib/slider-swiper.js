import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const init = () => {

  const sliderAbout = new Swiper('.about-slider .swiper', {

    pagination: {

      el: '.about-slider .swiper-pagination',
      clickable: true

    },

    navigation: {

      prevEl: '.about-slider .swiper-button-prev',
      nextEl: '.about-slider .swiper-button-next'

    },

    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    grabCursor: true,
    loop: true,

    autoplay: {

      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false

    }


  })

  window.Swiper = Swiper

}

export default { init }