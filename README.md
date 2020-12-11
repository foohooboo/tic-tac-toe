# Learned in this project:

## arrow function fun fact:
Arrow functions are bound (this.XXX) to the object that CREATED them, NOT the object that calls them. This makes state elevation possible.

## state elevation:
A parent can manage a child's state via arrow functions. An arrow function, passed to a child component, will contain state info that the parent needs to know/manage. The child component can do its job with the state. When the child setState()s with the arrow function, it is reflected in the parent component.
