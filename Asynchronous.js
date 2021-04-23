//In fact, the relationship between the now and later parts of your program is at the heart of asynchronous programming


function now() {
	return 21;
}

function later() { 
    console.log("hello Ruchira");
 }

var answer = now();

setTimeout( later, 1000 );
//you are creating a later chunk of your code, and thus introducing asynchrony to your program