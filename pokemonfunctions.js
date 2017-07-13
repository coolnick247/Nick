var letters = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersLength = letters.length;
function randomLetter(why){
    var randomIndex = Math.floor(Math.random() * why);
    return letters[randomIndex];
}
console.log(randomLetter(lettersLength));

var randomLength =Math.floor(Math.random(lettersLength));
function randWord()
{
    var word = "";
    for (var i = 0; i < randomLength; i++)
    {
        word = word + randomLetter(lettersLength);
    }
    return word;
}
console.log(randWord());


function randSentence()
{
 var sentence = randWord() + " " + randWord() + " " + randWord();
 return sentence;
}
console.log(randWord(randSentence()));
