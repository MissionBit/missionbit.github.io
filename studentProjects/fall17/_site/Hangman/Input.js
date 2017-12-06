var userInput = prompt("What letter would you like to guess?", "Letter");
var numberGuesses = 10;
var word = "bread";
var hiddenWord = word.length;
hiddenWord = word.replace(/./g, ".");
console.log(hiddenWord);

var guessLetter = function(userLetter) {
  hiddenWord.replace (/./g, "letter");
}


console.log(word.includes("a"));

// if (word.includes("a") === true) {
//   hiddenWord = hiddenWord.replace(/.3/g,"a");
// }

var word = "bread";
    substring = userInput;
word.indexOf(userInput);



// var userInput = prompt("What letter would you like to guess?", "Letter");
// var numberGuesses = 10;
// var word = "bread";
// var hiddenWord = word.length;
// hiddenWord = word.replace(/./g, ".");
// console.log(hiddenWord);


// var guessLetter = function(userLetter) {
//   hiddenWord.replace (/./g, "letter");
// }

// // sees if the letter the user guessed is in the word (bread)
// console.log(word.includes(userInput));

//  if (word.includes(userInput) === true) {
//    hiddenWord = hiddenWord.replace(/./g, userInput);
//  }

// var word = "bread";
//     substring = userInput;
// word.indexOf(userInput);

// console.log(word.indexOf(userInput));

// //hiddenWord = hiddenWord.replace(/word[word.indexOf(userInput)]/, userInput);

// hiddenWord = hiddenWord.split('');
// var replace = hiddenWord[word.indexOf(userInput)];
// hiddenWord = hiddenWord.join('');


// if (replace === hiddenWord[0]) {
//   console.log(userInput + "....");
// } else if (replace === hiddenWord[1]){
//   console.log("." + userInput + "...");
// } else if (replace === hiddenWord[2]) {
//   console.log(".." + userInput + "..");
// } else if (replace === hiddenWord[3]) {
//   console.log("..." + userInput + ".");
// } else if (replace === hiddenWord[4]){ 
//   console.log("...." + userInput);
// } else { 
//   console.log("Sorry that's the incorrect letter");
//   console.log(hiddenWord);
//   numberGuesses = numberGuesses - 1;
// }
// console.log(numberGuesses);
