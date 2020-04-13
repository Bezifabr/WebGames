var CardsGenerator = function (generator) {
    this.generator = generator
}

CardsGenerator.prototype = {
    generate: function (gameArea) {
        this.generator.generate(gameArea);
    }
}

TwelveCardsGenerator = function () {

    this.generate = function(gameArea){
         for(var i = 1; i <= 12; i++){
             var flipper = document.createElement("div");
             (function(i) {
                 flipper.onclick = function() {
                     Flip(i);
                 }
             })(i);
             flipper.classList.add("flipper");
             var card = document.createElement("div");
             card.classList.add("card");
             card.classList.add("card-" + i);
             var front = document.createElement("div");
             front.classList.add("front");
             var back = document.createElement("div");
             back.classList.add("back");
             card.appendChild(front);
             card.appendChild(back);
             flipper.appendChild(card);
             gameArea.appendChild(flipper);
         }
    }
}