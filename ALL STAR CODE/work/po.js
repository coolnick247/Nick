/*var pokemon = {
    "Name": ["Mega Houndoom","Ambipom","Snorlax"],
    "Type": ["Fire", "Normal","Normal" ],
    "HP": [75,75,160 ],
    "DEF": [50, 66, 65],
    "ATK": [90,100, 110], 
    "Legend": [true, false, true]}

var rand = pokemon[Math.floor(Math.random() * pokemon.length)];
console.log(rand);
*/

var megaHoundoom = {"Name" : "Mega Houndoom", "Type": "Fire", "HP": 75, "DEF" : 50, "ATK": 90, "Legend": true}

if (megaHoundoom.Legend == true){
    console.log("Yes");
}
else {
    console.log("No");
}

console.log("Name:" + megaHoundoom.Name);
console.log("Type:" + megaHoundoom.Type);
console.log("HP:" + megaHoundoom.HP);
console.log("DEF:" + megaHoundoom.DEF);
console.log("ATK:" + megaHoundoom.ATK);
console.log("Legend?:" + megaHoundoom.Legend);