$(document).ready(function(){
  
    $('#reset').on('click', function(){
      //move my doge back to the start 
       $(".furniture").position().left = 800;  
    })
    
    $(".furniture").draggable( 
    {
        stop: function() {
         // alert('dragged'); 
          
          if ( $(".furniture").position().left > 100)
            {
              //they won
              $("body").append("<h2>YOU WON</h2> ") 
            } ); 
          
   
        }
    }); }