function coolNick(number){
var randomNumber = Math.random() * number;
var result = Math.floor(randomNumber);
return result;
}
console.log(coolNick(10));

