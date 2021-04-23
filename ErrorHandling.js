//You can throw exceptions using the throw statement and handle them using the try...catch statements

/* Two types of exception -->
    ECMAScript exaceptions
    DOMExceptions & DOMError*/

// Use the throw statement to throw an exception. A throw statement specifies the value to be thrown:--> throw expression
throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw{toString: function() {
     return "I'm an object!";
} };


// Create an object type UserException
function UserException(message) {
    this.message = message;
    this.name = 'UserException';
  }
  
  // Make the exception convert to a pretty string when used as a string
  // (e.g., by the error console)
  UserException.prototype.toString = function() {
    return `${this.name}: "${this.message}"`;
  }
  
  // Create an instance of the object type and throw it
  throw new UserException('Value too high');


// try and catch
/*The try...catch statement marks a block of statements to try, and specifies one or more responses should an exception be thrown. 
If an exception is thrown, the try...catch statement catches it.The try...catch statement consists of a try block, which contains one 
or more statements, and a catch block, containing statements that specify what to do if an exception is thrown in the try block*/

function getMonthName(mo) {
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo]) {
      return months[mo];
    } else {
      throw 'InvalidMonthNo'; // throw keyword is used here
    }
  }
  
  try { // statements to try
    monthName = getMonthName(myMonth); // function could throw exception
  }
  catch (e) {
    monthName = 'unknown';
    logMyErrors(e); // pass exception object to error handler (i.e. your own function)
  }

  
  try {
    throw 'myException'; // generates an exception
  }
  catch (err) {
    // statements to handle any exceptions
    logMyErrors(err);    // pass exception object to error handler
  }

  
// very imp --> The finally block
/*The finally block contains statements to be executed after the tThe finally block contains statements to be executed after the try
and catch blocks execute. Additionally, the finally block executes before the code that follows the try…catch…finally statement.*/


/*t is also important to note that the finally block will execute whether or not an exception is thrown. If an exception is thrown,
 however, the statements in the finally block execute even if no catch block handles the exception that was thrown.
You can use the finally block to make your script fail gracefully when an exception occurs. For example, you may need to release a
 resource that your script has tied up*/

 openMyFile();
try {
  writeMyFile(theData); // This may throw an error
} catch(e) {
  handleError(e); // If an error occurred, handle it
} finally {
  closeMyFile(); // Always close the resource
}

//If the finally block returns a value, this value becomes the return value of the entire try…catch…finally production, 
//regardless of any return statements in the try and catch blocks.

function f() {
    try {
      console.log(0);
      throw 'bogus';
    } catch(e) {
      console.log(1);
      return true;    // this return statement is suspended
                      // until finally block has completed
      console.log(2); // not reachable
    } finally {
      console.log(3);
      return false;   // overwrites the previous "return"
      console.log(4); // not reachable
    }
    // "return false" is executed now
    console.log(5);   // not reachable
  }
  console.log(f()); // 0, 1, 3, false
  



