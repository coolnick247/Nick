var mashArray = ["the park", "outside yo momma's house", "outside school"];
var firstQuestion = [5, 8];
var secondQuestion = ["Captain Falcon", "Mario"];
var prompt = require('prompt-sync')();

function setup(){
var n = prompt("How Many Times will you strike?");
if (n >= 0){
    firstQuestion.push(n);
    var b = prompt("Good! Who will you choose to fight?")
    secondQuestion.push(b)
}}






function randomPlace(why){
    var randomIndex = Math.floor(Math.random() * why);
    return mashArray[randomIndex];
}


function randomAttack(you){
    var randomINdex = Math.floor(Math.random() * you);
    return firstQuestion[randomINdex];
}

function randomPokemon(the){
    var randomINDex = Math.floor(Math.random() * the);
    return secondQuestion[randomINDex];
}



setup();


function attack(){
return ("You fought" + " " + randomPokemon(secondQuestion.length) + " " + "in the" + " "
 + randomPlace(mashArray.length) + " "+  "and hit them"  + " " + " "
 randomAttack(firstQuestion.length) + " " +  "times. Too bad. Mewtwo wins!");
}
console.log(attack());
