var cardsComparator = new CardsComparator(new TwoCardsComparator());
var valuesGenerator = new ValuesGenerator(new IntegerValuesGenerator());

var gameArea = document.getElementById("gameArea");

var cards = [];
var revealedCardsValues = [];
var revealedCardsIds = [];

var score = 0;
var numberOfValues = 12;


function GameStart(){
    GenerateCards(gameArea, numberOfValues);
    cards = valuesGenerator.generate(numberOfValues);
}

window.onload = GameStart;