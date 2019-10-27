document.getElementsByClassName('one'); // h2
document.getElementsByTagName('h1')[0].innerHTML; // Demo
document.getElementById('one'); // h3

document.querySelector('#two').textContent; // 2
document.querySelectorAll('li'); // all Li

// Select the starting point and find its siblings.
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling; // 3
var nextItem = startItem.nextSibling; // 4

// Select the starting point and find its children.
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// Create a new element and store it in a variable.
var newEl = document.createElement('li');
// Create a text node and store it in a variable.
var newText = document.createTextNode('5');
// Attach the new text node to the new element.
newEl.appendChild(newText);
// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];
// Insert the new element into its position.
position.appendChild(newEl);

var item = document.getElementById("two");
var attrSet = item.setAttribute("class", 'well');
var attr = item.getAttribute("class");
alert ('attr');