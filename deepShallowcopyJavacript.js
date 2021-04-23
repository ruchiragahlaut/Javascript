/* we have three methods to copy in javascript including shallow and deep copy */

/*  Use the spread (...) syntax
    Use the Object.assign() method
    Use the JSON.stringify() and JSON.parse() methods*/

const person =  {
    firstName : 'Ruchira',
    lastName : 'Gahlaut'
}

// Now if you want to copy above code with the help of spread -->

let p1 = {
    ...person
}



//now if you want to copy above code with the help object.assign -->

let p2 = Object.assign({},person);

// now if you want to copy above code with the help json -->

let p3 = JSON.parse(JSON.stringify(person));


// Outputs 

console.log(person.firstName);
console.log(p1.firstName);
console.log(p2.firstName);
console.log(p3.firstName);

// shallow copy -->

// Primitive -->
let counter = 1;
let copiedCounter = counter;
copiedCounter = 2;
console.log(counter); 

// Object -->

let person1 = {
    firstName: 'John',
    lastName: 'Doe'
};

let copiedPerson = person;
copiedPerson.firstName = 'Jane';
console.log(person1);


// A deep copying means that value of the new variable is disconnected from the original variable while a shallow copy means that some values are still connected to the original variable

// shallow ----->
let per = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};

let copiedPerson1 = Object.assign({}, per);

copiedPerson1.firstName = 'Jane'; // disconnected

copiedPerson1.address.street = 'Amphitheatre Parkway'; // connected
copiedPerson1.address.city = 'Mountain View'; // connected

console.log(copiedPerson1);

// output -->
/*{
    firstName: 'Jane',
    lastName: 'Doe',
    address: {
        street: 'Amphitheatre Parkway',
        city: 'Mountain View',
        state: 'CA',
        country: 'USA'
    }
}*/


// Deep ---->

let pers = {
    firstName: 'jeery',
    lastName: 'Dusoza',
    address: {
        street: '71-B Lajpat',
        city: 'Delhi',
        state: 'Delhi',
        country: 'India'
    }
};

let coPerson = JSON.parse(JSON.stringify(pers));

coPerson.firstName = 'Ruchi'; // disconnected

coPerson.address.street = 'Park';
coPerson.address.city = 'View';

console.log(pers);

// output -->

/* {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}*/


//more examples -->

console.log("````````````````````jasbir sir examples --> `````````````````````")
let person12 = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    movies: ["Die hard", "First Avenger"]
};
let superClone = (object) => {
    let cloning = {};
    // [fn,lastName,address]
    Object.keys(object).map((prop) => {
        if (Array.isArray(object[prop])) {
            // copy array 
            // cloning[prop]= object[prop]
            // let newArr = [];
            // for (let i = 0; i < object[prop].length; i++) {
            //     newArr.push(object[prop][i]);
            // }
            // cloning[prop]=newArr;
            cloning[prop]=[...object[prop]];
        } else if (typeof object[prop] === "object") {
            cloning[prop] = superClone(object[prop]);
        } else cloning[prop] = object[prop];
    });

    return cloning;
};
let topLevelObject = superClone(person12);
person12.address.street = "12";
person12.lastName = "Rogers";
topLevelObject.firstName = "Steve";
console.log("person", person12);
console.log("top level ", topLevelObject);


// cloning -->

//shallow copy 

/* shallow copy changing  the value of cloned object will reflect into original as well as because both are pointing to 
same object*/

// example --

const a = {
    id :1,
    name :"Ruchi"
}// original object


const b = a;// cloned object

console.log("value of a",a);
console.log("value of b",b);
b.id = 5;
console.log("value of a",a);
console.log("value of b",b);

// Deep copy
/* A deep copy means changing the value of cloned object will not reflect into the original object,because both are pointing to 
different reference*/

let var1 = 4;
let var2 = var1;

var2 = 10;

console.log("value of var1",var1);
console.log("value of var2",var2);

// by using spread operator 

const x ={
    no:1,
    name:"ruchi"
}

const y = {...x};
y.no = 2;
console.log("value of x",x);
console.log("value of y",y);

// here changes are not reflecting in both the objects


// Using asign operator -->

const l ={
    no:1,
    name:"ruchi````````````````````````````````````````",
    add :{
            hh : 1
    }
}

const m = Object.assign({},l);
m.no = 2;
m.add.hh = 3;
console.log("value of x",l);
console.log("value of y",m);

/* here also changes are not reflecting in both the objects now make this object nested */

const q ={
    no:1,
    name:"ruchi",
    address :
    {
        flatno : 23
    }
}

const r = Object.assign({},q);
r.no = 2;
r.address.flatno=34;
console.log("value of x",q);
console.log("value of y",r);

//now you can see it is not working on nested object (It will change the object q also) so for that you have to use parse and stringify

// Stringify --

const h = JSON.parse(JSON.stringify(q));
h.no = 2;
h.address.flatno=34;
console.log("value of x",l);
console.log("value of y",h);

// here the changes in h will not reflect in q

// Array -->

const arr1 = [1,2,3,4,5];
const arr2 = arr1;
arr2[0] =5;
console.log("Arr1",arr1);
console.log("Arr1",arr1);

// changes in arr2 will not reflect in arr1
// now if you have nested array then you have to use JSON.parse(JSON.stringify)



