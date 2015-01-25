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

     /*======login======*/

    $('#signinButton').click(function(){
        var user = $('#user').val();
        var pass = $('#pass').val();

        $.ajax({
            url: 'xhr/login.php',
            type: 'post',
            dataType: 'json',
            data:{
                username: user,
                password: pass
            },
            success:function(reponse){
                if(reponse.error){
                    alert(response.error);
                }
                else{window.location.assign('admin.html')
                };
            }
        });
    });

        /*=======logout======*/
     $('#logOut').click(function(e){
         e.preventDefault;
         $.get('xhr/logout.php', function(){
             window.location.assign('index.html')
         })
     });

    /*======registration======*/

     $('#register').on('click', function(){
         var firstname= $('#first').val(),
             lastname= $('#last').val(),
             username= $('#username').val(),
             email= $('#email').val(),
             confirmemail= $('#confiemail').val(),
             password= $('#password').val(),
             confirmpassword= $('#confirmpassword').val();

         $.ajax({
             url: 'xhr/register.php',
             type: 'post',
             dataType: 'json',
             data:{
                 firstname:firstname,
                 lastname:lastname,
                 username:username,
                 email: email,
                 confirmemail:confirmemail,
                 password:password,
                 confirmpassword:confirmpassword

             },

             success: function(response){
                 if(response.error){
                     alert(response.error);
                 } else{
                     window.loction.assign('admin.html')
                 }
             }

         });

     })

    /*======Display Username======*/
    $.getJSON("xhr/check_login.php", function(data){
        console.log(data);
        $.each(data, function(key, val){
            console.log(val.first_name);
            $(".userid").html("Welcome:" +val.firstname);
        })
    });



})(jQuery); // end private scope


