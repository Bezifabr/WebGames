var score  = 0;
var aWidth;
var aHeight;
var timer;
var timeLeft = 30;

window.addEventListener('load', setGameAreaBounds);

function setGameAreaBounds() {

    aWidth = innerWidth;
    aHeight = innerHeight;
    aWidth -= 22;
    aHeight -= 97;
    document.getElementById('gameArea').style.width = aWidth + 'px';
    document.getElementById('gameArea').style.height = aHeight + 'px';
    document.getElementById('dot').addEventListener('click', detectHit);
    aWidth -= 174;
    aHeight -= 174;
    iterate();
}

function detectHit() {
    score += 1;
    document.getElementById('scoreLabel').innerHTML = "Score: " + score;
    moveDot();
}

function iterate() {

    if(timeLeft > 0) {
        timer = setTimeout("iterate()", 1000);
        timeLeft--;
        document.getElementById('timeLabel').innerHTML = "Time left: " + timeLeft;
    }
    else {
        clearTimeout(timer);
        document.getElementById('scoreLabel').innerHTML += "     GAME OVER!";
        document.getElementById('timeLabel').innerHTML = "";
        document.getElementById('dot').removeEventListener("click", detectHit);
    }
}

function moveDot() {
    var x = Math.floor(Math.random()*aWidth);
    var y = Math.floor(Math.random()*aHeight);
    if(x<10)
        x=10;
    if(y<10)
        y=10;

    document.getElementById('dot').style.left = x + 'px';
    document.getElementById('dot').style.top = y + 'px';
}