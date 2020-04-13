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
        var valuesArray = [];
        var value = 0;
        for(var i = 0; i < numberOfValues/2; i++) {
            do {
                value = Math.floor(Math.random() * (100)) + 1;
            } while (valuesArray.indexOf(value) > -1);
            valuesArray.push(value);
            valuesArray.push(value);
        }
        shuffleArray(valuesArray);
        return valuesArray;
    }
}