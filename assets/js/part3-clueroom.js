$('document').ready(function () {

    /* start */
    $('.start-2').click(function () {
        $('.jumbotron').fadeOut(2000);
        $('.notification').delay(2000).fadeIn(500);
        $('.notify-message').delay(3500).fadeIn(1000);
    });

    /* notification next */
    $('.notify-next').click(function () {
        $('.notification').fadeOut(500);
        $('.notify-message').fadeOut(500);
        $('.email').fadeIn(500);
    });

    /* email functionality */
    let tabs = ['#tab-1', '#tab-2', '#tab-3', '#tab-4'];
    let emails = ['#email-1', '#email-2', '#email-3', '#email-4'];
    var currEmail;
    $('.bg-email-tab').click(function () {
        var id = '#' + $(this).attr('id');
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i] == id) {
                $('.selected').removeClass('selected');
                $(id).addClass('selected');
                $(emails[i]).show();
                if (emails[i] != currEmail){
                    $(currEmail).hide();
                }
                currEmail = emails[i];
            }
        }
    });

    /* finish */
    $('.finish').click(function(){
        $('.email').fadeOut(1000);
    });

});