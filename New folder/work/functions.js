function MyName(){
    return "Nick";
    console.log("Nick");
}
console.log(MyName());




//declare an array with two Nick's to increase his odds
var people = ["chris", "Nick", "Edgar", "Faisal", "Will", "Nick"];

//function to get random number
function getRandomWinner(index) {
    var randomIndex = Math.random() * index;
    var result = Math.floor(randomINdex);
    return Math.floor(Math.random() * index);
}
//prints ou a radom name based to the function
console.log(people[getRandomWinner(people.Length)]);