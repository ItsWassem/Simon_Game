gamePattern=[];
userClickedPattern=[];
var level = 0;
var userClickedCounter=0;
buttonColours = ["red","blue","green","yellow"];

$(document).on('keypress',function(e) {
    if(e.which == 13) {

      nextSequence();
      }
      });


      //
      // gamePattern=[];
      // userClickedPattern=[];
      // level = 0;
      // userClickedCounter=0;


      function waitforme(ms){
        return new Promise(resolve =>{
          setTimeout(()=>{resolve('')} ,ms);
        })
      }

async function nextSequence(){
  $(".btn").fadeIn();
  // setTimeout(function() // wait then remove class to animate button pressing
  //   {
  //     alert("entering wait");
  //     // buttonPressed.classList.remove("pressed");
  //     // this.classList.remove("pressed") // this can't be retrive here
  //   }, 10000);
var randomNumber = Math.floor(Math.random()*4);
randomChosenColour = buttonColours[randomNumber];
// console.log(randomChosenColour);
gamePattern.push(randomChosenColour);



for(var k=0; k<=gamePattern.length; k++){

await waitforme(300);

$("#"+gamePattern[k]).fadeOut(100).fadeIn(100);
var myaudio = new Audio('sounds/'+gamePattern[k]+'.mp3');
myaudio.play();

}
$('#level-title').html(level);
level++;
console.log(level);
console.log(gamePattern);
console.log(gamePattern.length);
}

function checkAnswer(){
  if(JSON.stringify(userClickedPattern)==JSON.stringify(gamePattern))
  {

    setTimeout(function() // wait then remove class to animate button pressing
      {  nextSequence();
        userClickedPattern=[];
        userClickedCounter=0;
      }, 1000);


  }
  else
  {
  $('#level-title').html('Game Over');
  $("body").addClass("game-over");
  setTimeout(function() // wait then remove class to animate button pressing
    {
      var audio = new Audio('sounds/gameover2.mp3'); //playing audio
      audio.play();
      $("body").removeClass("game-over");
      $(".btn").fadeOut(2000);
      score = level;
      score--;
      $('#level-title').html('Your score '+ score +'<br><br> Press Enter to Restart');
      level=0;
      userClickedCounter=0;
      gamePattern=[];
      userClickedPattern=[];

    }, 1000);

    // level=0;
    // userClickedCounter=0;
    console.log(level+" "+userClickedCounter);
    // location.reload();
    // gamePattern=[];
    // userClickedPattern=[];
    // level = 0;
    // userClickedCounter=0;
  }
}


// nextSequence();
// nextSequence();
// nextSequence();

console.log(gamePattern.length);
// for (var i=0; i<=gamePattern.length;i++){
//   $("#"+gamePattern[i]).each(function(){
//
//
//     var audio = new Audio('sounds/'+gamePattern[i]+'.mp3'); //playing audio
//     audio.play();
//     this.classList.add("pressed"); // intilzed var so can call ed inside timout function
//     var buttonPressed = this;
//     setTimeout(function() // wait then remove class to animate button pressing
//       {
//         buttonPressed.classList.remove("pressed");
//         // this.classList.remove("pressed") // this can't be retrive here
//       }, 100);
//
//   });
// }
// var randomClick = [];
// // randomClick.push(randomNumber);
// console.log(randomClick);
// for(var i=0; i < $(".btn").length; i++)
// {
//
//
//   // alert(i);
// };



$(".btn").each(function()
{
  // console.log(this.id);
  // console.log(this.hasClass("green"));
   $(this).on("click", function press()
   {
  //    switch(this.id) {
  //   case "blue":
  //     var audio = new Audio('sounds/blue.mp3'); //playing audio
  //     audio.play();
  //   break;
  //   case "green":
  //     var audio = new Audio('sounds/green.mp3'); //playing audio
  //     audio.play();
  //   break;
  //   case "red":
  //     var audio = new Audio('sounds/red.mp3'); //playing audio
  //     audio.play();
  //   break;
  //   case "yellow":
  //     var audio = new Audio('sounds/yellow.mp3'); //playing audio
  //     audio.play();
  //   break;
  //   default:
  // var audio = new Audio('sounds/wrong.mp3'); //playing audio
  // audio.play();
  // }
   // console.log(this.class);
   // debugger;
   userClickedPattern.push(this.id);
    var audio = new Audio('sounds/'+this.id+'.mp3'); //playing audio
    audio.play();
    this.classList.add("pressed"); // intilzed var so can call ed inside timout function
    var buttonPressed = this;
    setTimeout(function() // wait then remove class to animate button pressing
      {
        buttonPressed.classList.remove("pressed");
        // this.classList.remove("pressed") // this can't be retrive here
      }, 100);

      userClickedCounter++;

      if (userClickedCounter==level) {

        checkAnswer();

      }
   });
});
// for(var k=0 ; k<1; k++)
// {
//   nextSequence();
// }
// nextSequence();
// while (userClickedCounter==level) {
//
//   checkAnswer();
//
// }
// nextSequence();
// for(var j=0;j<5;j++)
// {
//
//   if(JSON.stringify(userClickedPattern)==JSON.stringify(gamePattern)){
//     alert("going");
//   }
//   else{
//     alert("not going");
//   }
// }
// nextSequence();
// for(var i=0;i<=gamePattern.length;i++){
//
//   if(gamePattern[i]==userClickedPattern[i]){
//     // nextSequence();
//     alert("correct");
//   }
//   else{
//     alert("game OVER!!! out");
//   }
// }

// JSON.stringify(userClickedPattern)==JSON.stringify(gamePattern);  array comparison
