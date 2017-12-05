//asking for user input
function myFunction() {
    var txt;
    var letter = prompt("Please enter a letter:", "Letter");
    if (letter === null || letter === "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "You guessed the letter " + letter + ".";
    }
    document.getElementById("demo").innerHTML = txt;
}

//setting var.
var word = "Bread";
var n = word.length;
console.log(n);

// unsure what id does figure it out later
// var missedWord = ["Bread", "Plum", "Peach"];
// var n = missedWord.lenght(random);
// console.log(n);

// var eRIKA = missedWord[Math.floor(Math.random()*items.length)];
// console.log (eRIKA);


//chooses random word 
var NumberOfWords = 3

var words = new BuildArray(NumberOfWords)

words[1] = "Bread"
words[2] = "Plums"
words[3] = "Peach"


function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
// console.log(this);
}

function PickRandomWord(frm) {
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}


// counts letters in var word, use the blank spaces
var letterInWord = function (letter, word) {
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) === letter) {
        count++;
    } 
  }
  return count;
};

// function charcount(c, str) {
//   return str.replace(new RegExp('[^'+c+']','g'),'').length
// }

// console.log = function(x) { document.write(x + "<br />"); };
// console.log( "'*' in '4*5*6' = " + charcount('*', '4*5*6') ) // outputs 2
// console.log( "'p' in 'pineapples' = " + charcount('p', 'pineapples') )// outputs 3

// spells the word out induvidually 
function letterCounter (x) {
  return x.replace(/[^a-zA-Z]/g, '').length;
}

console.log(letterCounter('Hello World!!!1'))

var text = word;

for(var x = 0, c=''; c = text.charAt(x); x++){ 
    console.log(c); 
}

// code for serching through word looking for certain letter - using Booleans
var letter = 'c';
word.includes(letter); 
  if (word.includes(letter)) {
    console.log("true");
  } else {
    console.log("The word does not contain the letter " + letter);
}

