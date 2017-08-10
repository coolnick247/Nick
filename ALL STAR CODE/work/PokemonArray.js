var myPokemonRoster = ["Charizard", "Blastoise", "Venusaur","ButterFree", "Fearow" ];
var firstToFight = (myPokemonRoster[1]);
var secondToFight = (myPokemonRoster[2]);
myPokemonRoster.pop();
myPokemonRoster.push("Sandslash");
myPokemonRoster.push("Pikachu");
var RosterSize = (myPokemonRoster.length);

//to go forward fam bellow 

 for (var i = 0; i < RosterSize; i++) {
     console.log(myPokemonRoster[i]);
 }

 //to go in reverse fam is bellow

for (var i = 7; i < RosterSize; i--) {
     console.log(myPokemonRoster[i]);
 }