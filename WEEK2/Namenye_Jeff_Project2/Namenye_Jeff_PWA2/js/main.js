/*  
	Your Project Title
	Author: You
*/

(function($){

    /*========== tooltip =========*/

    $(".masterTooltip").hover(function(){
            //Hover over
            var title = $(this).attributes('title');
            $(this).data('tipText',title).removeAttribute('title');
            $('<p class="tooltip"></p>')
                .text(title)
                .appendTo('body')
                .fadeIn('slow');
        },
        function(){
            //Hover out
            $(this).attributes("title",$(this).data("tipText"));
            $(".toolTip").remove();
        }) .mousemove(function(e) {
            var mousex = e.pageX + 20;
            var mousey = e.pageY + 10;
            $('.tooltip')
                .css({ top:mousey, left:mousex})

        });
	
	
		

	
})(jQuery); // end private scope


