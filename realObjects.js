function Car(color, weight){
    this.color = color;
    this.weight = weight;

}

var jeep = new Car("black", 1);

function Player (team, position , number){
    this.team = team;
    console.log("My team is"+ this.team)
    this.number = number;
    this.position = position;
    console.log("My number is "+ this.number)
}

var jamesHarden = new Player("rockets", "Point Guard", 13);

console.log("james Harden plays for the" + jamesHarden.team) 

function life (dead, alive, idk){
this.dead = dead;
this.alive = alive;
this.idk = idk;
}

var me =Life("no", "no", "yes"),