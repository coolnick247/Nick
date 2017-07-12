var letters = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function randomLetter(why){
    var randomIndex = Math.floor(Math.random() * why);
    console.log(letters[randomIndex]);
    return letters[randomIndex];
}
randomLetter(27);

function randWord(){
var word = " ";
for (var i = 0; i < 6, i++){
    word = word + randomLetter();
return word;
}
}
randWord();



