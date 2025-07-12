//& start
// chhose and click where you want to start 
// refresh 
//& stop-> click on line + pause debugger + refresh 

// ! Global scope - we can access it from anywhere

//* if any variable is declared with "var" , it comes under global scope .
//* if any function is declared , it comes under global stage 

console.log("start");

var a = 10;
console.log(a);

var b = 50;
console.log(b);

var c = 60;
console.log(c);

var sname = "shivam";
console.log(sname);

console.log("end");

// ! script scope - cannot access outside function   //
//* if we declare any variable with let / const -- it comes under script scope  //
// console.log("start");

// var a = 10;
// console.log(a);

// var b = 50;
// console.log(b);

// let c = 60;
// console.log(c);

// const sname = "shivam";
// console.log(sname);

// console.log("end");

 