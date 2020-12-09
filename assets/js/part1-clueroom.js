$('document').ready(function(){
    /* note 1 */
    $('#note1').click(function(){
        $('#note1').fadeOut(function(){
            $(this).removeClass('note');
        });
        $('#note1').fadeIn(function(){
            $(this).addClass('note-pressed');
        });
        $('.overlay').fadeIn(1000);
        $('.note1-message').fadeIn(2000);
    });

    $('.note1-next').click(function(){
        $('#note1').fadeOut(function(){
            $(this).removeClass('note-pressed');
        });
        $('#note1').fadeIn(function(){
            $('#note1').addClass('note');
        });
        $('.note1-message').fadeOut(500);
    });

    /* note 2 */
    $('#note2').click(function(){
        $('#note2').fadeOut(function(){
            $(this).removeClass('note');
        });
        $('#note2').fadeIn(function(){
            $(this).addClass('note-pressed');
        });
        $('.overlay').fadeIn(1000);
        $('.note2-message').fadeIn(2000);
    });

    $('.note2-next').click(function(){
        $('#note2').fadeOut(function(){
            $(this).removeClass('note-pressed');
        });
        $('#note2').fadeIn(function(){
            $('#note2').addClass('note');
        });
        $('.note2-message').fadeOut(500);
    });

    /* note 3 */
    $('#note3').click(function(){
        $('#note3').fadeOut(function(){
            $(this).removeClass('note');
        });
        $('#note3').fadeIn(function(){
            $(this).addClass('note-pressed');
        });
        $('.overlay').fadeIn(1000);
        $('.note3-message').fadeIn(2000);
    });

    $('.note3-next').click(function(){
        $('#note3').fadeOut(function(){
            $(this).removeClass('note-pressed');
        });
        $('#note3').fadeIn(function(){
            $('#note3').addClass('note');
        });
        $('.note3-message').fadeOut(500);
    });

});