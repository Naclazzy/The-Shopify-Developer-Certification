const setSlideShow = () => {
  const sliders = document.querySelectorAll(".component-hub-slideshow");
  Array.from(sliders).forEach((slider) => {
    const id = slider.getAttribute("id");
    new Swiper(`#${id}`, {
      direction: "horizontal",
      slidesPerView: 1.5,
      spaceBetween: 10,
      simulateTouch: true,
      allowTouchMove: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
};

setSlideShow();
