var noOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    makeSound(this.innerHTML);

    buttonAnimation(this.innerHTML);

  });
}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {
  switch (key) {
    case 'w':
      var media = new Audio("sounds/tom-1.mp3");
      media.play();
      break;
    case 'a':
      var media1 = new Audio("sounds/tom-2.mp3");
      media1.play();
      break;
    case 's':
      var media2 = new Audio("sounds/tom-3.mp3");
      media2.play();
      break;
    case 'd':
      var media3 = new Audio("sounds/tom-4.mp3");
      media3.play();
      break;
    case 'j':
      var media4 = new Audio("sounds/snare.mp3");
      media4.play();
      break;
    case 'k':
      var media5 = new Audio("sounds/crash.mp3");
      media5.play();
      break;
    case 'l':
      var media6 = new Audio("sounds/kick-bass.mp3");
      media6.play();
      break;
    default:
      console.log(this.innerHTML);
      break;
  }
}


function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function (){
    activeButton.classList.remove("pressed");
  }, 100);
}
