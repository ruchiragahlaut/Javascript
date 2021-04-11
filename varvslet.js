// very important ---It is little bit different from let (let is in block scope) and var is function scope
// falsy values --> false,null,"", nan,undefiend,-0
var a = 10;
function fn(){
    var a = 20;
    a++;
    console.log("5",a);
    if(true){
        var a = 30;
        console.log("8",a);
    }
    console.log("10",a)
}
console.log("12",a);
fn();
console.log("14",a);

// 12 10
// 5 21
// 8 30
// 10 30
// 14 10

/*let a = 10;
function fn(){
    let a = 20;
    a++;
    console.log("17",a);
    if(true){
        var a = 30;
        console.log("20"a);
    }
    console.log("22",a)
}
console.log("24",a);
fn();
console.log("26",a);*/





/*let a = 10;
function fn(){
    a++;
    console.log("17",a);
    if(true){
        var a = 30;
        console.log("20"a);
    }
    console.log("22",a)
}
console.log("24",a);
fn();
console.log("26",a);*/


//var ->
    // redeclare
    // you can acces before it decalartion
    //function scope

// let -> no redeclartion,
// you can't access it before its redecalartion
// block scope 
//it similar to let but can't change value and address
