const name = "Alligator";
console.log("Hello", name);
console.info("Just FYI");
console.warn("Lookout!");
console.error("not here");

const fancyThings = {
  car: "Ferrari",
  watch: "Cartier",
  clothing: {
    shoes: "Christian Louboutin",
    dress: "Versace"
  },
  boat: "Sunseeker"
};

console.dir(fancyThings);

console.assert(2 > 3, "2 not greater than 3");
console.assert(3 === "3", '3 not === to "3"');

console.group("colors");
console.log("red");
console.log("orange");

// try and catch
function greetWorld() {
  try {
    var greeting = "Hello world!";
    aler(greeting);
  } catch (err) {
    alert(err);
  }
}

function checkPassword() {
  try {
    var pass = document.getElementById("f1").value;
    if (pass.length < 8) {
      throw "Please enter at least 8 characters.";
    }
    if (pass.indexOf(" ") !== -1) {
      throw "No spaces in the password, please.";
    }
    var numberSomewhere = false;
    for (var i = 0; i < pass.length; i++) {
      if (isNaN(pass(i, i + 1)) === false) {
        numberSomewhere = true;
        break;
      }
    }
    if (numberSomewhere === false) {
      throw "Include at least 1 number.";
    }
  } catch (err) {
    alert(err);
  }
}
