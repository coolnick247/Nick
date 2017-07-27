function displayStats(){
    $('#milly').text('Hide it in my sock');
}


function setup(){
$( 'body' ).append( "<h1><center>In New York I MILLYROCK</center</h1>" );
$('body').append("<div><h3>How Much I MILLYROCK</h3><p id ='milly'></p></div>");
$('body').append("<button onclick ='displayStats()'>MillyRock</button>");
$('body').append('<div id= millyrock></div>')
}

$(document).ready(setup);