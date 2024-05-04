const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function letterfinder(word, match) {
    var found = false;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log(match, "found at", i);
            found = true;
        }
    }
    if (!found) {
        console.log(match, "not found in", word);
    }
}

rl.question("Enter the word: ", function(w) {
    rl.question("Enter the letter you want to find: ", function(m) {
        letterfinder(w, m);
        rl.close();
    });
});

