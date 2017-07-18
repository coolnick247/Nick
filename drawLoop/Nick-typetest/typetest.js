function setup(){
    createCanvas(windowWidth, windowHeight);
    background('black');
}


//Array for the sentences
var strings = ["Spicy", "Yahoo Gang is the GOAT", "Winter is Coming", "You know nothing, Jon Snow", "I have failed"];

//Will be used for score
var x = 0;

//Main function that runs the program
function keyTyped(){
    if (key === '`'){
        var rand = Math.floor(Math.random()*strings.length);
        var sample = strings[rand];
        background('black');
        fill('white');
        text('Please type the sentence below: ', width/10, height/5, width/2, height/4);
        text('Current Points: ' + x, width/10, height/1.5);
        text (sample, width/10, height/3);
        var inp = createInput();
        inp.position(width/10, height/1.7);
        if (keyCode === ENTER){
            if (inp.trim() === sample.trim()) {
                x+=10;
                alert("You win!");
            }else if(inp.trim() !== sample.trim()) {
                x-=10;                
                fill('white');
                alert('You need to work on your typing!');
            }
        }
    }
}