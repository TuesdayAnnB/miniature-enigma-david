$(document).ready(function(){
  let chairStyle = document.getElementById("chair").style;
  let paintingStyle = document.getElementById("painting").style;
  let plantStyle = document.getElementById("pottedplant").style;
  let kaboomStyle = document.getElementById("kaboom").style;

  let positions = [ ["30%", "40%", "67%"], ["75%", "43%", "75%"] ];
  let randPosition = (Math.floor(Math.random() * 3));

  let originalKaboom = document.getElementById("kaboom").src;
  document.getElementById("kaboom").style.left = (positions[0][randPosition]);
  document.getElementById("kaboom").style.top = (positions[1][randPosition]);

    $('#reset').on('click', function(){
      document.getElementById("kaboom").src = originalKaboom;
      document.getElementById("kaboom").style = kaboomStyle;
      document.getElementById("victoryMessage").innerText = "Find the surprise!"; 
      document.getElementById("chair").style = chairStyle;
      document.getElementById("painting").style = paintingStyle;
      document.getElementById("pottedplant").style = plantStyle;

      // move the 'surprise'
      randPosition = (Math.floor(Math.random() * 3));
      document.getElementById("kaboom").style.left = (positions[0][randPosition]);
      document.getElementById("kaboom").style.top = (positions[1][randPosition]);
    });

    $("#kaboom").on('click', function(){
        document.getElementById("kaboom").src = "https://www.onlygfx.com/wp-content/uploads/2018/02/starburst-explosion-2-2-1024x770.png";
        document.getElementById("kaboom").style.maxWidth = "10%";
        document.getElementById("victoryMessage").innerText = "You found it!"; 
        
      });

    $(".furniture").draggable()
  });
