	// // --------------header---------------
 //  $(document).ready(function() {
	// 	$('.menu-mobile').click(function(event) {
	// 		/* Act on the event */
	// 		$('#top-menu-nav').toggleClass('open');
	// 		document.querySelector(".menu-mobile").classList.toggle("open");
	// 	});
	// });
 //  // --------------het header---------------
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


//  $(function() {
//   $(window).resize(function(){

//     var width = $(window).width();
//     if (width <= 768){
//       $('.toggle-menu').click(function(event) {
//         $(this).next().slideToggle();
//       });
//     }
//   });
// });


// add to cart success
//món ăn mới
$('.food #disk-new .danh-sach-food .product .add-cart').on('click', (e) => {
  $(' #disk-new .danh-sach-food .cart-success').addClass('display-notification');
  var cartIcon = $(e.target).children('i');
  cartIcon.removeClass('fa-cart-plus')
  cartIcon.addClass('fa-check-circle text-success');
  console.log(cartIcon);
  setTimeout((e) => {
    $('#disk-new .danh-sach-food .cart-success').removeClass('display-notification');
    cartIcon.removeClass('fa-check-circle text-success');
    cartIcon.addClass('fa-cart-plus');
  }, 3000);
  e.preventDefault();
});

//món ăn bán chạy
$('.food #disk-selling .danh-sach-food .product .add-cart').on('click', (e) => {
  $(' #disk-selling .danh-sach-food .cart-success').addClass('display-notification');
  var cartIcon = $(e.target).children('i');
  cartIcon.removeClass('fa-cart-plus')
  cartIcon.addClass('fa-check-circle text-success');
  console.log(cartIcon);
  setTimeout((e) => {
    $('#disk-selling .danh-sach-food .cart-success').removeClass('display-notification');
    cartIcon.removeClass('fa-check-circle text-success');
    cartIcon.addClass('fa-cart-plus');
  }, 3000);
  e.preventDefault();
});

//món ăn ưa thích
$('.food #disk-favorite .danh-sach-food .product .add-cart').on('click', (e) => {
  $(' #disk-favorite .danh-sach-food .cart-success').addClass('display-notification');
  var cartIcon = $(e.target).children('i');
  cartIcon.removeClass('fa-cart-plus')
  cartIcon.addClass('fa-check-circle text-success');
  console.log(cartIcon);
  setTimeout((e) => {
    $(' #disk-favorite .danh-sach-food .cart-success').removeClass('display-notification');
    cartIcon.removeClass('fa-check-circle text-success');
    cartIcon.addClass('fa-cart-plus');
  }, 3000);
  e.preventDefault();
});


//Thực phẩm ưu đãi
$('.food #food-new .danh-sach-food .product .add-cart').on('click', (e) => {
  $(' #food-new .danh-sach-food .cart-success').addClass('display-notification');
  var cartIcon = $(e.target).children('i');
  cartIcon.removeClass('fa-cart-plus')
  cartIcon.addClass('fa-check-circle text-success');
  console.log(cartIcon);
  setTimeout((e) => {
    $('#food-new .danh-sach-food .cart-success').removeClass('display-notification');
    cartIcon.removeClass('fa-check-circle text-success');
    cartIcon.addClass('fa-cart-plus');
  }, 3000);
  e.preventDefault();
});


//Thực phẩm bán chạy
$('.food #food-selling .danh-sach-food .product .add-cart').on('click', (e) => {
  $(' #food-selling .danh-sach-food .cart-success').addClass('display-notification');
  var cartIcon = $(e.target).children('i');
  cartIcon.removeClass('fa-cart-plus')
  cartIcon.addClass('fa-check-circle text-success');
  console.log(cartIcon);
  setTimeout((e) => {
    $('#food-selling .danh-sach-food .cart-success').removeClass('display-notification');
    cartIcon.removeClass('fa-check-circle text-success');
    cartIcon.addClass('fa-cart-plus');
  }, 3000);
  e.preventDefault();
});


//slick-banner-food
$('.slick-banner-food').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  dots: true,
  infinite: true,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
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

// // ---------footer------------
// //slick-doi-tac 
// $('.slick-doi-tac').slick({
//   infinite: true,
//   slidesToShow: 5,
//    dots: true,
//         infinite: true,
//          responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 4
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });


