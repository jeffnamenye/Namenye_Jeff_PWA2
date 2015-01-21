/*  
	Your Project Title
	Author: You
*/

(function($){

    /*========== tooltip =========*/

    $('.masterTooltip').hover(function(){
            //Hover over
            var title = $(this).attr('title');
            $(this).data('tipText' ,title).removeAttr('title');
            $('<p class="tooltip"></p>')
                .text(title)
                .appendTo('body')
                .fadeIn('slow');
        },
        function(){
            //Hover out
            $(this).attr('title',$(this).data('tipText'));
            $('.toolTip').remove();
        }) .mousemove(function(e) {
            var mousex = e.pageX + 20;
            var mousey = e.pageY + 10;
            $('.tooltip')
                .css({ top:mousey, left:mousex})

        });

    /*======Tabbed Accordion======*/
    $('#tabs p').hide().eq(0).show();
    $('#tabs p:not(:first)').hide();

    $('#tabs-nav li').click(function(e){
        e.preventDefault();
        $('#tabs p').hide();

        $('#tabs-nav .current').removeClass("current");
        $(this).addClass('current');
        var clicked = $(this).find('a:first').attr('href');

        $('#tabs ' + clicked).fadeIn('fast');
    }).eq(0).addClass('current');


	/*=======Modal fading=====*/
    $('.modalClick').on('click', function(event){
        event.preventDefault();
        $('#overlay')
            .fadeIn()
            .find('#modal')
            .fadeIn();
    });

    $('.close').on('click', function(event){
        event.preventDefault();
        $('#overlay')
            .fadeOut()
            .find('#modal')
            .fadeOut();
    });

    $('.mystatus').mouseover(function(){
        $(this).fadeTo(100, .3);
     });

    $('.mystatus').mouseout(function(){
        $(this).fadeTo(100, 1);
    });



	
})(jQuery); // end private scope


