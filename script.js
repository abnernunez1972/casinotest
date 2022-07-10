// Immediately invoked function expression
// to not pollute the global scope
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const back= document.querySelector('.back')
  var deg = 0;
  var ganador ;

  //startButton.addEventListener('click', () => {
    // Disable button during spin
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
 
    //deg =40 ;
    // Set the transition on the wheel
    wheel.style.transition = 'all 10s ease ';
    back.style.transition = 'all 14s ease-out';
    
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
    back.classList.add('rainbow');
 // });

  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    back.classList.remove('rainbow');
    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value from 360
    const actualDeg = deg % 360;

    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    
    
    var element = document.getElementById("result");
   
   
    
    if (actualDeg>=0 && actualDeg<10 ){
      document.getElementById("result").textContent="26 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=10 && actualDeg<20 ){
      document.getElementById("result").textContent="3 ROJO";
      element.classList.remove("green");
       element.classList.remove("black");
      element.classList.add("red");
      ganador = "rojo";
    }
    if (actualDeg>=20 && actualDeg<30 ){
      document.getElementById("result").textContent="35 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=30 && actualDeg<39 ){
      document.getElementById("result").textContent="12 ROJO";
      element.classList.remove("green");
       element.classList.remove("black");
      element.classList.add("red");
      ganador = "rojo";
    }
    if (actualDeg>=39 && actualDeg<49 ){
      document.getElementById("result").textContent="28 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=49 && actualDeg<59 ){
      document.getElementById("result").textContent="7 ROJO";
      element.classList.remove("green");
       element.classList.remove("black");
      element.classList.add("red");
      ganador = "rojo";
    }
    if (actualDeg>=59 && actualDeg<69 ){
      document.getElementById("result").textContent="29 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=69 && actualDeg<78 ){
      document.getElementById("result").textContent="18 ROJO";
      element.classList.remove("green");
       element.classList.remove("black");
      element.classList.add("red");
      ganador = "rojo";
    }
    if (actualDeg>=78 && actualDeg<88 ){
      document.getElementById("result").textContent="22 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=88 && actualDeg<98 ){
      document.getElementById("result").textContent="9 ROJO";
      element.classList.remove("green");
       element.classList.remove("black");
      element.classList.add("red");
      ganador = "rojo";
    }
    if (actualDeg>=98 && actualDeg<107 ){
      document.getElementById("result").textContent="31 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=107 && actualDeg<117 ){
          document.getElementById("result").textContent="14 ROJO";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
          ganador = "rojo";
    }
    if (actualDeg>=117 && actualDeg<127 ){
      document.getElementById("result").textContent="20 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=127 && actualDeg<137 ){
          document.getElementById("result").textContent="1 ROJO";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
          ganador = "rojo";
    }
    if (actualDeg>=137 && actualDeg<146 ){
      document.getElementById("result").textContent="33 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=146 && actualDeg<156 ){
          document.getElementById("result").textContent="16 ROJO";
          element.classList.remove("green");
          element.classList.remove("black");
          element.classList.add("red");
          ganador = "rojo";
    }
    if (actualDeg>=156 && actualDeg<166 ){
      document.getElementById("result").textContent="24 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=166 && actualDeg<176 ){
          document.getElementById("result").textContent="5 ROJO";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
          ganador = "rojo";
    }
    if (actualDeg>=176 && actualDeg<185 ){
      document.getElementById("result").textContent="10 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=185 && actualDeg<195 ){
          document.getElementById("result").textContent="23 ROJO";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
          ganador = "rojo";
    }
    if (actualDeg>=195 && actualDeg<205 ){
      document.getElementById("result").textContent="8 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=205 && actualDeg<215 ){
          document.getElementById("result").textContent="30 ROJO";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
          ganador = "rojo";
    }
    if (actualDeg>=215 && actualDeg<224 ){
      document.getElementById("result").textContent="11 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=224 && actualDeg<234 ){
          document.getElementById("result").textContent="36 ROJO";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
                ganador = "rojo";
    }
    if (actualDeg>=234 && actualDeg<244 ){
      document.getElementById("result").textContent="13 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=244 && actualDeg<253 ){
          document.getElementById("result").textContent="21 ROJO";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
          ganador = "rojo";
    }
    if (actualDeg>=253 && actualDeg<263 ){
      document.getElementById("result").textContent="6 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=263 && actualDeg<273 ){
          document.getElementById("result").textContent="34 ROJO";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
          ganador = "rojo";
    }
    if (actualDeg>=273 && actualDeg<283 ){
      document.getElementById("result").textContent="17 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=283 && actualDeg<292 ){
          document.getElementById("result").textContent="25 ROJO";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
          ganador = "rojo";
    }
    if (actualDeg>=292 && actualDeg<302 ){
      document.getElementById("result").textContent="2 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=302 && actualDeg<312 ){
          document.getElementById("result").textContent="21 ROJO";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
          ganador = "rojo";
    }
    if (actualDeg>=312 && actualDeg<322 ){
      document.getElementById("result").textContent="4 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
    }
    if (actualDeg>=322 && actualDeg<331 ){
          document.getElementById("result").textContent="19 ROJO";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
          ganador = "rojo";
    }
    if (actualDeg>=331 && actualDeg<341 ){
      document.getElementById("result").textContent="15 NEGRO";
      element.classList.remove("green");
       element.classList.remove("red");
      element.classList.add("black");
      ganador = "negro";
     }
    if (actualDeg>=341 && actualDeg<350 ){
          document.getElementById("result").textContent="32 ROJO";
          element.classList.remove("green");
           element.classList.remove("black");
          element.classList.add("red");
          ganador = "rojo";
    }
    if (actualDeg>=350 && actualDeg<360 ){
      document.getElementById("result").textContent="0 VERDE";
      element.classList.remove("black");
      element.classList.remove("red");
      element.classList.add("green");
      ganador = "verde";
    }
    
     }
  );
})();
