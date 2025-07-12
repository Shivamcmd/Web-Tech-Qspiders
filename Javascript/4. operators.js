//! operators 
// ? 1. Arithmetic operators

//*  +, - , * , / , % ,** , ++ , --                              */
console.log(10+5);
console.log(10-5);
console.log(10*5);
console.log(10/5);
console.log(10%5);
console.log(10**5);  // 10 power 5


var a=10;
a++;                // ++
console.log(a
);


var a=10;
a--;               // --
console.log(a
);

// ? 2. Assignment operators
//*  = , += , -= , /= , *= , %=                             */

var n=20;          // =
console.log(n);

n+=10;            // +=
console.log(
    n
);


n-=10;           // -=
console.log(
    n
);

n/=10;           // /=
console.log(
    n
);

n*=10;          // *=
console.log(n);

n%=10;          // %=
console.log(
    n
);


// ? 3. Comparison / Relational operators 

//*  > , < , <= , >= , != , !== , == , === ,   */
console.log(20>30);     //greater than 
console.log(20<30);     // less than
console.log(20>=30);    //greater than equal to 
console.log(20<=30);    // less than equal to 
console.log(20!=30);    // not equal to 
console.log(30=="30");  // loosely equal  
console.log(30==="30");  // equal value & type
console.log(30!="30");  // loosely not .equal


// ? 4. logical operators 
console.log(true && true); //(And - both are same)- true
console.log(false && false); // (OR - both are same) -false
console.log(true && false); // (both not same) -false
console.log(true || false); // true 
console.log(true || true); // true
console.log(!true); //false
console.log(!false); //true

// ? 5. ternary operators ( if and else )
let age = 23;
age >=10 ? console.log("yes") : console.log("No");


//! others  ( typecasting)

var s= "10";
console.log(s);
console.log(typeof s);

var n = parseInt(s);
// var n= +s; 

// var n= s ** 1;

console.log(n);
console.log(typeof n);