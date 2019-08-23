var Letter = require("./Letter.js");

function Word(theWord) {
    this.theWord = theWord;
    this.letters = [];
    this.letterify = function () {
        for (var i = 0; i < theWord.length; i++) {
            var letty = new Letter(theWord[i], false)
            this.letters.push(letty);
        }
    }
    this.toString = function() {
        var displayDaWord = [];
        for (var j = 0; j < this.letters.length; j++) {
            displayDaWord.push(this.letters[j].display());
        }
        return displayDaWord.join(" ");
    }
    this.checkGuess = function(userGuess) {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].guessCheck(userGuess);
        }
    }
};

