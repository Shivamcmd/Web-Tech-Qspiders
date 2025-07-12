var obj = {
    name: {
        firstname: "shivam",
        lastname: "sharma",
    },
    address: {
        presentAddress:{
          streetNo: "123",
          city: "Delhi",
        },
    },
};

console.log(obj);
console.log(obj.name);

// if (obj) {
//   if (obj.name){

//    if (obj.name.firstname) {
//          console.log(obj.name.fiirstname);
//   } else {
//     console.log("firstname is not present");
//    }
//} else {
//  console.log("Name is not present")}
//  else {
//  console.log("Name is not present");
// }
// else {
// console.log("obj is present");
//}

// objName.property?.property?.property?.property?.property?.

console.log(obj.name?.firstName);
console.log(obj.address?.presentAddress?.streetNo);

//! ===== Object Short hand Synatx =====
// If we have key and a variable as a value
// If key name and variable name both are same , we can write only once.

//? Case 1:
var obj = {
    sname: "studentname",
    age:" studentAge",
};

console.log(obj);

//? Case 2:
var studentName = "Aman";
var studentAge = 22;

var obj = {
    sname: studentName,
    age: studentAge,
};

console.log(obj);

//? Case 3 :
var sname = "Aman";
var age = 22;

var obj = {
    sname,
    age,
};

console.log(obj);

