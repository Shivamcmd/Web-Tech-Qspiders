// ! ========== Object Method ==============
/**
 * Methods we can apply only for objects.
 * Keys
 * values
 * entries
 * hasOwnProperty
 * assign
 * create
 * freeze
 */

var obj = {
  sname : "Rohit" ,
  age : 20,
  course : "React Js"
};

console.log(obj);

// * Object.keys(objName);

console.log(Object.keys); // it wll retuirm a method which is availabke in the inbuilt object.
// This method requires an object as parameter.
// It will return only the keys.

console.log(Object.keys(obj));

// * Object.values(objName);
console.log(Object.values); 
// it wll retuirm a method which is availabke in the inbuilt object.
// This method requires an object as a parameter.
// It will return only the values

console.log(Object.values(obj));

// * Object.entries(objName);
console.log(Object.entries);
  // it wll return a method which is availabke in the inbuilt object.
// This method requires an object as a parameter.
// It will return only the values and the keys

console.log(Object.entries(obj));

// * ObjectName.hasOwnProperty(keyName) -----> boolean
/* checks if it present or not */
console.log(obj.hasOwnProperty("sname")); // true
console.log(obj.hasOwnProperty("ename")); // false
console.log(obj.hasOwnProperty("address")); // false
console.log(obj.hasOwnProperty("age")); // true
console.log(obj.hasOwnProperty("course")); // true

// * Object.assign(obj1 , obj2 , obj3 ..... objn);
/* merges two or more objects into 1
{}, all object store in this , so obj1 will not change */
var obj1 = {
  sname : "Ankit",
  age : 20,
  course : "Java Full-stack",
};

var obj2 = {
  address : "Delhi",
  college : "IITM"
}

var obj3 = {
  isPlaced: true,
  course: "Data science",
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

var mergeObj = Object.assign ({}, obj1 , obj2 , obj3);

console.log(mergeObj);

// * ==== Object.create ======== 
var person = {
  personName : "Personnnnnnnn",
  getPersonName : function(){
    return `${this.personName}`
  } ,
};

var employee = Object.create(person);
employee.name = "enameeeeee ";
employee.age = 20;
employee.salary = 50000;
console.log(employee);

console.log(employee.personName);

var e = Object.create(employee);
e.address = "Delhi";
e.college  = "xyz";

console.log(e.address);
console.log(e.personName);
console.log(employee.personName);
console.log(e);

// * Object.freeze(objName);
/* it just freezes the object , no changes can happen */
var obj = {
  sname : "Ankit" , 
  age : 20,
  course : "java full--stack"
}
Object.freeze(obj);

obj.sname = "Aman";
console.log(obj);

obj.age = 60;
obj.sname ="Ravan";
console.log(obj);

//no changes 



