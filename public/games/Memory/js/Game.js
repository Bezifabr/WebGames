var cardsComparator = new CardsComparator(new TwoCardsComparator());
var cardsGenerator = new CardsGenerator(new TwelveCardsGenerator());
var valuesGenerator = new ValuesGenerator(new IntegerValuesGenerator());

var values = [];
var revealedCardsValues = [];
var revealedCardsIds = [];

var score = 0;
var numberOfValues = 12;


function GameStart(){
    cardsGenerator.generate(document.getElementById("gameArea"));
    values = valuesGenerator.generate(numberOfValues);
}

window.onload = GameStart;