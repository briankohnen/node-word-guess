var Word = require("./Word");

let fruitsWords = ["strawberry", "grape", "kiwi", "apple", "starfruit",
                    "pineapple", "banana", "gooseberry", "kumquat", "plum",
                    "lemon", "honeydew", "peach", "cantaloupe", "fig", "date",
                    "papaya", "orange", "apricot", "huckleberry", "pomegranate",
                    "lime", "tangerine", "watermelon", "cherry", "dragonfruit",
                    "clementine", "nectarine", "mango", "guava", "pear"]

let randomFroot = new Word(fruitsWords[Math.ceil((Math.random() * fruitsWords.length))]);

randomFroot.letterify();

console.log(randomFroot);

