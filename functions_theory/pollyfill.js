// feature -> implement -> polyfill

// In polyfill you have to create a library kind of thing which we will implement first then we wil use our library in our code
// We can say it Inheritence, In which we have to create first parent then we create children of parent.

// classes ->house ->  blueprint -> object -> house instance (classical oops)(Java)

// protoype -> house -> object -> house (protypal oops)(JS)

// parent
// inheritance

// Capital array is the parent of array, Capital string is parent of string.

Array.prototype.myMap = function (cb) {
    let reArr = [];
    for (let i = 0; i < this.length; i++) {
        let ans = cb(this[i]);
        reArr.push(ans);
        // Very imp --> here "THIS" keyword is used which take the refrence of child array every time you call it.
    }
    return reArr;
}

// we can also use a file underscore.js put the above code there and used here by require("underscore.js") like an library.

function squarer(a) {
    return a * a;
}
function cuber(a) {
    return a * a * a;
}


let arr1= [100, 200, 300, 400];
let arr2 = [1000, 2000, 3000, 4000];
let newArr = arr.myMap(squarer);
let cubeArr = arr2.myMap(cuber);

console.log("New Arr", newArr);
console.log("New Arr", cubeArr);