// body 태그 마지막에 넣게 되면 $(function)안 써도 됨
// $(function(){

// })

$('.menu_area').click(function () {
    $('.gnb').stop().animate({ right: 0 }, 200)
});

$('.btn_close').click(function () {
    $('.gnb').stop().animate({ right: '-100%' }, 200)
    $('.sub').stop().slideUp();
    $('.tit').removeClass('on')
    return false;
});

$('.tit').click(function () {
    $('.sub').stop().slideUp();
    $('.tit').removeClass('on')
    $(this).next().stop().slideDown();
    $(this).addClass('on')
});



