var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var n = prompt('How many more times? ');

if (n == 5) {
    console.log("High Five!");
}

else if (n !== 5 ) {
    console.log("go kys");
}