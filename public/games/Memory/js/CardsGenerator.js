function GenerateCards(gameArea, numberOfCards) {
    for (var i = 1; i <= numberOfCards; i++) {
        var flipper = document.createElement("div");
        (function (i) {
            flipper.onclick = function () {
                Flip(i);
            }
        })(i);
        flipper.classList.add("flipper");
        var card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("card-" + i);
        var front = document.createElement("div");
        front.classList.add("front");
        var back = document.createElement("div");
        back.classList.add("back");
        card.appendChild(front);
        card.appendChild(back);
        flipper.appendChild(card);
        gameArea.appendChild(flipper);
        numOfCards = numberOfCards;
    }
}