//var ID = "a049daa4";
//var KEY = "5e8dce4b71e20dda1450400ab2145ff2";
var randomuser= "https://randomuser.me/api/?results=5000"// + ID + "&appKey="+ KEY;
var userPhoto;
var userPhoto1;
var cycles = 0;
$.ajax({
    url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    //FIRST NAME
    var userFirstName=(data.results[0].name.first)
    console.log(userFirstName);
    $('#matchFirstName1').attr("src",''+ userFirstName +'');
    //LAST NAME
    var userLastName=(data.results[0].name.last)
    console.log(userLastName);
    $('#matchLastName1').attr("src",''+ userLastName +'');
    
    //Photo0
    userPhoto=(data.results[0].picture.large)
 
    //1
    $('#matchPhoto1').attr("src",''+ userPhoto +'');

    //State
    var userState=(data.results[0].location.state)
    console.log(userState);
    $('#matchState2').attr("src",''+ userState +'');
  }
}) 
$.ajax({
    url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    //FIRST NAME
    var userFirstName2=(data.results[0].name.first)
    console.log(userFirstName2);
    $('#matchFirstName2').attr("src",''+ userFirstName2 +'');
    //LAST NAME
    var userLastName2=(data.results[0].name.last)
    console.log(userLastName2);
    $('#matchLastName2').attr("src",''+ userLastName2 +'');
    
    //Photo0
    userPhoto2=(data.results[0].picture.large)
 
    //1
    $('#matchPhoto2').attr("src",''+ userPhoto2 +'');

    //State
    var userState2=(data.results[0].location.state)
    console.log(userState2);
    $('#matchState2').attr("src",''+ userState2 +'');
  }
}) 

$.ajax({
    url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    //FIRST NAME
    var userFirstName3=(data.results[0].name.first)
    console.log(userFirstName3);
    $('#matchFirstName3').attr("src",''+ userFirstName3 +'');
    //LAST NAME
    var userLastName3=(data.results[0].name.last)
    console.log(userLastName3);
    $('#matchLastName3').attr("src",''+ userLastName3 +'');
    
    //Photo0
    userPhoto3=(data.results[0].picture.large)
 
    //1
    $('#matchPhoto3').attr("src",''+ userPhoto3 +'');

    //State
    var userState3=(data.results[0].location.state)
    console.log(userState3);
    $('#matchState3').attr("src",''+ userState3 +'');
  }
}) 



$curl -X GET "https://api.spotify.com/v1/me" -H "Authorization: Bearer {your access token}"
