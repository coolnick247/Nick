var name = prompt("what's your name?");
var favFood = prompt("What's your favorite food?")

firebase.database().ref(name).set(
    {
        food:favFood
    }
)