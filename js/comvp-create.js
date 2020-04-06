var btn1 = $(".create-title button.nut1");
var btn2 = $(".create-title button.nut2");
//
var listmonan = $(".list-monan .wp-listdesca");
var listtrang = $(".list-monan .wp-listdescb");
console.log(listmonan);
//
listtrang.css("display", "none");
btn2.on("click", (e) => {
  btn2.addClass("action-product");
  btn1.removeClass("action-product");
  listtrang.css("display", "block");
  listmonan.css("display", "none");
});
btn1.on("click", (e) => {
  listtrang.css("display", "none");
  listmonan.css("display", "block");
  btn1.addClass("action-product");
  btn2.removeClass("action-product");
});
