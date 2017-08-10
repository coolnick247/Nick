var x = 120;
var y = 90;
var shipx = 500;
var shipy = 900;
function setup(){
  createCanvas(1000,1000);
 background("Black")
      fill("red")
}

function draw(){
 background("black")
 for (var row = 0; row < 6; row++){
     for (var col = 0; col < 11; col++){
        rect(x,y,30,30);
        x=x +70    
 }
    x=120
      y=y +60
    
}
    y= 100
    x = 120



    if (keyIsDown(LEFT_ARROW))
    shipx -= 5

   if (keyIsDown(RIGHT_ARROW))
    shipx += 5

   if (shipx < 0)
    shipx = windowWidth

   fill("red")
    rect(shipx,shipy,30,50)

    if (keyIsDown(UP_ARROW))
    ellipse(500,800,20,20)

}