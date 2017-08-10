var choices = ["rock", "paper", "scissors"];
var pwins= 0;
var cwins= 0;
function rock(){
    var random = choices[Math.floor(Math.random() * 3)];
    console.log(random);
    var r = "rock"; 
    if (r == random)
        {
            alert("TIE!! -_-");
            pwins = pwins - 1;
            cwins = cwins - 1;
            $("#span1").text(pwins);
            $("#span2").text(cwins);
        }

        else if  (random == "paper"){
            alert("You Lost");
            pwins = pwins - 1;
            cwins = cwins + 3;
            $("#span1").text(pwins);
            $("#span2").text(cwins);
        }

        else{
            alert("you won");
            pwins = pwins + 1;
            cwins = cwins - 1;
            $("#span1").text(pwins);
            $("#span2").text(cwins);
        }

}


function paper(){
    var random1 = choices[Math.floor(Math.random() * 3)];
    console.log(random1);
    var r = "paper"; 
    if (r == random1)
        {
            alert("TIE!! -_-");
            pwins = pwins - 1;
            cwins = cwins - 1;
            $("#span1").text(pwins);
            $("#span2").text(cwins);
        }

        else if  (random1 == "scissors"){
            alert("You Lost");
            pwins = pwins - 1;
            cwins = cwins + 3;
            $("#span1").text(pwins);
            $("#span2").text(cwins);
        }

        else{
            alert("you won");
            pwins = pwins + 1;
            cwins = cwins - 1;
            $("#span1").text(pwins);
            $("#span2").text(cwins);
        }

}

function scissors(){
    var random2 = choices[Math.floor(Math.random() * 3)];
    console.log(random2);
    var r = "scissors"; 
    if (r == random2)
        {
            alert("TIE!! -_-");
            pwins = pwins - 1;
            cwins = cwins - 1;
            $("#span1").text(pwins);
            $("#span2").text(cwins);
        }

        else if  (random2 == "rock"){
            alert("You Lost");
            pwins = pwins - 1;
            cwins = cwins + 3;
            $("#span1").text(pwins);
            $("#span2").text(cwins);
        }

        else{
            alert("you won");
             pwins = pwins + 1;
             cwins = cwins - 1;
            $("#span1").text(pwins);
            $("#span2").text(cwins);
        }

}

var name = prompt("what's your name?");
pwins=pwins;

function iQuit(){

    firebase.database().ref(name).set(
        {
            Score:pwins
        }
    )
    

}


