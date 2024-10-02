$(document).ready(function(){
  let chairStyle = document.getElementById("chair").style;
  let paintingStyle = document.getElementById("painting").style;
  let plantStyle = document.getElementById("pottedplant").style;
  let positions = [ ["30%", "45%", "67%"], ["75%", "45%", "75%"] ];
  let randPosition = (Math.floor(Math.random() * 3));
  
  document.getElementById("kaboom").style.left = (positions[0][randPosition]);
  document.getElementById("kaboom").style.top = (positions[1][randPosition]);

    $('#reset').on('click', function(){
      document.getElementById("chair").style = chairStyle;
      document.getElementById("painting").style = paintingStyle;
      document.getElementById("pottedplant").style = plantStyle;

    });

    $(".furniture").draggable()
  });
