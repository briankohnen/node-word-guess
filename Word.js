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
        return displayDaWord.join("");
    }
};

function Letter(alpha, bool) {
    this.alpha = alpha;
    this.bool = bool;
    this.display = function() {
        if (this.bool) {
            return this.alpha;
        } else return "_ ";
    };
    this.guessCheck = function(userGuess) {
        if (userGuess.toLowerCase() === this.alpha) {
            this.bool = true;
        }
    };
};

var apples = new Word("apples");

apples.letterify();

console.log(apples.toString());
