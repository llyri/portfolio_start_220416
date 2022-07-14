setInterval(clack, 1000)

function clack() {
    var now = new Date();
    var hr = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var hNum, mNum, sNum;

    if (hr < 10) {
        hNum = "0" + hr;
    } else {
        hNum = hr;
    }
    if (min < 10) {
        mNum = "0" + min;
    } else {
        mNum = min;
    }
    if (sec < 10) {
        sNum = "0" + sec;
    } else {
        sNum = sec;
    }

    $(".screen span:eq(0)").text(hNum);
    $(".screen span:eq(1)").text(mNum);
    $(".screen span:eq(2)").text(sNum);
}

//배경변경
var nowBg = new Date();
var hrBg = nowBg.getHours();

//5~12 morning/ 12~17 afternoon / 17~20 evening / 20~ 24 night
if (hrBg >= 5 && hrBg < 12) {
    $("#wrap, .bottom_menu li a").removeClass();
    $("#wrap").addClass("morning");
    $(".bottom_menu li:eq(0)").children("a").addClass("on");
} else if (hrBg >= 12 && hrBg < 17) {
    $("#wrap").removeClass();
    $("#wrap").addClass("afternoon");
    $(".bottom_menu li:eq(1)").children("a").addClass("on");
} else if (hrBg >= 17 && hrBg < 20) {
    $("#wrap").removeClass();
    $("#wrap").addClass("evening");
    $(".bottom_menu li:eq(2)").children("a").addClass("on");
} else if (hrBg >= 20 && hrBg < 25) {
    $("#wrap").removeClass();
    $("#wrap").addClass("night");
    $(".bottom_menu li:eq(3)").children("a").addClass("on");
}

$('.bottom_menu a').on('click', function (e) {
    e.preventDefault();
    var className = $(this).text();
    $('.bottom_menu a, #wrap').removeClass(); 
    $('#wrap').addClass(className)
    $(this).addClass('on')
})