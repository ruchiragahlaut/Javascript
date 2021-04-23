// Undeclared -->

/* Undeclared is not a reserve word in javascript*/

a ;
console.log(a);
// not defined error so if we are trying to get a variable which is not define as let or const or var then it is undefined.
// A function which doest return any value also return undefined
// when we try to access the array which is not defined also return undefined

let x ;
console.log(x);
// here we are declaring x without defining it so it is undefined while accessing it



// NULL -->

// A primitive value that represents the intentonal absence of any object value

typeof(null)// object

// it is legacy bug , it is not a object , it is a primitive type
//In APIs, null is often retrieved in a place where an object can be expected but no object is relevant.

//null and undefined are loosely equal but not strictly equal and this is because checking for loose equality coerces both to falsy.

// UNDEFINED IS LACK OF TYPE AND VALUE 
// NULL IS LACK OF VALUE


//NULL -->

/* null is assigned 
   null is always intentional
   null is indicate lack of value*/

// UNDEFINED -->

/*  undefined can be assigned.
    undefined is often unintentional.
    undefined indicates a variable is declared but not defined.*/

// BOTH -->
/*  Both null and undefined are primitives.
    Both null and undefined are falsy values.
    null and undefined are loosely equal.*/

