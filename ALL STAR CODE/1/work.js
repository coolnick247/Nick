function firstname(){
    $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    $(".fstBox").append(`<img id ='photo' src = '${data.results[0].picture.large} '/>`)
    $(".fstBox").append("<p>My name is " +
     data.results[0].name.first + " " + 
     data.results[0].name.last +  "<p>")

     
    $(".sndBox").append(`<img id ='photo' src = '${data.results[0].picture.large} '/>`)
    $(".sndBox").append("<p>My name is " +
     data.results[0].name.first + " " + 
     data.results[0].name.last +  "<p>")

    $(".thrdBox").append(`<img id ='photo' src = '${data.results[0].picture.large} '/>`)
    $(".thrdBox").append("<p>My name is " +
     data.results[0].name.first + " " + 
     data.results[0].name.last +  "<p>")
    }

})}

$(document).ready(firstname)