
function FlipBack(cardId) {
    var elem = document.querySelector(".card-" + cardId);
    elem.classList.remove("flip");
    elem.lastElementChild.lastElementChild.innerHTML = "";
}

function Flip(cardId) {
    var elem = document.querySelector(".card-" + cardId);
    elem.classList.add("flip");
    elem.lastElementChild.lastElementChild.innerHTML = values[cardId - 1];
    revealedCardsIds.push(cardId);
    revealedCardsValues.push(values[cardId - 1]);

    if (cardsComparator.isReadyToCompare(revealedCardsValues))
        window.setTimeout(CompareCards, 1000);
}

function CompareCards() {
    if(cardsComparator.areCardsMatched(revealedCardsValues)) {
        for (var i = 0; i < revealedCardsIds.length; i++)
            document.querySelector(".card-" + revealedCardsIds[i]).remove();
    } else {
        for(var i = 0; i < revealedCardsIds.length; i++)
            FlipBack(revealedCardsIds[i]);
    }

    revealedCardsIds = [];
    revealedCardsValues = [];
}