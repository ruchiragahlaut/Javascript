/*Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on).
 Any type, be it primitive or an object, is a valid subject for type coercion. To recall, primitives are: number, string, boolean, 
 null, undefined + Symbol */


 // Two types of coercion --> Implicit and --> explicit

 /* Implicit --> When a developer expresses the intention to convert between types by writing the appropriate code, like Number(value),
  it’s called explicit type coercion (or type casting).*/

/* Explicit --> JavaScript is a weakly-typed language, values can also be converted between different types automatically,
    and it is called implicit type coercion.*/


 //In javascipt we have only three type of conversion --
 /* toString
    toBoolean
    toNumber
*/


// for example -->

let a =String(123) // explicit
let b =123 + ''    // implicit

String(123)                   // '123'
String(-12.3)                 // '-12.3'
String(null)                  // 'null'
String(undefined)             // 'undefined'
String(true)                  // 'true'
String(false)                 // 'false'
//Very important -->
// Symbol conversion is a bit tricky, because it can only be converted explicitly, but not implicitly.

String(Symbol('my symbol'))   // 'Symbol(my symbol)'
'' + Symbol('my symbol')      // TypeError is thrown


// Boolean convrsion -->
// read --> https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/

