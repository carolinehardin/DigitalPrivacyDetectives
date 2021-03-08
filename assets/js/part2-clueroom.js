$('document').ready(function(){
    var checked = [];
    /* trash 1 */
    $('#trash-1').click(function(){
        $('#trash-1').fadeOut(500);
        checked.push(true);
        report();
    });

    /* trash 2 */
    $('#trash-2').click(function(){
        $('#trash-2').fadeOut(500);
        checked.push(true);
        report();
    });

    /* trash 3 */
    $('#trash-3').click(function(){
        $('#trash-3').fadeOut(500);
        checked.push(true);
        report();
    });

    /* trash 4 */
    $('#trash-4').click(function(){
        $('#trash-4').fadeOut(500);
        checked.push(true);
        report();
    });
    
    /* trash 5 */
    $('#trash-5').click(function(){
        $('#trash-5').fadeOut(500);
        checked.push(true);
        report();
    });

    /* next */
    $('.next').click(function(){
        $('.report').fadeIn(2000);
        $('.report-message').fadeIn(2000);
        $('.message').fadeOut(500);
    });

    /* finish */
    $('.finish').click(function(){
        $('.report').fadeOut(500);
        $('.report-message').fadeOut(500);
    });

    function report(){
        if (checked.length == 5){
            $('.overlay').fadeIn(1000);
            $('.message').fadeIn(1000);
        }
    }
});