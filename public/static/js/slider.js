let pageSlider = new Swiper(".page", {
  wrapperClass: "page__wrapper",
  slideClass: "page__section",

  direction: "vertical",

  slidesPerView: "auto",

  parallax: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },

  mousewheel: {
    sensitivity: 1
  },

  speed: 800,

  observer: true,

  observeParents: true,

  observeSlideChildren: true,

  scrollbar: {
    el: ".page__scroll",
    dragClass: "page__drag-scroll",
    draggable: true
  }
});
