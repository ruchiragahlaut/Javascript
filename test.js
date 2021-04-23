function check (num1,num2){
    try {
        //console.log(num1%2==0);
        //console.log(num1%num2);
        if(num1%2==0 && num1%num2==0){
         return num1%num2;
    }
    else{
        throw 'bogus';
    }
   }
    catch (err) {
    
    }
}
let re = check(5,2);
console.log(re);