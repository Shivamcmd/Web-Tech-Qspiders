//!===== Nullish Coelspacing (??) ===
//* logical operator that returns its right hand side operand.
//* when its left hand side operand is null or undefined.
//* otherwise returns its left-hand side operand.

var user;
var greet = `welcome to our website - ${user ?? "Guest"}`;
console.log(greet);






