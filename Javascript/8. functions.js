// ! Functions  //
/*function is block of code/ statements which will
execute whenever it is called or invoked. 
 // * Named Function
 /* function declared with an identifier name  */
  // ? Case 1:
 console.log("start");

  var a= 20;
  console.log(a);

  let b=20;
  console.log(b);

  const c=30;
  console.log(c);

  function sum(){
    var ram = 3;
    let shyam = 4;

    return ram + shyam ;
  }

  console.log(sum);
  console.log(sum());
  console.log("end");

  //?---------Case-2 ----
  console.log("start");

  function sayhi(){
console.log("I am from sayhi ");
  }
   
  function saybye(){
console.log("I am from saybye ");
  }
   
 function greetMe(){
    var user = "shivamm";
    console.log("hello , " , user );
 }

 functionsayhi();
 functionsaybye();
 functiongreetMe();

 console.log("end");

 //* Anonymous function  //
 /* here we should not use function identifier 
 as there is not reference to invoke the function , we have to access through variable and we have to invoke it.*/
// ? case 1 :
console.log("start");

console.log(a); // undefined
var a=10;
console.log(a); //10

console.log(x); //undefined 
var x="himanshu";
console.log(x);   // himanshu

console.log(add);   // undefined
var add = function(){
console.log("Gautam");
}


// ? case 2 :
console.log("start");

console.log(d);
var d = 10;
console.log(d);

console.log(v);
var v = 45;
console.log(v);


var add1 = function sum1(){
  console.log("Gautam");
  let m = 45;
  let n = 9;
  return m+n;
}

console.log(add1);
console.log(add1());

console.log("end");


//* first class function  //
 /* It is a function which is assigned as value to a variable 
 It can be named function/ anonymous function/ arrow function 
 cannot be accessed directly without variable names
 */
 
//* function with expression function  //
/* Function ko kisi variable me assign karna — jaise value assign karte ho. */
// Function Expression
const sayHi = function() {
  console.log("Hi!");
};

sayHi(); 


