var cardsComparator = new CardsComparator();
var cardsGenerator = new CardsGenerator();

var values = [1,2,3,1,2,4,5,6,6,3,4,5];
var revealedCardsValues = [];
var revealedCardsIds = [];


function GameStart(){
    cardsComparator.setStrategy(new TwoCardsComparator());
    cardsGenerator.setStrategy(new TwelveCardsGenerator());
    cardsGenerator.generate(document.getElementById("gameArea"));
}

window.onload = GameStart;