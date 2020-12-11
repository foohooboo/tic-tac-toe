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
