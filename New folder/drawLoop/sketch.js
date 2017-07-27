function setup(){
 createCanvas(windowWidth,windowHeight)
}
var x = 0;
var y = 0
function draw(){
    background("purple");
    fill("magenta");
    ellipse(x,y,300);
    x = x +77;
    y = y+ 120
    if (x > width){
        x = 0;

    }
}