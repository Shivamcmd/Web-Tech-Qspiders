// ! ================= BOM =================
/**
 * In javaScript BOM stands about for Browser Object Model.
 * Its a collection of object that allows javaScript to 
   interact with the browser
 * Everything in JavaScript is an object..
 * 
 * BOM represented by a keyword "window"
 * 
 */
console.log(window); // it points the whole browser

// ? ======== window properties ================
console.log(window.document); 
//represent current html document
console.log(window.screen);
 // provide basic info about screen- height,width, orientation.
console.log(window.history);
// keep track of webpages you opened & it will store as history.
// we can perform forward(), back() operations using this.
console.log(window.navigator);
// provide info about browser like appname, appversion etc
console.log(window.location);
// provide info about current location like path,hostname,href.
console.log(window.innerHeight);
// calculates browser height excluding console area.
console.log(window.outerHeight);
// calculates browser height including console area.
console.log(window.innerWidth);
// calculates browser width excluding console area.
console.log(window.outerWidth);
// calculates browser width inluding console area.

// ? =========== window method ================= 

console.log(window.prompt("Enter your name"));
// display popup in browser, take user input.
console.log(window.alert("Emergency danger"));
// display popup message with button "OK".
window.confirm("Once after sunmission you cannikt edit code");
// display popup message with button "OK" and "cancel".

window.open("https://www.meesho.com");
window.open("https://www.meesho.com");
window.open("https://www.meesho.com");
// open a new webpage

window.close();
// allows to close current webpage

// ~ ==================== web browser Api ===================================================

console.log("I am first");

setTimeout(()=>{
  console.log("I will display after 0s");
},0)

// syntax : setTimeout(callbackFn , time)

let timer3s = setTimeout(()=>{
  console.log("I will display after 3s");
},3000)

setTimeout(()=>{
  console.log("I will display after 1s");
},1000)

//syntax : clearTimeout(setTimeoutName)

setTimeout(()=>{
  console.log("I am clearing ");
  clearTimeout(timer3s)
},1500)

//syntax: setInterval(callbackfn, intervaltime)
let count = 1;
setInterval(()=>{
  console.log("I am interval 2sec" , count++);
},2000)

var intervals = setInterval(()=>{
  console.log("I am intervals 1s");
},1000)

// syntax : clearInterval(setIntervalName)

setTimeout(()=>{
clearInterval(intervals)
},5000)





