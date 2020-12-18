# Project can be viewed at https://master.d3kflwv6ppfjft.amplifyapp.com/

# Learned in this project:

## arrow function fun fact:
Arrow functions are bound (this.XXX) to the object that CREATED them, NOT the object that calls them. This makes state elevation possible.

## state elevation:
Exampled in this project; we wanted certain updates to the state of the program when a box was clicked. Info about this box, however, was useful to the game as a whole, not just the box. Furthurmore, the state of many boxes needed to be considered to determine overall game state. We elevated the state of the Box by passing the onClick function, as an arrow function, all the way down from the Game component, its 'grandparent' component. Although the onClick function is called by the Box component, the function is bound to the Game component. When it is called it by the Box component the function escapes (improper use of the term, i'm sure) all the way back to the Game component to make state changes at that level. 

## so many friggin' curly braces n such
This one is a re-learn. Curley braces, {}, in JS indicate an object. Objects contain key:value pairs. ie the JS code: const person = {name: 'Dave'}; creates an object called a person with one property, name, whose value is Dave. Curly braces will also be used in JS code when using variables inside of strings: 'The person's name is ${person.name}.'
  note: this is called a Template Literal, and the single quotes are absolutely required instead of double quotes. 

You might also see them embedded in an array like we did in the state of the Game:
  this.state ={
              history: [{
                squares: Array(9).fill(null),
              }],
              xIsNext: true,
              stepNumber: 0,
          };
          
Curley braces are also used to define function scope, etc..
  
Now, curley braces are also required in React and HTML code when you want to embed any JS, be that an object or a function (which i guess is also kinda an object. Or at least a first class citizen just like an object). <div>{person}</div> will display the person object in HTML. 

Add in all the needs for paranthesis and square brackets and you have many opportunities for some classy punctuation salads. This will be normal. This will take much getting used to. Good luck. I hear Vue.JS doesn't improve this. Lisp doesn't seem so silly these days...

## object destructuring
JS objects can be 'decomposed' into their individual elements (either objects or primitives). For example, we had an array, lines[], that held arrays of 3 integers;
const [a,b,c] = lines[i]; 
decalres and initializes three constants; a, b, and c; based on the values in the array lines[i]

## array mapping
JS has a map function similar to Python's that can be used on arrays. Also of note, JS has a Map type for when you need a bit more than a primitive array.

## CSS 
p { background-color: blue; } will set ALL p elements on the page
.className { background-color: blue; } is a class identifier, used by appying the 'class="className"' attribute to an element
p.className { ... } will indicate that only paragraph elements with the className class will be styled
* wildcard is a thing, * {} will hit every darn element out there
h1, p2, p {} is a nice way to consolidate styles that are common to multiple element types

## Positioning: Relative -vs- Absolute
use case: the dropdown menu was working on hover, but the menu items were dropping down INSIDE the navbar element, so they were disappearing. 
switched position of the dropdown element from relative to absolute and BOOM! Perfection. 
### Position: Relative 
moves the element relative to where it would have normally shown up in the normal html layout. No other elements are affected.
### Position: Absolute
A bit more tricky than the rest, i think. Absolute positions an element relative to its nearest POSITIONED ANCESTOR. 
Positioned: havning any position property set other than static
Ancestor: any related element higher in the html document tree
If no positioned ancestor exists, uses the document body and moves w/ scrolling
### Position: Fixed
places an element relative to the viewport. When you scroll, it doesn't move! will overlap anything and everything
### Position: Sticky
seems potentially useful for navbars n such. element is relative on page until you scroll to a defined position, at which point the element acts fixed
