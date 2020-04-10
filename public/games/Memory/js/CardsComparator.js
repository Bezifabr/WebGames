var CardsComparator = function() {
    this.comparator = "";
};

CardsComparator.prototype = {
    setStrategy: function(comparator) {
        this.comparator = comparator;
    },

    isReadyToCompare: function(revealedCardsValues){
        return this.comparator.isReadyToCompare(revealedCardsValues);
    },

    areCardsMatched: function (revealedCardsValues) {
        return this.comparator.areCardsMatched(revealedCardsValues);
    }
};

var TwoCardsComparator = function() {

    this.areCardsMatched = function (revealedCardsValues) {
        if(this.isReadyToCompare(revealedCardsValues)){
            return revealedCardsValues[0] === revealedCardsValues[1];
        }
    }

    this.isReadyToCompare = function (revealedCardsValues) {
        return (revealedCardsValues.length >= 2);
    }

};