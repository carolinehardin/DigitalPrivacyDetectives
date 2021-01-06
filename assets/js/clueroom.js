$('document').ready(function(){

    /* start */
    $('.button').click(function(){
        $('.overlay').fadeOut(2000);
        $('.jumbotron').fadeOut(2000);
        $('.finish').fadeIn(2000);
    });

    /* finish */
    $('.finish').click(function(){
        $('.finish').fadeOut(1000);
        $('.hint').fadeOut(1000);
        $('.overlay').fadeIn(1000);
        $('.end').fadeIn(1000);
    });

});