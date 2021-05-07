// npm install puppeteer
let puppeteer = require("puppeteer");
// browser launch
let browserWillBeLaunchedPromise = puppeteer.launch({
    headless :false,
    defaultViewport :null,
    args:["--start-maximized"]

    //headless : true 
    // that means you can't see the brouwser
})
//console.log(browserWillBeLaunchedPromise);
// every line of puppeteer is a promise
browserWillBeLaunchedPromise
.then(function(browserInstance){
    // new tab
    let newPagePromise= browserInstance.newPage();
    newPagePromise
    .then(function(newPage){
        console.log("new tab opened");
        // go to pepcoding
        let pageWillBeopenedPromise = newPage.goto("https://pepcoding.com");
        // goto is also try to give promise
        pageWillBeopenedPromise.then(function(){
            console.log("page is opened");
        })
    })
})

//https://flaviocopes.com/puppeteer/ 
// important - article
//https://pptr.dev


// short way of above code --
// chaining of promises

browserWillBeLaunchedPromise
.then(function(browserInstance){
    //new tab
    let newPagePromise= browserInstance.newPage();
    return newPagePromise
}).then(function(newPage){
    console.log("new tab opened");
    // go to pepcoding
    let pageWillBeopenedPromise= newPage.goto("https://pepcoding.com");
    return pageWillBeopenedPromise;
}).then(function(){
    console.log("page is opened");
}).catch(function(err){
    console.log("error");
})
