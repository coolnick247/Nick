var megaHoundoom = {"Name" : "Mega Houndoom", "HP": 75, "DEF" : 50, "ATK": 90, "ATK2": 110}
var Seadra = {"Name" : "Sedra", "HP": 55, "DEF" : 95, "ATK": 65, "ATK2":95 }
var Snorlax = {"Name" : "Snorlax", "HP": 160, "DEF" : 65, "ATK": 110, "ATK2":65 }

function setup(){
 createCanvas(1000,1000)
 //base
 rect(100,200,600,300)

 //inside boxes
 textSize(32)

 rect(110,210,210,120)
 text("Attack", 170, 280)
 rect(110,370,210,120)
 text("Defence", 160, 440)
 rect(480,210,210,120)
 text("Attack # 2", 520, 280)
 rect(480,370,210,120)
 text("Flee", 550, 440)
 //middle part
textSize(10)
textStyle(BOLD);
 ellipse(400, 350, 100, 100)
 text("DONT TOUCH",365,350)
}
function mouseClicked(){
    //row2
    if (mouseX > 110 && mouseY >370) {

       alert("idk")
     }
     else if (mouseX > 480 && mouseY > 370){
        alert("yay")
     }

    console.log(mouseX);
    console.log(mouseY);


}

/*function keyTyped(){
    if (key == "w"){
        alert("you attacked ____")
    }
    else if (key == "a" ){
        alert("you hit hit him wit ah stick")
    }
    else if(key == "s"){
        alert("you lil bitch")
    }
    else if(key == "d"){
        alert("bob and weave")
    }
}
*/

