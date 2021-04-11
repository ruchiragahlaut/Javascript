//In javascript, fucntions are objects and we can pass fucntion as  a parameter to another function and that we called CALLBACK.
// In javacript code run asynchronously. It will not wait for any function.

/* Why do we need callback ?
   // what is asynchronous programming ?
   ---> when the code is not running sequentially.

   Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed.
   It helps us develop asynchronous JavaScript code and keeps us safe from problems and errorsCallbacks make sure that a function is 
   not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous
   JavaScript code and keeps us safe from problems and errors. */

// Examples -->

const message = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(message, 3000);

/*There is a built-in method in JavaScript called “setTimeout”, which calls a function or evaluates an expression after a given period
of time (in milliseconds). So here, the “message” function is being called after 3 seconds have passed. (1 second = 1000 milliseconds)
In other words, the message function is being called after something happened (after 3 seconds passed for this example), but not before.*/
//----> So the message function is an example of a callback function.


// what is Anonymous Functions ??
/* Alternatively, we can define a function directly inside another function, instead of calling it. It will look like this:*/

setTimeout(function() {  
    console.log("This message is shown after 3 seconds");
}, 3000);

// what is arrow function ?
/* If you prefer, you can also write the same callback function as an ES6 arrow function, which is a newer type of function in JavaScript*/

setTimeout(() => { 
    console.log("This message is shown after 3 seconds");
}, 3000);


// what about events?

/*JavaScript is an event-driven programming language. We also use callback functions for event declarations. For example, let’s say we want users to click on a button:*/

<button id="callback-btn">Click here</button>
document.queryselector("#callback-btn").addEventListener("click", function() {    
  console.log("User has clicked on the button!");
});

/*o here we select the button first with its id, and then we add an event listener with the addEventListener method.
It takes 2 parameters. The first one is its type, “click”, and the second parameter is a callback function, which logs the message 
when the button is clicked.*/

