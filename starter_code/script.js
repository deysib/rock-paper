// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function () {
   var array= ["rock", "paper", "scissors"];
   var randomNumber = (Math.round(Math.random()*2));
   
console.log(array[randomNumber]);
return array[randomNumber];

var generateComputerChoice = function () {
    var number = genRandom(2);
    var choice = VALID_CHOICES[number];
    return choice;
};

    // Task 1  // array (eg myArray[ranomNum]), Step 3: Use this randomly generated number to pull a value from the
  

    // Task 1, Step 4: return this new value
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    var outcome = '';
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
    if (userChoice == ROCK){
        if(computerChoice == ROCK){
            outcome = DRAW;
        }
    }
    else if (computerChoice == PAPER){
        outcome = DRAW
        
        
    }else if (computerChoice == PAPER) {
           outcome = COMPUTER_WINS;
       }
       else {
           outcome = DRAW;
       }
    }
    else if (userChoice == PAPER) {
       if (computerChoice == ROCK) {
           outcome = USER_WINS;
       }
       else if (computerChoice == PAPER) {
           outcome = DRAW;
       }
       else {
           outcome = COMPUTER_WINS;
       }
    }
    else {
       if (computerChoice == ROCK) {
           outcome = DRAW;
       }
       else if (computerChoice == PAPER) {
           outcome = USER_WINS;
       }
       else {
           outcome = DRAW;
       }
    }
    return outcome 
};

    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"

    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    // Task 5: Show the winner in HTML after the word "Winner:"
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {

    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    var computerChoice = generateComputerChoice();
console.log(computerChoice)
    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
    var userChoice = "rock";
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create a click handler that changes the
    // value based on the item the user clicks on the HTML page.

    // This line callss the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
    var handleUserClick = function(userChoice){
    // generate the computer choice
    var computerChoice = generateComputerChoice();
    
    // pick a winner
    var outcome = pickWinner(userChoice, computerChoice);
    
    // set the html element text for the computer choice and the outcome
    $('#computer-choice').text('The computer picked ' + computerChoice);
    $('#winner').text('Outcome: ' + outcome);
};
