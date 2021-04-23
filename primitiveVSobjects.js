//Primitive number ,boolean ,string,undefined, null ,symbol
// Objects -> arrays,functions, errors, dates, object 
// function fn() {
//     console.log("hello from fn");
// }
// // functions are the object that implement callbable
// // object -> key :value
// //  property ,method 

// fn.myProp = "hello";
// fn.innerFn = function () {
//     console.log("I am a method of a fn");
// }
// console.log(fn.myProp);
// fn.innerFn();
// console.log(fn);
// let str = new String("abc");
//  arr is an adapter of objects 
// let arr = ["hi", "hello", "how ", "are ", "you"];
let arr = [10, 23, 4, 5, 67];

// arr["last Value"] = 10;
arr.sum = function () {
    let count = 0;
    for (let i = 0; i < this.length; i++) {
        count += arr[i];
    }
    console.log(count);
}
arr.sum();
// // console.log(arr);
// for (let key in arr) {
//     console.log(key, " : ", arr[key]);
// }



/* The basic difference between object and primitives vales --->

1) - objects are compared by reference
2) - primitives are compared by values
*/

// Example --
var obj1= {}; 	//An empty object
var obj2 = {};	//Another empty object
obj1===obj2;	//This statement returns false
obj1===obj1;	//This statement returns true

var number1= 5;		//number value type variable
var number2=5;		//number value type variable
number1===number2;	//this statement returns true

/*Object properties are mutable, i.e., they can be changed. The properties of an object can be added, removed or changed.
Primitive value type properties are immutable, i.e., they cannot be changed.*/

var obj = { name: 'KSN'};//object with property name and its value 'KSN'.
obj.name;				//this statement returns 'KSN'
obj.name='NKN';	        //the property name now has value 'NKN'
obj.name;	

var stringVariable = 'KSN';
stringVariable.length;	//This statement returns 3
stringVariable.length=1;//Change the length property to 1
stringVariable.length;//this statement returns 3 which means the length property has remained unchanged.


/* s Everything in JavaScript An Object?

As mentioned earlier, value types in JavaScript are categorized into primitive values and objects.

Objects include arrays, functions, built-in objects and user defined objects too. But interestingly primitives sometimes behave like objects too!

Let's look at arrays first.*/

var arr = ["KSN","NKN"];    //This is an array with two values
console.log(arr[0]);		//access the content of array through indexing
//But arrays are indeed special kind of objects.We understand that objects and methods too.
arr.length;					//accessing the length property of the object
arr.push("Jiya");	        //accessing the method of the object

//Arrays are indeed special objects where the properties are indexed which gives us the capability to access them using index.

//Let's look at functions.

function addNumbers(x,y){
    return x+y;
   }//function which adds two numbers
   
var sumOfTwoNumbers = addNumbers(2,3); //calling function addNumbers with two parameters 2,3
//But functions are special kind of objects.
addNumbers.protoype;		           //accessing the prototype property of the object.
addNumbers.call(this,2,3);	       //accessing the method of the object//accessing the method of the object

/*So function indeed objects.

Now, sometimes primitive values also act like objects.

This can be best explained with string value type in JavaScript.*/



var stringVariable ='KSN';	        //a string variable with value 'KSN'
stringVariable.length;				//accessing the length property of the string variable
stringVariable.substring(0,2);		//accessing the substring method of the string object

/*So this is how it works.

When we access the length property of stringVariable, it is converted into an Object and the length property is accessed. Once the property is accessed, it returns to being a primitive value string.

And that is why almost everything in JavaScript is an object!*/


