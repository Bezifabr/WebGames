var cardsComparator = new CardsComparator(new TwoCardsComparator());
var valuesGenerator = new ValuesGenerator(new IntegerValuesGenerator());

var gameArea = document.getElementById("gameArea");

var values = [];
var revealedCardsValues = [];
var revealedCardsIds = [];

var score = 0;
var numberOfValues = 12;


function GameStart(){
    GenerateCards(gameArea, numberOfValues);
    values = valuesGenerator.generate(numberOfValues);
}

window.onload = GameStart;