//! ==== falsy values ===== 
//* In Js , these are used to evaluate to False:

if (0) {
  console.log("This won't run"); // because 0 is falsy
}
if ("") {
  console.log("This won't run"); // because empty string is falsy
}
if ("hello") {
  console.log("This will run"); // because non-empty string is truthy
}
if (-0) {
  console.log("This won't run"); // because -0 is falsy
}
if (0n) {
  console.log("This won't run"); // because 0n is falsy
}
if (null) {
  console.log("This won't run"); // because null is falsy
}
if (undefined) {
  console.log("This won't run"); // because undefined is falsy
}
if (NaN) {
  console.log("This won't run"); // because Not a Number is falsy
}

function sayMyName() {
  console.log("Hi");
  console.log("bye");

}

sayMyName();
sayMyName();
sayMyName();
