var a = 2;
var b = 5;
var c = 'rose';
var d = 'Rose';

a > b || b < 10;
a > b && b <= 10;
c == d || b !== c


var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
    alert("Correct!");
} else if (x === 'Italy') {
    alert ('Almost correct');
} else {
    alert ('Wrong, you dummy!');
}


switch (x) {
    case 'Vatican':
        alert('Correct Man');
        break;
    case 'Italy':
        alert("Almost correct");
        break;
    default:
        alert("Wrong, you dummy!");
        break;
}


var cleanestCities = [
  "Ibadan",
  "RingRoad",
  "Ado",
  "Eko",
  "Kano"
];

var cityToCheck = prompt('enter a city');
for (var i = 0; i <= 4; i++) {
if (cityToCheck === cleanestCities[i]) {
    alert("It's one of the cleanest cities");
    }
}

var i = 7;
while (i <= 14) {
 alert(i);
 i++;
}