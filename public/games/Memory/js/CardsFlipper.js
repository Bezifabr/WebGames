
var numOfCards = 0;

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

function AddCardToRevealed(cardId) {
    revealedCardsIds.push(cardId);
    revealedCardsValues.push(cards[cardId - 1].value);
}

function FlipCard(cardId) {
    var elem = document.querySelector(".card-" + cardId);
    elem.classList.add("flip");
    elem.lastElementChild.innerHTML = cards[cardId - 1].text;
}

function OnCardClick(cardId) {

    if (!cardsComparator.isReadyToCompare(revealedCardsValues) && !IsCardRevealed(cardId)) {
        AddCardToRevealed(cardId);
        FlipCard(cardId);
    }

    if (cardsComparator.isReadyToCompare(revealedCardsValues))
        window.setTimeout(CompareCards, 1000);
}

function CompareCards() {
    if(cardsComparator.areCardsMatched(revealedCardsValues)) {
        for (var i = 0; i < revealedCardsIds.length; i++)
            document.querySelector(".card-" + revealedCardsIds[i]).remove();
        score+= 100;
        document.querySelector("#scoreLabel").innerHTML = "Score: " + score;
        numOfCards -= 2;
        console.log(numOfCards);
        if(numOfCards <= 0)
            location.replace('../../../index.html');
    } else {
        for(var i = 0; i < revealedCardsIds.length; i++)
            FlipBack(revealedCardsIds[i]);
        score -= 25;
        document.querySelector("#scoreLabel").innerHTML = "Score: " + score;
    }

    revealedCardsIds = [];
    revealedCardsValues = [];
}