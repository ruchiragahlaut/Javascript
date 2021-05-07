let fs = require("fs");
console.log("before");
//callback is an older way to do async programming
// callback and promises work in same way
// promises is the improvement of callback 
// priority of promises over callback is more 

// callback -- 
fs.readFile("f1.txt",function ch(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log("data ->"+data);
    }
});

// promises is nothing but hold a future value
// promise return , inital state is always pending
let promise = fs.promises.readFile("f1.txt");
console.log(promise)
// In promise there is a state which is pending
// promise is an abstract object which holds a future value
// In future , If my work is fullfill then the pending state of promise will became change from pending to settled
// and all the work will stored there. For exam reading of file
console.log("After")

setTimeout(function(){
    console.log("final state",promise);
},2000);
console.log("hello");


// It is an asynchronus programming - things are not occuring on same time
//settimeout is not  a good method because if file is big we can't figure out the time

promise.then(function(data){
    console.log(data)
})
// reject 
promise.catch(function(err){
    console.log(err);
})
//consumer function it will be called when a promise is fullfilled.
console.log("hello");





// Another example -->
let lib = require("./lib");
// cb -> trust issues
let amount = 100;
let tocut = 20;
function chargeCreditCard() {
    amount = amount - tocut;
    console.log(`Remaining amount ${amount}`)
}
console.log("Before");
// async function
// lib.analyzedata("TV", chargeCreditCard);
let promiseObj = lib.promisifiedAnalyzedata("TV");
promiseObj.then(chargeCreditCard);
// promiseObj.then(chargeCreditCard);
console.log("After");



let fs = require("fs");
// promise is the abstraction on callbacks.
// there were some error in callbacks so we introduced by the promise.
// what is promise ?
// Promise is a token which store future values .
// who defined the future value ?
// Promise future value is given by function.
// Inital value of promise is pending.
// There will be two final state : resolved or rejected.
// Resolved - got answer
// Rejected - got error
// "Then" is only the medium by which you can reach to promise





function promisewalareadFile(filepath){
    // wrap it inside a promise object
    //call resolve where you think work is completed
    // call reject where you think work is error
    //resolve function
    return new Promise(function (resolve,reject) {
        fs.readFile(filepath,function cb(err,data) {
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    });
}

let frp = promisewalareadFile("f1.txt");
console.log(frp);

frp.then(function (data) {
    console.log("data ->"+data);
})
frp.catch(function (err) {
    console.log("err ->"+err);
})
console.log("after");

// we always read data in binary form 
//settimeout is an async function.
// memory diagram of above code ?