$('document').ready(function(){
    var checked = [note1, note2, note3, cards, books];
    /* note 1 */
    $('#note1').click(function(){
        $('#note1').fadeOut(500);
        $('.finish').fadeOut(1000);
        $('.overlay').fadeIn(1000);
        $('.note-pressed').fadeIn(2000)
        .css('filter', 'none');
        $('.note1-message').fadeIn(2000);
        $('.note1-writing').fadeIn(2000);
    });
    $('.note1-next').click(function(){
        $('.note-pressed').fadeOut(500);
        $('.note1-message').fadeOut(500);
        $('.note1-writing').fadeOut(500);
        $('.overlay').fadeOut(2000);
        $('#note1').fadeIn(2000);
        checked[0] = true;
        hint();
    });
    
    /* note 2 */
    $('#note2').click(function(){
        $('#note2').fadeOut(500);
        $('.finish').fadeOut(1000);
        $('.overlay').fadeIn(1000);
        $('.note-pressed').fadeIn(2000)
        .css('filter', 'sepia(70%)');
        $('.note2-message').fadeIn(2000);
        $('.note2-writing').fadeIn(2000);
    });
    $('.note2-next').click(function(){
        $('.note-pressed').fadeOut(500);
        $('.note2-message').fadeOut(500);
        $('.note2-writing').fadeOut(500);
        $('.overlay').fadeOut(2000);
        $('#note2').fadeIn(2000);
        checked[1] = true;
        hint();
    });

    /* note 3 */
    $('#note3').click(function(){
        $('#note3').fadeOut(500);
        $('.finish').fadeOut(1000);
        $('.overlay').fadeIn(1000);
        $('.note-pressed').fadeIn(2000)
        .css('filter', 'none');
        $('.note3-message').fadeIn(2000);
        $('.note3-writing').fadeIn(2000);
    });
    $('.note3-next').click(function(){
        $('.note-pressed').fadeOut(500);
        $('.note3-message').fadeOut(500);
        $('.note3-writing').fadeOut(500);
        $('.overlay').fadeOut(2000);
        $('#note3').fadeIn(2000);
        checked[2] = true;
        hint();
    });

    /* cards */
    $('.cards').click(function(){
        $('.cards').fadeOut(500);
        $('.finish').fadeOut(1000);
        $('.overlay').fadeIn(1000);
        $('.cards-pressed').fadeIn(2000);
        $('.cards-message').fadeIn(2000);
    });
    $('.cards-next').click(function(){
        $('.cards-pressed').fadeOut(500);
        $('.cards-message').fadeOut(500);
        $('.overlay').fadeOut(2000);
        $('.cards').fadeIn(2000);
        checked[3] = true;
        hint();
    });

    /* bookStack secret papers */
    $('#books').click(function(){
        $('.finish').fadeOut(1000);
        $('.overlay').fadeIn(1000);
        $('.books-message').fadeIn(2000);
    });

    $('.papers-no').click(function(){
        $('.books-message').fadeOut(500);
        $('.overlay').fadeOut(2000);
        checked[4] = true;
        hint();
    });

    $('.papers-yes').click(function(){
        $('.books-message').fadeOut(500);
        $('.papers').fadeIn(2000);
        $('.papers-message').fadeIn(2000);
        checked[4] = true;
    });

    $('.papers-next').click(function(){
        $('.papers').fadeOut(500);
        $('.papers-message').fadeOut(500);
        $('.overlay').fadeOut(2000);
        hint();
    });

    /* finish */
    $('.finish').click(function(){
        $('.hint').fadeOut(1000);
        $('.overlay').fadeIn(1000);
    });

    function hint(){
        var i;
        var message = false;
        for (i = 0; i < checked.length; i++) {
            if (checked[i] == true){
                message = true;
            }
            else{
                message = false;
                return;
            }
        }
        if (message = true){
            $('.hint').fadeIn(2000);
        }
    }
});