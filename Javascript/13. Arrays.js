//! ====== Array ========
//* An array is a collection of homogenous or heterogenous data elements.

Ex: [10 , 20 , 30 , 40 ,50]
    [10 , "javascript", null ,true , 50.5]

//? creation 
//* Array can created in 2 ways
/* They are:
1. using literals
2. using new Keyword

1. using literals:
  here , we use array literals(symbols).
  ex: var ar = [10, 20 , 40 , 50]

2. using new keyword:
  here, we have to create by using new keyword
   ex: var ar = new Array(10,20,40,50); */

//? Insertion:
//* process of inserting elements into an array
//* we have to add based on indexing 
   var ar = [];
   console.log(ar);  // []
   ar[0] = 10;
   ar[1] = 20;
   ar[2] = 30;
   console.log(ar);  // [10,20,30]

//? Modification:
//* process of modifying element present in array
//* modify based on indexing 

    var ar = [10, 20 , 30 , 40 ,50];
    console.log(ar);    // [10, 20 , 30 , 40 ,50]
   ar[1] = 100;
   ar[2] = 200;
   ar[4] = 300;
   console.log(ar);  // [100, 200 , 300]

//? Deletion:
//* process of deleting existing element present in an array.
//* we delete based on delete keyword followed by indexing too
//* leave empty places.

var ar = [10 , 30 , 50 ,70 ,90];
console.log(ar); //[10 , 30 , 50 ,70 ,90]
delete ar[1];
delete ar[3];
console.log(ar); // [10 , emoty , 50 ,70 ,empty]

//!            === Array Methods == 
//* These are used to perform manipulations on array .
/*pop(), push(), shift(), unshift(), slice(), splice(),
toString(), join(), sort(), reverse(), isArray(), indexOf(),
includes(), concat().

//? pop():
it remove the element at nth index.

ex : var ar = [10, 20 , 30 , 50 ,40];
     ar.pop();
     console.log(ar);  // [10,20,30,40]
//? push():
it will add element at nth index.
ex: ar.push(500);
    console.log(ar);   //[10, 20 , 30 ,40 ,500]

//? shift():
will remove the element at 0th index.
ex: ar.shift();
    console.log(ar);   //[20,30,40,500];

//? unshift():
will add the element at 0th index.
ex: ar.unshift(100);
    console.log(ar);    // [100,20,30,40,500]

//? slice():
will extract the subpart of an array
will not effect original array
syntax: ar.slice(si, ei);
ex: console.log(ar);   //[10,20,30,40,50]
    console.log(ar.slice(1,4));  //[20,30,40]

//? splice():
will modify the original array.

syntax: ar.splice(si , no of element to delete, element to add);
ex: var ar = [10,20,30,40,50]
console.log(ar); 
ar.splice(1,2,"Jinal");
console.log(ar);       // [10, "Jinal",40 , 50]

//? toString():
will convert any datatype into string 

ex: var ar = ["I", "love", "ReactJs"];
    console.log(ar);            //["I", "Love", "ReactJS"]
    console.log(ar.toString);   //I,Love,ReactJs
   
//? join():
convert array into string based on parameter
 
ex: var ar = ["I", "love", "ReactJs"];
    console.log(ar);         // ["I", "Love", "ReactJs"]
    console.log(ar.join());   // I, Love, ReactJs
    console.log(ar.join(" ")); // I, Love, ReactJs 
    console.log(ar.join("%")); // I%Love%ReactJs 

//? sort():
sort the elements based on characters

by default , the sort() method will consider all element as string
ex: var ar = [10,20,100,7,500];
    console.log(ar);         // [10,20,100,7,500]
    console.log(ar.sort());  // [10,100,20,500,7]

to apply sorting for no , we have to write comparison fn
ex: console.log(ar.sort( (a,b) => a-b ));
                   //output: [7,10,20,100,500]
    console.log(ar.sort(  (a,b) => b-a ));
                   //output: [500,100,20,10,7]
//? reverse():
reverse the array elements in an array.

ex: var ar = [10,20,30,40,50];
    console.log(ar);    //[10,20,30,40,50]
    console.log(ar.reverse());   //[50,40,30,20,10]

//? isArray():
will check if datatype is an array or not.
by default , typeof array will return an object.
syntax: Array.isArray(arrayName);

Ex: Array.isArray(ar);  //true
it will return boolean value.

//? indexOf():
will return the index number of an element
ex: var ar = [10,20,30,40,50];
    console.log(ar.indexOf(20));   //1

//? includes():
will check if the element is present in array or not 
ex : var ar = [10,20,30,40,50];
     console.log(ar.includes(20)) //true
     console.log(ar.includes(2000)) //false

//? concat():
will merge the arrays
syntax: firstArray.concat(secondArray, thirdArray,. . .);
ex: var ar1 = [10,20];
    var ar2 = [30, 40];
    var ar3 = [50, 60];
    var newArray = ar1.concat(ar2, ar3);
    console.log(newArray);  // [10,20,30,40,50,60]
*/