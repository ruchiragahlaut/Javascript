// In this we will study three high order functions which are map, filter, reduce.



// two normal functions
function squarer(a) {
    return a * a;
}

function cuber(a) {
    return a * a * a;
}

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log("```````````````````MAP````````````````````````");

// below functions is the implementation of inbuilt function map.
function myMap(arr, cb) {
    let reArr = [];
    for (let i = 0; i < arr.length; i++) {
        let ans = cb(arr[i]);
        reArr.push(ans);
    }
    return reArr;

}

let newArr = myMap(arr, squarer);
console.log("Implementation by myMap funtion"+newArr);

let Squ = arr.map(squarer);
let cube = arr.map(cuber);
console.log("Result of inbuilt function .map", Squ);
console.log("Result of inbuilt function .map", cube);



console.log("`````````````````````FILTER``````````````````");
function isEven(num) {
    return num % 2 == 0;
}
function Myfilter(arr, filterTest) {
    let reArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (filterTest(arr[i]) == true) {
            reArr.push(arr[i]);
        }
    }
    return reArr;
}
let EvenArrTest = Myfilter(arr,isEven);
console.log("\n");
console.log("Implementation of filter by Myfilter",EvenArrTest);
let EvenArr = arr.filter(isEven);
console.log("Implementation of filter by .filter", EvenArr);


//empty function
//function fn() {
//}
// let newArr = arr.filter(fn);
// console.log(newArr);

console.log("`````````````````REDUCE``````````````````");

function add(storage, ith) {
    return storage + ith;
}
function product(storage, ith) {
    return storage * ith;
}
// let product = arr.reduce(add);
function myReduce(arr, cb) {
    let storage = arr[0]
    for (let i = 1; i < arr.length; i++) {
        storage = cb(storage, arr[i]);
    }
    return storage;
}
console.log("Implementation of reduce by Myreduce function --> sum", myReduce(arr,add));
console.log("Implementation of reduce by Myreduce function --> product", myReduce(arr,product));

let reArr = arr.reduce(add);
let reArr1 = arr.reduce(product);

console.log("Implementation of reduce by .reduce function --> sum",reArr);
console.log("Implementation of reduce by .reduce function --> product",reArr1);

