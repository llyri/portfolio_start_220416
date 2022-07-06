$(".menu-area").click(function(){
    $(".gnb").stop().animate({left:0}, 200);
    $(".overlay").fadeIn(200);
});
$(".btn-close-area").click(function(){
    $(".gnb").stop().animate({left:"-100%"}, 200);
    $(".overlay").fadeOut(200);
});

//animation
var sel1 = $(".sec1").find(".tit").offset().top;
var sel2 = $(".sec2").find(".pic").offset().top;
$(window).scroll(function(){
    var sct = $(document).scrollTop();
    if(sct>= sel1-100){
        $(".sec1").find(".tit").addClass("ani_slideUp");
        $(".sec1").find("h3").addClass("ani_slideUp");
        $(".sec1").find("p").addClass("ani_fadeIn");
    }
    if(sct>= sel2-200){
        $(".sec2").find(".pic").addClass("ani_slideUp");
    }

    //플로팅메뉴 안보였다가 보이게
    if(sct>=1200){
        $(".float-menu").fadeIn();
    }else{
        $(".float-menu").fadeOut();
    }
});

//플로팅메뉴
// $(".btn_menu").click(function(){
//     $(".menu-box").toggleClass("on");
//     $(".overlay").fadeToggle();
//     return false;
// });

$(".btn_menu").click(function(){
    if($(".menu-box").hasClass("on")==false){
        $(".menu-box").addClass("on");
        $(".overlay").fadeIn();
        $("body").css({overflow:"hidden"});
    }else{
        $(".menu-box").removeClass("on");
        $(".overlay").fadeOut();
        $("body").css({overflow:"auto"});
    }
    return false;
})
