function greetUser() {
  alert("Hello, there.");
}

var planA = {
    name: "Basic",
    price: 3.99,
    space: 'small',
    priceInDollars: function () { 
        return '$' + (this.price * 365);
    }
};

function Plan(name, price, space) {
  this.name = name;
  this.price = price;
  this.space = space;
  this.priceInDollars = function() {
        return "$" + (this.price * 365);
    };
}

// creating two need objects

var planB = new Plan ('basic', 4, 'medium');
var planC = new Plan("Standard", 40, "Large");

var cityToCheck = 'Ibadan';
var firstChar = cityToCheck.slice(0, 1); // var firstChar = firstName.charAt(0)
var otherChars = cityToCheck.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedCity = firstChar + otherChars;
var howLong = cityToCheck.length;

var scoreAvg = 4.3873;
var numberOfStars = Math.round(scoreAvg); // 4
var ceil = Math.ceil(scoreAvg); // 5
var floor = Math.floor(scoreAvg); // 4

var rightNow = new Date();
var dateString = rightNow.toString();
var theDay = rightNow.getDay();


var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
