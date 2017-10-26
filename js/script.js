function myFunction() {

    var x = document.getElementById("myText").value;

    var shpion = Math.random().toString(36);
    var territory1 = Math.random().toString(36);
    var territory2 = Math.random().toString(36);
    var territory3 = Math.random().toString(36);
    var territory4 = Math.random().toString(36);
    var territory5 = Math.random().toString(36);
    var territory6 = Math.random().toString(36);
    var territory7 = Math.random().toString(36);
    var territory8 = Math.random().toString(36);
    var territory9 = Math.random().toString(36);
    var territory10 = Math.random().toString(36);

    var territory = [
        territory1,
        territory2,
        territory3,
        territory4,
        territory5,
        territory6,
        territory7,
        territory8,
        territory9,
        territory10
    ];

    var shpionNew = shpion;

    function random(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var numRandom = random(1, 10);
    var players = x;
    var mass=[];

    for (var j = 0; j < players-1; j++){
        mass[j] = territory[numRandom];
    }
    mass[players] = shpionNew;

    function compareRandom(a, b) {
        return Math.random() - 0.5 ;
    }

    mass.sort(compareRandom);

    for (var i = 0; i < players; i++){
        var div = document.createElement('div');
        div.innerHTML = "<button id=\'but"+i+"\' class=\'butRez\' onclick=\"fun('but"+ i + "','"+ shpion +"','"+territory1+"','"+territory2+"','"+territory3+"','"+territory4+"', '"+mass[i]+"','"+territory5+"','"+territory6+"','"+territory7+"','"+territory8+"','"+territory9+"','"+territory10+"')\">Игрок "+ (i+1) +"</button> ";
        rez.appendChild(div);
    }
    document.getElementById("but").disabled = true;
    document.getElementById("dano").style.display = "none";

}

function fun(but,shpion,territory1,territory2,territory3,territory4,rez,territory5,territory6,territory7,territory8,territory9,territory10) {
    switch (rez) {
        case territory1:
            alert("Партизанский отряд");
            break;
        case territory2:
            alert("Киностудия");
            break;
        case territory3:
            alert("Полярная станция");
            break;
        case territory4:
            alert("Банк");
            break;
        case territory5:
            alert("Театр");
            break;
        case territory6:
            alert("Больница");
            break;
        case territory7:
            alert("Пиратский корабль");
            break;
        case territory8:
            alert("Университет");
            break;
        case territory9:
            alert("Церковь");
            break;
        case territory10:
            alert("Казино");
            break;
        case shpion:
            alert("Шпион");
            break;
    }
    document.getElementById(but).style.background = 'red';
    document.getElementById(but).style.color = 'black';
    document.getElementById(but).disabled = true;
}




