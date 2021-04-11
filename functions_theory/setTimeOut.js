//setTimeout is a asynchronous function 

console.log("Before");
function cb() {
    console.log("i will be called");
}

// setInterval -> It will call function every particular time continously.

//setTimeout(cb,2000)
// setInterval(cb,2000)

// here 2000 is 2 sec written in milliseconds

// Now if you want to stop setInterval use the below code -->

let finisher = setInterval(cb, 2000);
setTimeout(function fn() {
    clearInterval(finisher);
    console.log("set Interval stopped");
},10080)
console.log("After");