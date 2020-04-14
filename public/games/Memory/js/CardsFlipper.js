
function IsCardRevealed(cardId) {
    return revealedCardsIds.find(function (id) {
        return id === cardId;
    });
}

function FlipBack(cardId) {
    var elem = document.querySelector(".card-" + cardId);
    elem.classList.remove("flip");
    elem.lastElementChild.innerHTML = "";
}

function Flip(cardId) {

    if (!cardsComparator.isReadyToCompare(revealedCardsValues) && !IsCardRevealed(cardId)) {
        revealedCardsIds.push(cardId);
        revealedCardsValues.push(cards[cardId - 1].value);
        var elem = document.querySelector(".card-" + cardId);
        elem.classList.add("flip");
        elem.lastElementChild.innerHTML = cards[cardId - 1].text;
    }

    if (cardsComparator.isReadyToCompare(revealedCardsValues))
        window.setTimeout(CompareCards, 1000);
}

function CompareCards() {
    if(cardsComparator.areCardsMatched(revealedCardsValues)) {
        for (var i = 0; i < revealedCardsIds.length; i++)
            document.querySelector(".card-" + revealedCardsIds[i]).remove();
        score+= 50;
        document.querySelector("#scoreLabel").innerHTML = "Score: " + score;
    } else {
        for(var i = 0; i < revealedCardsIds.length; i++)
            FlipBack(revealedCardsIds[i]);
    }

    revealedCardsIds = [];
    revealedCardsValues = [];
}