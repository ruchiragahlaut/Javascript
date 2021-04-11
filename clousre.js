// In javacript we have two types of variables : Global and local varibale 

// Local variable means that we can access this varivale only inside the functions
// Global variable means that we can access this in the whole code.

// Initiate counter
var counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3 

//There is a problem with the solution above: Any code on the page can change the counter, without calling add().

//The counter should be local to the add() function, to prevent other code from changing it.

// Initiate counter
var counter = 0;

// Function to increment counter
function add() {
  var counter = 0;
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

//It did not work because we display the global counter instead of the local counter.

//We can remove the global counter and access the local counter by letting the function return it.

//javaScript Closures

//Remember self-invoking functions? What does this function do?

var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add();
  add();

  /*The variable add is assigned to the return value of a self-invoking function.

The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

The counter is protected by the scope of the anonymous function, and can only be changed using the add function.*/


// very important ---->

// A closure is a function having access to the parent scope, even after the parent function has closed.