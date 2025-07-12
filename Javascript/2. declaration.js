//*  var - declare, initialize, Re-declare, Re-initialize.
//* let - declare, initialize, Re-initialize.
//* const - declare + initialize (both same time.) , alag se kuch nhi


//^ ---var---

//& declaration 
var a;
console.log(a);
//& Initialization 
a = 10;
console.log(a);
//& Re-Declaration 
var a;
console.log(a);
//& Re-Initialization
a=30;
console.log(a);


//^ ---let---

//& declaration 
let x ;
console.log(x);
//& Initialization 
x = 12;
console.log(x);
//& Re-Declaration is not possible in case of let
// let x; 
//& Re-Initialization is possible
x = 90;
console.log(x);


//^ ---Const---

// declaration -- Not possible
// const x;
// Initialization -- Not possible
// x = 23;
// Re-Declaration -- Not possible
// const x;
// Re-Initialization--- NOt possible
// x = 78;

//& declaration + initialize together possible only

const yourname = "Gandhi";
console.log(yourname);


















