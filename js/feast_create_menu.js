// toggle btn
var dishBtn = $('#alternative-menu button.list-dish');
var menuDishBtn = $('#alternative-menu button.list-dish-menu');
var dishList = $('#alternative-menu .list-dish-alternative');
var dishComboList = $('#alternative-menu .list-combo-alternative');
dishList.css('display', 'none');
// dishList.addClass('hide');
dishBtn.on('click', (e) => {
  menuDishBtn.removeClass('active');
  dishBtn.addClass('active');
  dishList.css('display', 'block');
  dishComboList.css('display', "none");
});
menuDishBtn.on('click', (e) => {
  dishBtn.removeClass('active');
  menuDishBtn.addClass('active');
  dishComboList.css('display', "block");
  dishList.css('display', 'none');
});

// notification success
var modalAddToCartSuccess = $('#add-to-cart-success');
setInterval((e) => {
  modalAddToCartSuccess.modal('hide');
}, 3000);
