
var isPlaying = false;

function PlaySound(padId) {
    if(isPlaying == false) {
        var snd = new Audio("../wav/" + padId + ".wav");
        var pad = document.getElementById(padId);
        snd.volume = 0.2;
        snd.play();
        pad.classList.add('playing');
        isPlaying = true;
        setTimeout(function () {
            snd.pause();
            pad.classList.remove('playing');
            isPlaying = false;
        }, 500);
    }
}

window.addEventListener("load", GameStart);

function GameStart(){

}