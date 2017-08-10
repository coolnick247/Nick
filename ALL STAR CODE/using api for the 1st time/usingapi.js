

function firstname(){
    $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
   $("body").append(`<img id ='photo' src = '${data.results[0].picture.large} '/>`)
    $("body").append("<p>My name is " +
     data.results[0].name.first + " " + 
     data.results[0].name.last  + "<p>")
  }
})}

$(document).ready(firstname)
  

