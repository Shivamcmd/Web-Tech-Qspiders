// ! Data types //

// Number
// String
// boolean 
// null
// BigInt
// undefined 


// object 
// array 
// function 
// date 
// maths

var sname = "Abhishek";    //* string
console.log(sname);
console.log(typeof sname);

var sname = 345;         //* number
console.log(sname);
console.log(typeof sname);

var ismarried = true;     //* boolean
console.log(ismarried);
console.log(typeof ismarried);

var studentscount = null;   //* null
console.log(studentscount);
console.log(typeof studentscount);

var friendsname = ["rudra", "krishna"];  //* array
console.log(friendsname);
console.log(typeof friendsname);

var homeaddress = {           //* object
    house:70,
    street:2
};

console.log(homeaddress);
console.log(typeof homeaddress);

var sal = 1n;              //* BigInt
console.log(sal);
console.log(typeof sal);


function sum(a,b)          //* function
{
    return a+ b;       

}
console.log(sum);                           
console.log(sum(50,40));
console.log(typeof sum);

console.log(Math);          //* maths
console.log(Math.max(5, 10));  // 10

  //* Date