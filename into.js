console.log("```````````````output statements````````````````")
/* we have four ways to display output in console 
    
    Writing into an HTML element, using innerHTML.
    Writing into the HTML output using document.write().
    Writing into an alert box, using window.alert().
    Writing into the browser console, using console.log().
*/

console.log("`````````````````comments`````````````");
/*
    JavaScript comments can be used to explain JavaScript code, and to make it more readable.

    JavaScript comments can also be used to prevent execution, when testing alternative code.

    Single line comments start with //
    Multi-line comments start with (/*) and end with 
*/

console.log("`````````````Basic intro of Javascript```````````````````");
// In javascript there is no main function like in java 
//statiscally defined -> variables types => statiscally typed
//int varName
// initialize

// "LET" is a type which allow variable to store different types of data types and overwrite each other 
// and take the last one.
// It is case-sensitive
// convention -> java -> camel casing
// no indentation problem


varName =10;
varName =1.2;
varName ="string";
varName = true;
varName = null;
console.log("i am a",varName);

// 10 days javascript -> (brenden eich) -> netscape browser -> (java syntax , easy to code)
// javascript -> java  -> loops -> conditional -> break return functions arrays classes

let number =23;
let flag = true;
for(let div =2; div*div<=number;div++){
    if(number%div==0){
        flag = false;
        break;
    }
}
if(flag==true){
    console.log(number,"is prime");
}
else{
    console.log(number,"is not prime");
}
