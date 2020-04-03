// add to cart success
$('#meal-search .search-result .card .img .cart').on('click', (e) => {
  $('#meal-search .notification').addClass('display-notification');
  var cartIcon = $(e.target).children('i');
  cartIcon.removeClass('fa-cart-plus')
  cartIcon.addClass('fa-check-circle text-success');
  console.log(cartIcon);
  setTimeout((e) => {
    $('#meal-search .notification').removeClass('display-notification');
    cartIcon.removeClass('fa-check-circle text-success');
    cartIcon.addClass('fa-cart-plus');
  }, 3000);
  e.preventDefault();
});
// view more
$('#meal-search .results .load-more a').on('click', (e) => {
  $('#meal-search .results .load-more a svg').addClass('rotate-circle');
  setTimeout((e) => {
    $('#meal-search .results .load-more a svg').removeClass('rotate-circle');
  }, 1000);
  e.preventDefault();
})
