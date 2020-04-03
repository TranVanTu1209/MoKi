	// --------------header---------------
  $(document).ready(function() {
		$('.menu-mobile').click(function(event) {
			/* Act on the event */
			$('#top-menu-nav').toggleClass('open');
			document.querySelector(".menu-mobile").classList.toggle("open");
		});
	});
  // --------------het header---------------
$('.slick-banner').slick({
 dots: true,
  dotsClass: "dot-slick",
  infinite: true,
  speed: 500,
   fade: true,
  cssEase: 'linear',
  autoplay: true,
  prevArrow: '<a type="button" class="left carousel-control"><i class="fa fa-angle-left"></i></a>',
   nextArrow: '<a type="button" class="right carousel-control"><i class="fa fa-angle-right"></i></a>'
});
	$(document).ready(function() {
			try {
				$('.ripples').ripples({
					resolution: 256,
			perturbance: 0.04,
				});
			}
			catch (e) {
				$('.error').show().text(e);
			}
		});


$('.slick-product').slick({
  infinite: true,
  slidesToShow: 3,
   prevArrow: '<a type="button" class="left carousel-control"><i class="fa fa-angle-left"></i></a>',
   nextArrow: '<a type="button" class="right carousel-control"><i class="fa fa-angle-right"></i></a>',

    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$(function() {
  $('.toggle-menu').click(function(event) {
  /* Act on the event */
  $(this).next().slideToggle();
});
});

// ---------footer------------
//slick-doi-tac 
$('.slick-doi-tac').slick({
  infinite: true,
  slidesToShow: 5,
   dots: true,
        infinite: true,
         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


