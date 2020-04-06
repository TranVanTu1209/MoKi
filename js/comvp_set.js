var linka = $(".comvp-navbar button.comboudai");
var linkb = $(".comvp-navbar button.goithem");
var linkc = $(".comvp-navbar button.nuocgk");
//
var lista = $(".detail-desc .list-combo");
var listb = $(".detail-desc .list-goithem");
var listc = $(".detail-desc .list-nuocgk");
//

listb.css("display", "none");
listc.css("display", "none");
linkb.on("click", (e) => {
  listb.css("display", "block");
  lista.css("display", "none");
  listc.css("display", "none");
  linkb.addClass("create-active");
  linka.removeClass("create-active");
  linkc.removeClass("create-active");
});
linka.on("click", (e) => {
  linka.addClass("create-active");
  linkb.removeClass("create-active");
  linkc.removeClass("create-active");
  lista.css("display", "block");
  listb.css("display", "none");
  listc.css("display", "none");
});
linkc.on("click", (e) => {
  linkc.addClass("create-active");
  linkb.removeClass("create-active");
  linka.removeClass("create-active");
  lista.css("display", "none");
  listb.css("display", "none");
  listc.css("display", "block");
});
