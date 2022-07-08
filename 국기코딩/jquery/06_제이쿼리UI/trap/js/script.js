
var dpForm=$("#from").datepicker({
    dateFormat:"yy-mm-dd",
});
dpForm.datepicker("setDate", new Date());

var dpTo=$("#to").datepicker({
    dateFormat:"yy-mm-dd",
});
dpTo.datepicker("setDate", 7);

$(window).on('scroll',function(){
    var top = $(document).scrollTop();
    if(top > 0){
        $('#header').addClass('fixed')
    }
    else{
        $('#header').removeClass('fixed')
    }
})