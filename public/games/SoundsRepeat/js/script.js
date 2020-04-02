var score = 0;
var gameOver = false;
var sequenceQueue = [];
var secondQueue = [];
var gameOver = false;

function PlaySound(padId) {
    if (gameOver == false) {
        var padSound = new Audio("../wav/pad" + padId + ".wav");
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
    sequenceQueue.push(padNumber);
    secondQueue = Object.create(sequenceQueue);
    console.log("Pad" + padNumber + "     secondQueue " + secondQueue.length);
    setTimeout(function () {
        PlaySound(padNumber);
    }, 1000);
}

function GameStart() {
    RandomizePad();
}

function GameOver() {
    gameOver = true;
}

function CheckPad(padNumber) {
    if (gameOver == false) {
        if (secondQueue.length > 0) {
            var currentPad = secondQueue.shift();
            if (padNumber != currentPad)
                GameOver();
            else
                PlaySound(currentPad);

            if (gameOver == false && secondQueue.length <= 0) {
                score++;
                document.getElementById("scoreLabel").innerHTML = "Score: " + score;
                RandomizePad();
            }
        }
    }
}

window.onload = setTimeout(GameStart, 1000);