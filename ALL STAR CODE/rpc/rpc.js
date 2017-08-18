const choices = ["rock", "paper", "scissors"];
let pwins= 0;
let cwins= 0;
function rock(){
    const random = choices[Math.floor(Math.random() * 3)];
    console.log(random);
    const r = "rock"; 
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
    const random1 = choices[Math.floor(Math.random() * 3)];
    console.log(random1);
    const r = "paper"; 
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
    const random2 = choices[Math.floor(Math.random() * 3)];
    console.log(random2);
    const r = "scissors"; 
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

let name = prompt("what's your name?");



iQuit = () => {
    firebase.database().ref(name).set(
        {
            Score:pwins
        }
    )
    
}



