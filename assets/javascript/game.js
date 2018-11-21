//most sources said to do the variables one per line to make it look clean
var wordBank = [
    "quasar",
    "nebula",
    "satellite",
    "apogee",
    "astronaut",
    "comet",
    "planetoid",
    "rocket",
    "jupeter",
    "trajectory",
    "orbit",
    "parsec",
    "magnetosphere",
    "kelvin",
    "gravity",
    "saturn",
    "uranus",
    "kepler",
            ];
//this will be populated later        
var guessedLetters = [];        
var currentWord; 
//this will be populated later            
var answerArray = [];          
var guesses = 0;       
var gameStarted = false;        
var gameOver = false;            
var wins = 0;                   
//this is how many tries you have
const maximumTries = 9;  
function startGame() {
guesses = maximumTries;
gameStarted = false;
currentWord = Math.floor(Math.random() * (wordBank.length));
//this console log shows the current word location in the array and not the word
console.log(currentWord);
guessedLetters = [];
answerArray = [];
 for (var i = 0; i < wordBank[currentWord].length; i++) {
    answerArray.push("_");
}

document.getElementById("gameover").style.cssText = "display: none";
document.getElementById("youwin").style.cssText = "display: none";
document.getElementById("playAgain").style.cssText= "display: none";
};
function updateDisplay() {
 document.getElementById("totalWins").innerText = wins;
document.getElementById("currentWord").innerText = "";
for (var i = 0; i < answerArray.length; i++) {
    document.getElementById("currentWord").innerText += answerArray[i];
}
 document.getElementById("guesses").innerText = guesses;
document.getElementById("guessedLetters").innerText = guessedLetters;
if(guesses <= 0) {
    document.getElementById("gameover").style.cssText = "display: block";
    document.getElementById("playAgain").style.cssText = "display: block";
    gameOver = true;
}
};
document.onkeydown = function(event) {

if(gameOver) {
    startGame();
    gameOver = false;
} else {
    // this only allows the letters a-z to be pressed. 
    if(event.keyCode >= 65 && event.keyCode <= 90) {
        guess(event.key.toLowerCase());
    }
}
};
function guess(letter) {
if (guesses > 0) {
    if (gameStarted) {
        gameStarted = true;
    }
     
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        checkGuess(letter);
    }
}

updateDisplay();
checkWin();
};
function checkGuess(letter) {

var positions = [];
 // finds the letter in the current word and displays it
for (var i = 0; i < wordBank[currentWord].length; i++) {
    if(wordBank[currentWord][i] === letter) {
        positions.push(i);
    }
}
 // removes a guess 
if (positions.length <= 0) {
    guesses--;
    
} else {
    // replaces loop with letter.
    for(var i = 0; i < positions.length; i++) {
        answerArray[positions[i]] = letter;
    }
}
};
function checkWin() {
if(answerArray.indexOf("_") === -1) {
    document.getElementById("youwin").style.cssText = "display: block";
    document.getElementById("playAgain").style.cssText= "display: block";
    wins++;
    gameOver = true;
}
};
{
startGame();
updateDisplay();
}; 