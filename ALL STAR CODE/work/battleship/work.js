var x = 0;
var y = 0;
function setup(){
  createCanvas(windowWidth,windowHeight);
 for (var row = 0; row < 2; row++){
  for (var col = 0; col < 2; col++){
      rect(x,y,100,100); 
       x=x +100
  }

      x = 0
       y=y +100  
}

}
function mouseClicked(){
    //row2
    if (mouseY > 100){
      
       alert("idk")
        
     }

     //row 1
     else if (mouseY>0){
        alert("yay")
     }

    console.log(mouseX);
    console.log(mouseY);


}