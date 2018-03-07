// all game java stuff here (for now)

// create array of all possible choices

alphabet = [];
for (i = 97; i <= 122; i++) {
    alphabet[alphabet.length] = String.fromCharCode(i);
}
console.log(alphabet);

// create array of possible Answers

computerChoices = [alphabet];

// Randomize the Answer choices

function randomchoice() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerGuess)
}

randomchoice();
console.log()

// This function is run whenever the user presses a key.
document.onkeydown = function (event) {

    // Determines which key was pressed.
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

        for()
    //if lives = 0
        //Display Game Over Screen
            //reset game !!!WITHOUT REFRESHING!!!

