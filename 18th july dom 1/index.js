
//Access the element with ID "title" and update its innerText to "Welcome to JavaScript!".
let title = document.getElementById('title')
title.innerText = 'Welcome to Javascript'

//Select all elements with class "card" and change the background color of the third one to "lightgray".
let c= document.getElementsByClassName('card')[2]
c.style.backgroundColor= 'lightgray'

//Use querySelector to select the first <h2> element and make its text italic using style.fontStyle.
let d = document.querySelector('h2')
d.style.fontStyle='italic'

//Change the innerHTML of an element with ID "info" to include a <u>Click here</u> link.
let a = document.getElementById('info')
a.innerHTML= '<u> Click here </u>'

// Write a function that sets the font size of an element with ID "heading" to 40px when called.
function hfontsize() {
    let a = document.getElementById('heading')
    a.style.fontSize = '40px'
}
hfontsize();

// Add an event listener to a button with ID "hoverBtn" that changes the background of a <div> with ID "box" to "orange" when hovered.
let button = document.getElementById("hoverbtn");
let bx = document.getElementById('box');
function changebg() {

  bx.style.backgroundColor = 'orange';
}
button.addEventListener('mouseover', changebg);
button.addEventListener('mouseleave',function() {
    bx.style.backgroundColor = 'white';
})

// On clicking a button with ID "hideBtn", hide a paragraph with ID "description" using style.display.
let para = document.getElementById('description')
let hidebtn = document.getElementById('hidebtn')
hidebtn.addEventListener('click', function () {
    para.style.display = 'none';
})

// On clicking another button with ID "showBtn", show the hidden paragraph again.
let showbtn = document.getElementById('showbtn')
showbtn.addEventListener('click', function () {
    para.style.display = 'block';
})

// Select all <li> elements using getElementsByTagName and change the text of the last item to "Done".
let li = document.getElementsByTagName('li')
li[li.length - 1].innerText = 'done'

// Using querySelectorAll, select all elements with class "highlight" and set their text color to "purple".
let hilt = document.querySelectorAll('.highlight');
hilt.forEach(element => {
  element.style.color = 'purple';
});


//script operation confirmation
console.log("Script loaded successfully");
 