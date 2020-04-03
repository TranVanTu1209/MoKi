$("#main_search_setmenu_btn").click(function () {
    $("#main_search_setmenu").addClass("show");
    $("#main_search_monan").removeClass("show");
    $("#main_search_setmenu_btn").addClass("main_right_btn_active");
    $("#main_search_monan_btn").removeClass("main_right_btn_active");
});
$("#main_search_monan_btn").click(function () {
    $("#main_search_setmenu").removeClass("show");
    $("#main_search_monan").addClass("show");
    $("#main_search_setmenu_btn").removeClass("main_right_btn_active");
    $("#main_search_monan_btn").addClass("main_right_btn_active");
});
$listsltpp = "";
for ($i = 1; $i < 10; $i++) {
    $listsltpp += '<option value="p' + $i + '">' + $i + ' người</option>'
}
$("#peopleform").html($listsltpp);
$("#peopleformmd").html($listsltpp);
$("#clickshow").click(function () {
    $(".main_left").addClass("show");
})
$(".main_right").click(function () {
    if ($(".main_left").attr("class") == "main_left show") {
        $(".main_left").removeClass("show");
    }
})