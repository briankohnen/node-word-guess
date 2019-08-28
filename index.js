const Word = require("./Word");
const prompt = require("prompt");

let fruitsWords = ["strawberry", "grape", "kiwi", "apple", "starfruit",
                    "pineapple", "banana", "gooseberry", "kumquat", "plum",
                    "lemon", "honeydew", "peach", "cantaloupe", "fig", "date",
                    "papaya", "orange", "apricot", "huckleberry", "pomegranate",
                    "lime", "tangerine", "watermelon", "cherry", "dragonfruit",
                    "clementine", "nectarine", "mango", "guava", "pear"];

let wins = 0;

console.log("\nCAN YOU GUESS THE FRUITS?????"
            + "\n=============================");

const newWord = function() {

    console.log("YOUR WINS : " + wins +
                "\n=============================");

    let guessesLeft = 10;

    let readLetters = [];

    let allGuesses = [];

    let randomFroot = new Word(fruitsWords[Math.ceil((Math.random() * fruitsWords.length))]);

    randomFroot.letterify();

    randomFroot.letters.forEach(function(lett) {
        readLetters.push(lett.alpha);
    });

    console.log(randomFroot.toString());

    function askForGuess() {

        console.log(
            "\nGUESSES LEFT : " + guessesLeft +
            "\n============================="
            );

        if (guessesLeft === 0) {
            throw console.log("Sorry, you lost");
        }

        if (!randomFroot.toString().includes("_")) {
            wins++;
            newWord();
            
        } else {
            
            prompt.start();

            prompt.get(["Guess"], function (err, result) {

                if (!allGuesses.includes(result.Guess)) {
                
                    randomFroot.checkGuess(result.Guess);

                    allGuesses.push(result.Guess);

                    console.log(randomFroot.toString());

                    if (!readLetters.includes(result.Guess)) {
                        guessesLeft--;
                    }
                } else {
                    console.log("\nRepeat guess, guess again!");
                }

                askForGuess();

            });

        }
    }

    askForGuess();

};


newWord();


