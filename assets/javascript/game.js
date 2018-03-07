// create array of all possible choices[done]

alphabet = [];
for (i = 97; i <= 122; i++) {
    alphabet[alphabet.length] = String.fromCharCode(i);
}
console.log(alphabet);

// create array of possible Answers [done]

computerChoices = [alphabet];

// Randomize the Answer choices [NEEDS FIXING]

function randomchoice() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerGuess)
}

randomchoice();
console.log()

// This function is run whenever the user presses a key. [done]
document.onkeyup = function (event) {

    // Determines which key was pressed. [done]
    var userGuess = event.key;
    console.log(userGuess)

}



// If userchoice matches computerchoice
// if (userGuess == computerGuess) {
//         // game win message
//         alert(Correct!);
// }



//win vs loss counter

//if userchoice does not match

    //failure, display failure message

    // loop / lives left
    if(chances > 0)

        // for()
    //if lives = 0
        //Display Game Over Screen
            //reset game !!!WITHOUT REFRESHING!!!

// display in html wins
// display in html losses
// display in html guesses left
// display in html guesses so far