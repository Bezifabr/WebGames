var cardsComparator = new CardsComparator(new TwoCardsComparator());
var cardsGenerator = new CardsGenerator(new TwelveCardsGenerator());

var values = [1,2,3,1,2,4,5,6,6,3,4,5];
var revealedCardsValues = [];
var revealedCardsIds = [];

var score = 0;


function GameStart(){
    cardsGenerator.generate(document.getElementById("gameArea"));
}

window.onload = GameStart;