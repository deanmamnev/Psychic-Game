
// create array of all possible choices[done]

alphabet = [];
for (i = 97; i <= 122; i++) {
    alphabet[alphabet.length] = String.fromCharCode(i);
}
console.log(alphabet);

// create array of possible Answers [done]

//Variables bank

var computerChoices = alphabet;

var computerGuess;

var wins = 0;

var losses = 0;

var guessesLeft = 9;

var guessesSoFar = 0;
// Randomize the Answer choices [NEEDS FIXING]


console.log("call randomchoice");
randomchoice();


// This function is run whenever the user presses a key. [done]
document.onkeyup = function (event) {

    // Determines which key was pressed. [done]
    var userGuess = event.key;
    console.log(userGuess + " " + computerGuess)
    // If userchoice matches computerchoice
    if (userGuess == computerGuess) {
        console.log("match");
        wins++;


        // thanks to Martin G (Hey, I give credit where credit is due!)
        //Increment wins total in HTML
        //Get HTML element for displaying wins
        var winsHTML = document.getElementById("wins");
        //set HTML to current wins total
        alert("Win!")

        winsHTML.innerHTML = ("<strong>" + wins + "</strong>")
    }

    else {
        console.log("fail");
        guessesLeft--;
        var guessesLeftHTML = document.getElementById("guessesLeft");
        guessesLeftHTML.innerHTML = ("<strong>" + guessesLeft + "</strong>")
        guessesSoFar++;
        var guessesSoFarHTML = document.getElementById("guessesSoFar");
        guessesSoFarHTML.innerHTML = ("<strong>" + guessesSoFar + "</strong>")
    }
    if (guessesLeft == 0) {
        console.log("game over");
        losses++;
        var lossesHTML = document.getElementById("losses");
        lossesHTML.innerHTML = ("<strong>" + losses + "</strong>")
    }
}



function randomchoice() {

    console.log(computerChoices.length + "More text" + computerChoices[13]);
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log("Computer choice is: " + computerGuess);
}

// Cleaning up code at Joe Kanter's suggestion, turning "Game Reset" elements into a single callout function.

function gamereset() {
    guessesLeft = 9;
    guessesSoFar = 0;
    var guessesLeftHTML = document.getElementById("guessesLeft");
    guessesLeftHTML.innerHTML = ("<strong>" + guessesLeft + "</strong>")
    var guessesSoFarHTML = document.getElementById("guessesSoFar");
    guessesSoFarHTML.innerHTML = ("<strong>" + guessesSoFar + "</strong>")
    randomchoice();
}

// [ignore the following 4 lines]
// if (userGuess == computerGuess) {
//         // game win message
//         alert(Correct!);
// }


// Oh hey, you made it this far.  Only pseudocode and checklists beyond this point, but if you still want to read those, go right ahead.  Cheers!


//win vs loss counter [done]

//if userchoice does not match [done]

    //failure, display failure message [done]

    // loop / lives left [done]
    // if(chances > 0) [done]

        // for()
    //if lives = 0 [done]
        //Display Game Over Screen [done]
            //reset game !!!WITHOUT REFRESHING!!! [done]

// display in html wins [done]
// display in html losses [done]
// display in html guesses left [done]
// display in html letters guessed so far [done]