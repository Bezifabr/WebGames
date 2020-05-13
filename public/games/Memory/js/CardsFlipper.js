
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

function ClearCards(revealedCards) {
    for (var i = 0; i < revealedCards.length; i++)
        document.querySelector(".card-" + revealedCards[i]).remove();

    numOfCards -= 2;
    if (numOfCards <= 0)
        GoBackToTheMenu();
}

function HideCards(revelaedCards) {
    for(var i = 0; i < revelaedCards.length; i++)
        FlipBack(revelaedCards[i]);
}

function UpdateScoreWithNewValue(value) {
    score += value;
    document.querySelector("#scoreLabel").innerHTML = "Score: " + score;
}

function GoBackToTheMenu() {
        location.replace('../../../index.html');
}

function CompareCards() {
    if(cardsComparator.areCardsMatched(revealedCardsValues)) {
        ClearCards(revealedCardsIds);
        UpdateScoreWithNewValue(100);
    }
    else {
        HideCards(revealedCardsIds);
        UpdateScoreWithNewValue(-25);
    }

    revealedCardsIds = [];
    revealedCardsValues = [];
}