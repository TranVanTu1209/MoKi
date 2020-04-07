
$('.owl-carousel').owlCarousel({
  autoplay: false,
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
      items: 1,
      nav: true
    },
    768: {
      items: 2,
      nav: true
    },
    1000: {
      items: 3,
      nav: true
    }
  }
});
setInterval((e) => {
  $('.owl-nav').removeClass('disabled');
}, 1);
