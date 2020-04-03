$('.owl-carousel').owlCarousel({
  autoplay: true,
  autoplayHoverPause: true,
  items: 3,
  nav: true,
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    500: {
      items: 3,
      nav: true
    },
    768: {
      items: 4,
      nav: true
    },
    1000: {
      items: 5,
      nav: true
    }
  }
});
