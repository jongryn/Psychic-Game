/*
// Created: June 23, 2017 7:35 PM
// Author: Jonathan Gryn
// Revisions: Jon (6/23/17) - Added js      
*/

//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var lettersToGuess = null;

//Lets the computer select a random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 9 gueeses
//Gueeses = guesses || 9
var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.querySelector('guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computer.length)];
};

var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas.
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedletters.join(', ');
};

// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuesses();
updateGuessesLeft();

//When key is released it become the users guess
document.onkeyup = function(event) {
    gueesesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

    if(guessesLeft > 0) {
    	if (userGuess === letterToGuess) {
    	  wins++;
    	  document.querySelector('#wins').innerHTML = "Wins: " + wins;
    	  alert("Yes, you are psychic!");
    	  reset();
    	} else if(guessesLeft === 0) {
    		//Then we will loss and we'll update the html to display the loss
    		losses++;
    		document.querySelector('#losses').innerHTML = "Losses: " + losses;
    		alert("Sorry, you're not pscyhic, maybe try again?");
    		//Then we'll call the reset.
    		reset();

    	}
    }
};