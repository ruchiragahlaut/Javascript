// cb -> promise
// cb -> promise
//  node js -> fs.promises.readline
// resolve -> work complete
// reject -> work fail
let fs = require("fs");
function promisifiedReadFile(filePath) {
    //  pending state promise
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, function cb(err, data) {
            if (err) {
                // reject -> work fail
                reject(err);
            } else {
                // resolve -> work complete
                resolve(data)
                // console.log("data->" + );
            }
        });
    });
}
// achieve-> user
let fReadPromise = promisifiedReadFile("f1.txt");
console.log(fReadPromise)
fReadPromise
    .then(function (data) {
        console.log("content->" + data);
    })

fReadPromise
    .catch(function (err) {
        console.log(err)
    })

// Another example -->

let fs = require("fs");
console.log("Before");
let p1 = fs.promises.readFile("f1.txt");
let p2 = fs.promises.readFile("f2.txt");
let p3 = fs.promises.readFile("f3.txt");

let combinedPromise = Promise.all([p1, p2, p3]);
console.log(combinedPromise);
combinedPromise
.then(function (combinedFilesData) {
    for (let i = 0; i < combinedFilesData.length; i++) {
        console.log("content->" + combinedFilesData[i]);
    }
})
console.log("After");



//example
// OOPS-> react 
// test 5 oops 
function MyObject(fn) {
    this.state = "pending";
    this.value = undefined;
    let resolve = function (data) {
        this.state = "resolved";
        this.value = data;
    }.bind(this);
    let reject = function (err) {
        this.state = "rejected"
        this.value = "I am error";
    }.bind(this);

    fn(resolve, reject)
}

let myNewObjct = new MyObject(function cb(resolve, reject) {
    console.log("Hello inside ");
    setTimeout(function () {
        resolve("hello");
    }, 1000);
    console.log("Hello after");
});
console.log("Before");
console.log(myNewObjct);

setTimeout(function () {
    console.log("after 1.5 sec ", myNewObjct);
}, 1500);

console.log("After");