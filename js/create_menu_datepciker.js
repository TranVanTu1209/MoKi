$(function () {
  $(".datepicker").datepicker();
  // hide datepicker
  var datePicker = $(".datepicker-container");
  console.log(datePicker);
  $(".datepicker-panel ul li").on("click", (e) => {
    $(".datepicker").datepicker("hide");
    e.preventDefault();
    console.log("click");
  });
});
console.log($("ul li"));