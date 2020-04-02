
var gameOver = false;

function PlaySound(padId) {
    if (gameOver == false) {
        var padSound = new Audio("../wav/pad"+padId + ".wav");
        var pad = document.getElementById("pad" + padId);
        padSound.currentTime = 0;
        padSound.volume = 0.2;
        padSound.play();
        pad.classList.add('playing');
        setTimeout(function () {
            padSound.pause();
            pad.classList.remove('playing');
        }, 500);
    }
}


function RandomizePad() {
    var padNumber = Math.floor(Math.random() * 4) + 1;

    PlaySound(padNumber);
}

function GameStart(){
    RandomizePad();

}

window.onload = setTimeout(GameStart, 1000);