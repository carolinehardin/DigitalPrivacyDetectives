$('document').ready(function(){

    /* start */
    $('.start').click(function(){
        $('.jumbotron').fadeOut(2000);
        $('.overlay').fadeOut(2000);
    });

    /* button */
    $('.button').click(function(){
        $('.finish').fadeIn(2000);
    });

    /* finish */
    $('.finish').click(function(){
        $('.finish').fadeOut(1000);
        $('.end').fadeIn(2000);
    });

});