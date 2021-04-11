console.log("```````````Primitive Data types````````````````");
// Numbers
// Strings
// Undefined
// Boolean
/*      typeof "John"              // Returns "string"
        typeof 3.14                // Returns "number"
        typeof true                // Returns "boolean"
        typeof false               // Returns "boolean"
        typeof x                   // Returns "undefined" (if x has no value) 
*/

//JavaScript Types are Dynamic

//JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

/*var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String 
*/






// NON PRIMITIVES TYPES 

// 1-> functions
// no return type
// function defination
function fun1(name){
    console.log("hello from fun1");
    console.log("hello",name);
    let re1 = Math.random() >0.5 ? false : "very good";
    return re1;
}
//function invokation
//let result1 = fun1("hello");
//console.log("final answer is",result1);
//fun1("Ruchira");
//fun1(null);
//fun1(['hello','ruchira']);



// when you will not return anything

function fun2(name){
    //console.log("hello from fun1");
    //console.log("hello",name);
    let re1 = Math.random() >0.5 ? false : "very good";
    return re1;
}

let result1 = fun2("hello");
console.log("final answer is",result1);
// it will return undefined error



// 2 -> arrays - It is a collection of homogenous data types (same type of data).
// But here , array is a collection of hetogenous(anything).** advantages
// types - num,float,boolean,function,string,
let arr = []
// you can put any type of value
arr=[1,1.1,"string",true,null,function sayhi(){
    console.log("hi ruchira");
    return "byee";
}]

// loop
//for(let i=0;i<arr.length;i++){
    //console.log("idx :",i,"value of i : ",arr[i])
//}

// get
//onsole.log("value of array at index 3",arr[3]);
console.log("value",arr[arr.length-1][2]);
console.log("value of array at 6",arr[5]);
console.log("value of array at 6",arr[5]());

// push -> add last
//pop -> remove last
//unshift -> add first
// shift -> remove last
//slice -> it will cut a slice from your array. take two index and last index is exclusive.
let arr1 = [1,2,3,4,5,6];
let slicearray = arr1.slice(2,4);
console.log(slicearray);
console.log(arr1);

// splice -> removed elements array and in this you have to given the index where you have to remove and
// give the length of elements you want to remove

let removedarr = arr1.splice(4,2);
console.log(removedarr);
console.log(arr1);

//split function -> it will split the string into one word

let str = "hello ruchira, How are you ?"
let new_str = str.split(" ");
console.log(new_str);

// join function -> it will join on the basis of sum operator

let new_join = new_str.join("+");
console.log(new_join);

/*The typeof operator can return one of two complex types:

    function
    object
*/
