function Letter(alpha, bool) {
    this.alpha = alpha;
    this.bool = bool;
    this.display = function() {
        if (this.bool) {
            return this.alpha;
        } else return "_";
    };
    this.guessCheck = function(userGuess) {
        if (userGuess.toLowerCase() === this.alpha) {
            this.bool = true;
            return true;
        } else return false;
    };
};

module.exports = Letter;