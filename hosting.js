//Our whole code run under a bubble which we called GLOBAL EXECUTION CONTEXT (It is hidden function not shown to the functions).
// Step1 -> It will create an enviroment
// Step2 -> Execute --> code execution --> code run (left to right or top to bottom).
// In create --> Memory location or hositing is the same thing so, In create first we allocate the memory. Memory of variavles will
// set to undefined. And the memory for functions which are four type - 1)Function statement 2) Function expression 3) arrow function
// In create --> outer scope (lexicalscope)
// A new execution context is form when a new function is call
//4) IFFE . So,In create we allocate the memory for these four types of function.






console.log("a",a); // undefined
var a;
console.log("a",a); //  undefined (here we are getting undefiend bcz we already define the memory allocation and put it undeifiend)
a = 10;
console.log("a",a);// 10
hello();
function hello(){
    console.log("i am expression");
}console.log(varName())// undefined 
//varName();// error(bcz we can't define undefiend function)
var varName = function(){
    console.log("i am expression"); // 
}
varName();// i am expression

// first memory will allocation is done then we execute the code; 
//we have to assume that whole code is under main and here global execution context will form.
// the very first work here is memory allocation 
//code - js - execution control
//Execution control ----1) create 2) Execute -> left to right and top to bottam

//1) create -- hosting or memory location  || outer scope 
//2) execute -- code run 

// whole code is under global context execution bcz we don't we have main here like java
