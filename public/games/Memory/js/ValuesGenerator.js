var ValuesGenerator = function (generator) {
    this.generator = generator;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

ValuesGenerator.prototype = {
    generate: function (numberOfValues) {
        return this.generator.generate(numberOfValues);
    }
}

var IntegerValuesGenerator = function () {
    this.generate = function(numberOfValues){
        var cardsArray = [];
        var value = 0;
        var card = new Card("", "");
        for(var i = 0; i < numberOfValues/2; i++) {
            do {
                value = Math.floor(Math.random() * (100)) + 1;
                card = new Card(value, value);
            } while (cardsArray.indexOf(card) > -1);
            cardsArray.push(card);
            cardsArray.push(card);
        }
        shuffleArray(cardsArray);
        return cardsArray;
    }
}