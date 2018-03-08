
// create array of all possible choices[done]

alphabet = [];
for (i = 97; i <= 122; i++) {
    alphabet[alphabet.length] = String.fromCharCode(i);
}
console.log(alphabet);

// create array of possible Answers [done]

var computerChoices = alphabet;

var computerGuess;

var wins = 0;

var losses =0;

var guessesLeft = 9;

var guessesSoFar = 0;
// Randomize the Answer choices [NEEDS FIXING]


console.log("call randomchoice");
randomchoice();


// This function is run whenever the user presses a key. [done]
document.onkeyup = function (event) {

    // Determines which key was pressed. [done]
    var userGuess = event.key;
    console.log(userGuess+" "+computerGuess)
    // If userchoice matches computerchoice
    if (userGuess == computerGuess) {
        console.log("match");
        wins++;


        // thanks to martin
        //Increment wins total in HTML
                   //Get HTML element for displaying wins
                   var winsHTML = document.getElementById("wins");
                   //set HTML to current wins total
                   winsHTML.innerHTML = ("<strong>" + wins + "</strong>")
    }

    else{
        console.log("fail");
        losses++;
        var lossesHTML = document.getElementById("losses");
        lossesHTML.innerHTML = ("<strong>" + losses + "</strong>")
    }
}

function randomchoice() {

    console.log(computerChoices.length+"More text"+computerChoices[13]);
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log("Computer choice is: "+computerGuess);
}


// if (userGuess == computerGuess) {
//         // game win message
//         alert(Correct!);
// }



//win vs loss counter

//if userchoice does not match

    //failure, display failure message

    // loop / lives left
    // if(chances > 0)

        // for()
    //if lives = 0
        //Display Game Over Screen
            //reset game !!!WITHOUT REFRESHING!!!

// display in html wins
// display in html losses
// display in html guesses left
// display in html letters guessed so far