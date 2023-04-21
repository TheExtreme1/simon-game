var gamePattern = [];
var buttonList = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var level = 0;

var started = false;

$(document).keydown(function () {
  if (!started) {
    buttonPattern();
    started = true;
  }
});


function buttonPattern() {
  var randomButton = Math.floor(Math.random() * 4);

  gamePattern.push(buttonList[randomButton]);
  $("." + buttonList[randomButton]).fadeOut(100).fadeIn(100);
  var audio = new Audio("./sounds/" + buttonList[randomButton] + ".mp3");
  audio.play();
  level++;
  $("h1").text("Level " + level);
  userClickedPattern = [];
  console.log(gamePattern);
  console.log(level);
}

$("button").click( function () {
    var myClass = $(this).attr("class");
    $("." + myClass).fadeOut(100).fadeIn(100);
    var audioUser = new Audio("./sounds/" + myClass + ".mp3");
    audioUser.play();
    userClickedPattern.push(myClass)
    levelCheck(userClickedPattern.length - 1);

});

function levelCheck(index) {
  
  if (gamePattern[index] === userClickedPattern[index]) {
    console.log("good");
    if (gamePattern.length === userClickedPattern.length){
      setTimeout(buttonPattern, 1000);

    }
  } 
  
  else {
    started = false;
    $("h1").text("Game over. Press on any key to restart.")
    gamePattern=[];
    level = 0
    var wrongSound = new Audio("sounds/wrong.mp3");
    wrongSound.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
}


}