// A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined 
//after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible 
//outside that function.


// Draw memory diagram of these below code --> very important 

let myVar = 10;
function c(){
    console.log("6",myVar);// 10 here we have't define any my var so it took the one level up
}

function b (){
    let myVar= 20;
    console.log("8",myVar);
    c()
    console.log("10",myVar);
}
console.log("12",myVar); // 12

function a(){
    let myVar =30;
    console.log("15",myVar);
    b();
    console.log("17",myVar);
}

console.log("19",myVar);// 19
a();
console.log("21",myVar);

// 12 10
// 19 10
// 15 30
// 8 20
// 6 10
// 10 20
// 17 30
// 21 10

let myVar = 10;

function b (){
    let myVar= 20;
    console.log("8",myVar);
    function c(){
        console.log("6",myVar);
    }
    c();
    console.log("10",myVar);
}
console.log("12",myVar); // 12

function a(){
    let myVar =30;
    console.log("15",myVar);
    b();
    console.log("17",myVar);
}

console.log("19",myVar);// 19
a();
console.log("21",myVar);

