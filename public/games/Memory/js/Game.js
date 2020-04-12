var cardsComparator = new CardsComparator();

var values = [1,2,3,1,2,4,5,6,6,3,4,5];
var revealedCardsValues = [];
var revealedCardsIds = [];


function GameStart(){
    cardsComparator.setStrategy(new TwoCardsComparator());
}

window.onload = GameStart;