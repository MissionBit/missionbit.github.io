var userInput = prompt("What letter would you like to guess?", "Letter");
let word = "allow";
let hiddenWord = [".",".",".",".","."];
let numGuesses = 10;
let userInputTwo = prompt("Whats the next letter you would like to guess?", "Letter");
let userInputThree = prompt("Another letter", "Letter");
let userInputFour = prompt("Another", "letter");
let userInputFive = prompt("Last one", "letter");

let guess = userInput;
let guessTwo = userInputTwo;
let guessThree = userInputThree;
let guessFour = userInputFour;
let guessFive = userInputFive;
let correct = false;

//console.log(word);

for (let i = 0; i < word.length; i++) {
  if (word[i] === guess) {
    correct = true;
    hiddenWord[i] = guess;
  } else if (hiddenWord === word) {
    console.log("You win!");
    break;
  } else {
  //console.log("Sorry the letter " + guess + " was incorrect");
  numGuesses = numGuesses - 1;
  console.log(numGuesses); 
  }
}
console.log(hiddenWord.join(""));

for (let i = 0; i < word.length; i++) {
  if (word[i] === guessTwo) {
    correct = true;
    hiddenWord[i] = guessTwo;
  } else if (hiddenWord.join("") === word) {
    console.log("You win!");
    break;
  } else {  
  //console.log("Sorry the letter " + guessTwo + " was incorrect")
  numGuesses = numGuesses - 1;
  console.log(numGuesses);  
  }
}
console.log(hiddenWord.join(""));

for (let i = 0; i < word.length; i++) {
  if (word[i] === guessThree) {
    correct = true;
    hiddenWord[i] = guessThree;
  } else if (hiddenWord.join("") === word) {
    console.log("You win!");
    break;
  } else {
  //console.log("Sorry the letter " + guessThree + " was incorrect");
  numGuesses = numGuesses - 1
  console.log(numGuesses);
  }
}
console.log(hiddenWord.join("")); 
  
  for (let i = 0; i < word.length; i++) {
  if (word[i] === guessFour) {
    correct = true;
    hiddenWord[i] = guessFour;
  } else if (hiddenWord.join("") === word) {
    console.log("You win!");
    break;
  } else {
  //console.log("Sorry the letter " + guessFour + " was incorrect");
  numGuesses = numGuesses - 1;
  console.log(numGuesses);
  }
}
console.log(hiddenWord.join(""));

for (let i = 0; i < word.length; i++) {
  if (word[i] === guessFive) {
    correct = true;
    hiddenWord[i] = guessFive;
  } else if (hiddenWord.join("") === word) {
    console.log("You win!");
    break;
  } else {
  //console.log("Sorry the letter " + guessFive + " was incorrect");
  numGuesses = numGuesses - 1;
  console.log(numGuesses);
  }
}
console.log(hiddenWord.join(""));

let drawPerson = numGuesses;
console.log(drawPerson);
//console.log(guess + " was " + correct);
