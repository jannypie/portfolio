// U3.W9:JQuery


// I worked on this challenge [by myself, with: ].
// This challenge took me [#] hours.

$(document).ready(function(){

//RELEASE 0:
  //link the image

//RELEASE 1:

  //Link this script and the jQuery library to the jQuery_example.html file and analyze what this code does.
// sets the body background color to pink
$('body').css({'background-color': 'pink'})

//RELEASE 2:
  //Add code here to select elements of the DOM
var mascot = $('.mascot');
var img = $('img');
var bodyElement = $('body');

console.log(mascot);
console.log(img);
console.log(bodyElement);
//RELEASE 3:
  // Add code here to modify the css and html of DOM elements
var h1 = $('body > h1');
h1.css({'color': 'teal','border': '4px dotted teal', 'visibility': 'visible'});

var mascotText = $('.mascot > h1');
mascotText.html('SEA LIONOS!');

//RELEASE 4: Event Listener
  // Add the code for the event listener here
// $('img').on('mouseover', function(e){
//     e.preventDefault()
//     $(this).attr('src', 'http://s3-ec.buzzfed.com/static/enhanced/webdr06/2013/9/13/11/enhanced-buzz-3994-1379086824-25.jpg')
// });
// $('img').on('mouseout', function(e){
//   e.preventDefault()
//   $(this).attr('src', 'dbc_logo.png')
// });
//RELEASE 5: Experiment on your own
img.css({'border': '0px dashed white', 'display': 'block', 'margin': '0 auto', 'width': '25%'});
$('img').on('mouseover', function(e){
    e.preventDefault()
    $(this).attr('src', 'http://s3-ec.buzzfed.com/static/enhanced/webdr06/2013/9/13/11/enhanced-buzz-3994-1379086824-25.jpg');
    $(this).animate({
      borderWidth: '5px',
      width: "100%"
    },1000);
});

$('img').on('mouseout', function(e){
  e.preventDefault()
  $(this).attr('src', 'dbc_logo.png');
  $(this).animate({
      borderWidth: '0px',
      width: "25%"
    },1000);
});

// Reflection
// Haha so much fun using animations on my image! jQuery is super useful but should be
// implemented with caution because it can also be a large file that you're adding
// to your website when you don't actually need to, and could do with straight
// javascript. Things like DOM manipulation and animation are good uses for it though
// because it's quicker to write, and the animation is optimized for you.


})  // end of the document.ready function: do not remove or write DOM manipulation below this.
