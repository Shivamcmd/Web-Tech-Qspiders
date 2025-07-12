// ! Id 
console.log(document);

let heading3 =document.getElementById("heading3");
console.log(heading3);
let heading4 =document.getElementById("heading4");
console.log(heading4);
let heading5 =document.getElementById("heading5");
console.log(heading5);

//! class 
let demo = document.getElementsByClassName("demo");
console.log(demo);
let demo2 = document.getElementById("demo2");
console.log(demo2);
let demo3 = document.getElementById("demo3");
console.log(demo3);

//! Tag Name 
let b = document.getElementsByTagName("b");
console.log(b);

let div = document.getElementsByTagName("div");
console.log(div);

let p = document.getElementsByTagName("p");
console.log(p);

//! Name Attribute 
let userNames = document.getElementsByName("userName");
console.log(userNames);

console.log(userNames[0]);
console.log(userNames[0].name);
console.log(userNames[0].placeholder);
console.log(userNames[0].value);

userNames[0].value = "shivam";
userNames[1].value = "sharma";

let userEmails = document.getElementsByName("userEmail");
console.log(userEmails);

userEmails[0].value= "shivamsharmaofficial09@gmail.com";
userEmails[1].value= "shivamsharmaofficial09@gmail.com";

let userPasswords = document.getElementsByName(userPasswords);
console.log(userPasswords); //array like

userPasswords[0].value = "shivamisallinone";

//demo example 
var ar = [19 , 30];
console.log(ar[0]);

var ar = [45];
console.log(ar[0]);

// ! querySelector():
// for id we use #
// for class we use .
// for tag , we use tag name.

let qsID = document.querySelector("#heading3");
console.log(qsID);

let qsClass = document.querySelector(".demo");
console.log(qsClass);

let qsTag = document.querySelector("div");
console.log(qsTag);

// ! querySelectorAll():
// for id we use #
// for class we use .
// for tag , we use tag name .

let qsoID = document.querySelectorAll("#heading3");
console.log(qsoID);

let qsoClass = document.querySelectorAll(".demo");
console.log(qsoClass);

let qsoTag = document.querySelectorAll("div");
console.log(qsoTag);

