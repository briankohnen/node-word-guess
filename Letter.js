function Letter(alpha, bool) {
    this.alpha = alpha;
    this.bool = bool;
    this.display = function() {
        if (this.bool) {
            console.log(this.alpha);
        } else console.log("_");
    };
    this.guessCheck = function(userGuess) {
        if (userGuess.toLowerCase() === this.alpha) {
            this.bool = true;
        }
    };
};

var a = new Letter("a", false);

a.display();
a.guessCheck("a");
a.display();