//         name,type,hp,attack,defense,legendary?
var p = [
    ["Pikachu", "Electric",35, 55, 40, false ]
    ["shannon", "sings", 35, 40, 40, true]
    ["Nick", "Blood", 666, 666, 666, true]
]
for (var i = 0; i < p.length; i++){
    var line ="Name:" +p[i][0];
    line = line + "type:" + p[i][1];
    line = line + "HP:" + p[i][2];
    console.log(line);
}


         