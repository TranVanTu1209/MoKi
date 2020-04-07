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
$("#main_search_setmenu_btns").click(function () {
    $("#main_search_setmenus").addClass("show");
    $("#main_search_monans").removeClass("show");
    $("#main_search_setmenu_btns").addClass("main_right_btn_active");
    $("#main_search_monan_btns").removeClass("main_right_btn_active");
});
$("#main_search_monan_btns").click(function () {
    $("#main_search_setmenus").removeClass("show");
    $("#main_search_monans").addClass("show");
    $("#main_search_setmenu_btns").removeClass("main_right_btn_active");
    $("#main_search_monan_btns").addClass("main_right_btn_active");
});
$listsltpp = "";
for ($i = 1; $i < 10; $i++)
{
    $listsltpp += '<option value="p' + $i + '">' + $i + ' người</option>'
}
$("#peopleform").html($listsltpp);
$("#peopleformmd").html($listsltpp);
$("#clickshow").click(function () {
    $(".main_left").addClass("show");
})
$(".main_right").click(function () {
    if ($(".main_left").attr("class") == "main_left show")
    {
        $(".main_left").removeClass("show");
    }
});



$("#btn_td_ngay").click(function () {
    $("#tdngay").addClass("td_show");
    $("#tdthang").addClass("tdthang");
    $("#btn_td_ngay").addClass("main_right_btn_active");
    $("#btn_td_thang").removeClass("main_right_btn_active");
});
$("#btn_td_thang").click(function () {
    $("#tdthang").removeClass("tdthang");
    $("#tdngay").removeClass("td_show");
    $("#btn_td_thang").addClass("main_right_btn_active");
    $("#btn_td_ngay").removeClass("main_right_btn_active");
});
$('.search-meal #list-menu').css('display', 'none');
// toggle search menu
$('.search-meal .btn-meal').on('click', (e) => {
    $('.search-meal #list-mon-an').css('display', 'block');
    $('.search-meal #list-menu').css('display', 'none');
    $('.search-meal .btn-meal').addClass('active');
    $('.search-meal .btn-menu-meal').removeClass('active');
});
$('.search-meal .btn-menu-meal').on('click', (e) => {
    $('.search-meal #list-mon-an').css('display', 'none');
    $('.search-meal #list-menu').css('display', 'block');
    $('.search-meal .btn-meal').removeClass('active');
    $('.search-meal .btn-menu-meal').addClass('active');
});