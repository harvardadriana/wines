$(document).ready(function(){

             // validates fields
            $('button').tap(function(submit){
                  if ($('#winename').val().length == 0) {
                        $('.blank').text('Please enter the wine you are rating');
                        submit.preventDefault();        
                  } else {
                        $('.blank').text('');
                        alert('Your review has been submitted!');
                        submit.preventDefault();
                  }
            });

            $('#winename').tap(function(){
                  $('.blank').text('');
            });

            // rotate images with tapping 
             $('.panel').bind('tap', function(){
                       $(this).css('transform', 'rotateY(180deg)');
                       setTimeout(function(){
                            $('.panel').css('transform', 'rotateY(0deg)')}, 2500);
             });

});