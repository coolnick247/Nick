//welcome to my bad and boujee deli fam
//where everything is $100 or more
var prompt = require('prompt-sync')();

var n = prompt('You tryna pass? How much money you got? ');

if (n > 100) {
    console.log("In order to pass, you gon have to spend all of it");
}

else if (n < 100 ) {
    console.log("Broke niggas aint allowed in this store");
}
