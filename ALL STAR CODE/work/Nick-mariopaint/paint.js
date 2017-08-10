var value = [Math.floor(Math.random() * 224), Math.floor(Math.random() * 224), Math.floor(Math.random() * 224)];

function setup(){
    createCanvas(1000,1000);
     fill(value);
}

function mouseDragged() {
ellipse(mouseX, mouseY, 40, 40);
fill(value);
rect(mouseX, mouseY, 40,40);
rect
}