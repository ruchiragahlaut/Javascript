// javascript is a synchronously single threaded language.It has single stack and it can do single thing at a time and all the things is done under this stack
// whenever a javascript code is run then a global execution context is made.
/*javascript stack is only for running the code. When the code is run , Inside the stack global execution context is formed and
every function go there and stack execute them*/
// Call stack will not wait 
// Brwoser has many things inside it, It has super powers and one of the best creation of man.
// Browser -> JS Engine -> call stack
// Browser - > Local storage 
// Browser -> timer
// Browser ->  https://
// Browser -> User Interface

// Browser have some super powers and lets discuss it what these are -->
/*    Web APIs
      SetTimeOut 
      DOM APIs (Document.--)
      fetch()
      local Storage
      console
      location
    so all are above things are not a part of javascript (***very imp). They are super powers which has given by browser.*/


/* now we wnat to call all above APIs in js engine so we call them with the help of keyword (WINDOW) , It is a global object and 
with the help of this we call them.*/

// But we can't use window.setTimeOut , we simply write setTimeOut


console.log("start");
// when you wrote above line , it simple call console.log APIs
setTimeout(function (cb){
    // In the columns of web APIs cb will regsistered there along with setTimeou, DOM, console, fetch().
    console.log("callback");
},5000);

onsole.log("End");

// Here setTimeOut call the Timer APIs and it calculating 5000 milli seconds 
// as soon 5000 sec time finish then code finsihed there now we want Cb callback back to the stack because we want to run that callback
//here callback queue is introduced here 
// after time expiration cb go to the callback queue.
/*The event loop here is to check the callback queue whether it haas something or not , here we have callback in callback queue
so it take the cb and put it in call stack*/
// Again all the global execution is formed.


console.log("sart");
document.addEventListener("click",function cb(){
    console.log("callback");// here when a person click the button the cb pushed in callback queue and then event loop pushed it in stack
});
console.log("End");


/* now addeventListener is another super power which is given by the browser to the javascipt engine through the window object in form
of web APIs which is DOM APIs so when you do something document. it basically call the DOM APIs which basically fetches something
from DOM*/

/* DOM is the document object model (It is like the html source code) and tries to find the button with given ID and eventListener add
the callback*/
// when the eventt loop sees the stack is empty and callback queue is not then it ppushes the callback functions to the stack for executing
// Now if you click the button 5 times then cb pushed in the callback queue 5 times and then event loop pushed the cb in stack.

// **imp -- event loop not directly pushes the callback from web APIs or node APIs to the stack


    

//Another example-->

console.log("start");
setTimeout(function cbT(){
    console.log("CB SetTimeout");
},5000);

fetch("https://api.netflix.com").then(function cbF(){
    console.log("CB netflix");
    // this fetch is very fast.it will give the result with in 15 ms.
});

// let suppose you have millions of lines of code 

console.log("End");

// code start then GLOBAL context will form in stack and start print now setTimeout regsistered the cb in node APIs or web APIs
// and Timer will also start of  5000 sec after that fetch will regsistered the cbF in node APIs and END will print.

// now ***Very Imp ---> MicroStack Queue will introduced here who has higher prority than callback stack
//CBF will go micro stack queue and job of event loop is to check the queue is empty or not. 

// so after executing million of line of code "End" will print after that 

//  we have two queues --> microStack Queue and Callback Queue and both have one one callback

// eventloop continously monitoring the stack is empty or not if empty it take the micrstack callback (CBF) and stack will execute it.
// then after callback of callback queue will go to the stack and will execute.

// QUES - WHAT other callback will come under the microstack ??

/* Answer -- which callbacks comes by promises and by mutations observer will go to micro stack. 
and all other callbacks go to the callback queue. Microstack has greater priority then callback queue(Task Queue).*/

/* imp*** -> when there are many callbacks are avaliable in microstack queue and one by one they all are executing and it took a quite long time
and at the same there is a callback which are waiting in callback queue then this is called Starvation.*/

