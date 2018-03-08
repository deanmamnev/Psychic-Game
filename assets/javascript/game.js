
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


        // thanks to Martin G
        //Increment wins total in HTML
        //Get HTML element for displaying wins
        var winsHTML = document.getElementById("wins");
        //set HTML to current wins total
        winsHTML.innerHTML = ("<strong>" + wins + "</strong>")

        guessesLeft = 9;

        var guessesLeftHTML = document.getElementById("guessesLeft");
        guessesLeftHTML.innerHTML = ("<strong>" + guessesLeft + "</strong>")

        guessesSoFar = 0;
        var guessesSoFarHTML = document.getElementById("guessesSoFar");
        guessesSoFarHTML.innerHTML = ("<strong>" + guessesSoFar + "</strong>")
        randomchoice();
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
        guessesLeft = 9;
        guessesSoFar = 0;
        var guessesLeftHTML = document.getElementById("guessesLeft");
        guessesLeftHTML.innerHTML = ("<strong>" + guessesLeft + "</strong>")

        randomchoice();

    }
}



function randomchoice() {

    console.log(computerChoices.length + "More text" + computerChoices[13]);
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log("Computer choice is: " + computerGuess);
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