//composition -  it is sum up of all other small functions
//for example - calculator
// In calculator we have many other functions like sum, subtract, divide, multiply
// we alwyas work in composition not in inheritencce 
// article - react.org 


// call back function -> the function that are passed as a parameter to be used by that function later.
// higher order function -> a function that accepts a function as an argument or returns a function. 
function add(x, y) {
    return x + y;
}
// smaller functions

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    if (y == 0) {
        return "invalid operation"
    }
    return x % y;
}

function multiply(x, y) {
    return x * y;
}


// we use composition instead of inheritance
// bigger function
function calculator(x, y, opertor) {
    let ans = opertor(x, y);
    return ans;
}
// props
console.log("Result is : ",calculator(10,20,add))
console.log("Result is : ",calculator(10,20,multiply))
console.log("Result is : ",calculator(10,20,divide))
console.log("Result is : ",calculator(10,20,sub))