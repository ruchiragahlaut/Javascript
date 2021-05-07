# Facts
* promise is just another way of doing async programming.
* Promise is a token that represents future values .
* future Value inside that promise is defined by functions.
* Intial value of promise is pending.
* There will be two final state : resolved or rejected.
-  Resolved - got answer
-  Rejected - got error
* to consume a promise we have two **synchronoud function**
then and catch. They are used to regsister calllback function on that promise. 
* Asynchronous function - A function which run later.
* Synchronous function - A function run during parsing.
* callbacks functions passed inside then and catch are sync.
* promise can resolved or rejected at once in a lifetime.
* then -> can accept upto 2 callbacks -> then(scb,fcb)
                first -> sucess callback
                second -> failure callback
* catch is nothing but then (undefined ,fcb).



* Async await --> syntax sugar for consuming promises
* Await --> alternative to then
* Await --> works only in async function
* Async function will stop for await but js stack will not

    promise is just another way of doing async programming
    promise is a token that represents a future value ,and state
    future value inside that promise is determined by the function that returns the promise
    promise-> initial state-> pending
    promise -> final state-> resolved -> you have got the future value rejected-> error
    to consume a promise we have two Synchronous function then and catch. They are used to register cb function on that promise
    cb functions passed inside then and catch are async
    promise can only be rejected or resolved once in a lifetime
    every then and catch also returns a promise
    final state of promise returned from then/catch depends upon value returned from there cb if cb returns then your promise will resolve into val=>val nothing=> undefined promise=> promise
    then -> can accept upto 2 optional callbacks-> then(scb,fcb) first -> success callback second -> failure callback
    catch is nothing but then(undefined,fcb);

* https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript