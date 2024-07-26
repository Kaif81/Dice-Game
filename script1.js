function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
   
    
  
    // Change the image source
    document.querySelector(".dice-img1").setAttribute("src", "dice" + randomNumber1 + ".png");
    document.querySelector(".dice-img2").setAttribute("src", "dice" + randomNumber2 + ".png");
  }
  