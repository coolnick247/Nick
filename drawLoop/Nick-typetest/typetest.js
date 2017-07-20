var sentences = ["yahoo #1", "hide it in my sock", "where is my money", "hi"];
var inp;
var i = 0;
var points = 0
function setup(){
  createCanvas(windowWidth,windowHeight);
  
  inp = createInput("");
  inp.position(100,200);
}

function keyTyped(){
  if (keyCode == ENTER){
    if (inp.value() == sentences[i]){
      alert("Correct");
      if (i == 3){
        i = 0;
      }
      else {
      i++
      points++
      noStroke();
      rect(500,300,100,50);
        text("Your score:"+ points, 500,320);
      }
    }
    else{
      alert("try again");
    }

}}