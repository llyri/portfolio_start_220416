$(".menu_area").click(function(){
    $('.gnb').stop().animate({left:'0'},200)
    $('.overlay').fadeIn(200)
})
$(".btn_close_area").click(function(){
    $('.gnb').stop().animate({left:'-100%'},200);
    $('.overlay').fadeOut(200)
})