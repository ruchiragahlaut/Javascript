// fucntions
// impure function 
// outer variable
var a = 2,
    b = 3;
console.log("Intial values of a and b"+ a + " " + b);
// impure function
console.log("Impure functions");
function fun1(x) {
    a = a * x;
    b = b * x;
    return a + b;
}
console.log("Result of function " + fun1(10));
console.log("Side effect is " + a + " " + b);
console.log("Result of function " + fun1(5));
console.log("Side effect is " + a + " " + b);


console.log("Pure functions");
var a = 2,
    b = 3;
console.log("Intial values of " + a + " " + b);
// pure function
function fun2(a,b,c) {
    a = a * c;
    b = b * c;
    return a + b;
}
console.log("Result of function " + fun2(a, b, 8));
console.log("Side effect is " + a + " " + b);
console.log("Result of function " + fun2(a, b, 8));