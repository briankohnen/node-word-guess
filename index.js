const Word = require("./Word");
const prompt = require("prompt");

let fruitsWords = ["strawberry", "grape", "kiwi", "apple", "starfruit",
                    "pineapple", "banana", "gooseberry", "kumquat", "plum",
                    "lemon", "honeydew", "peach", "cantaloupe", "fig", "date",
                    "papaya", "orange", "apricot", "huckleberry", "pomegranate",
                    "lime", "tangerine", "watermelon", "cherry", "dragonfruit",
                    "clementine", "nectarine", "mango", "guava", "pear"];

let wins = 0;

function newWord() {

    console.log("YOUR WINS : " + wins);

    let randomFroot = new Word(fruitsWords[Math.ceil((Math.random() * fruitsWords.length))]);

    let guessesLeft = 10;

    randomFroot.letterify();

    console.log(randomFroot.toString());

    function askForGuess() {

        console.log("GUESSES LEFT : " + guessesLeft);

        if (guessesLeft === 0) {

            throw console.log("Sorry, you lost");

        }

        if (!randomFroot.toString().includes("_")) {

            wins++;
            newWord();

        } else {
            
            prompt.start();

            prompt.get(["Guess"], function (err, result) {
                
                randomFroot.checkGuess(result.Guess);

                console.log(randomFroot.toString());

                askForGuess();


            });

        }
    }

    askForGuess();
};

newWord();


