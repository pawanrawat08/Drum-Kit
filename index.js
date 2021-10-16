// / alert("I got clicked!");

// document.querySelector("button").addEventListener("click", function(){
//     alert("I got clicked!");
// });

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         // console.log(this.style.color = "white");    
//         // this.style.color = "white"   
//         if (this.innerHTML == "a") {
//             var audio = new Audio("sounds/tom-2.mp3");
//             audio.play();
//         }
//         if (this.innerHTML == "w") {
//             var audio = new Audio("sounds/tom-1.mp3");
//             audio.play();
//         }
//         if (this.innerHTML == "s") {
//             var audio = new Audio("sounds/tom-3.mp3");
//             audio.play();
//         }
//         if (this.innerHTML == "d") {
//             var audio = new Audio("sounds/tom-4.mp3");
//             audio.play();
//         }
//         if (this.innerHTML == "j") {
//             var audio = new Audio("sounds/snare.mp3");
//             audio.play();
//         }
//         if (this.innerHTML == "k") {
//             var audio = new Audio("sounds/crash.mp3");
//             audio.play();
//         }
//         if (this.innerHTML == "l") {
//             var audio = new Audio("sounds/kick-bass.mp3");
//             audio.play();
//         }
//     });
// }

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

//console.log(this);  


// document.addEventListener("keypress", function(event){
// console.log(event);
// });

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTMl = this.innerHTML;
        makeSound(buttonInnerHTMl);
        buttonAnimation(buttonInnerHTMl);
    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default: console.log(buttonInnerHTMl);

    }
}

function buttonAnimation(currKey){
    var activeButton = document.querySelector("." + currKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed"); }, 100);
}