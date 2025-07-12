// ! objects :
/**
 * we can create an object in 3 ways
 ** object literals
 ** new keyword
 ** constructor function
 */

// ? 1. Object literals
// we have to use object literals/sign for creation object.
var obj = {
  sname : "Professor",
  age : 30,
  course : "JFS"
};
console.log(obj);

// ? 2. new Keyword
// Here we will create an instance of inbuilt Object
var x = Number();
console.log(x);

var x = String();
console.log(x);

var x = Array();
console.log(x);

var obj1 = Object();
console.log(obj);

obj1.sname = "Gautam";
obj1.course = "Java full-stack";
console.log(obj1);

var obj2 = Object({address:"haryana" , street : "XYZ"});
console.log(obj2);

obj2.age = 20;
console.log(obj2);

// ? Constructor function

// ^ ==== Before es6 =====
/*
function functionName(params){
  this.keyName = param1;
  this.keyName = params2;
  this.keyName = param3;
  this.keyName = params4;
  ...
  this.keyName = paramsN;


}

 new Functionname(args);
 new fiunxtionName(args);
*/

// & Case 1 : 

function student(sname , course , age , ratings){
  console.log(sname);
  console.log(course);
  console.log(age);
  console.log(ratings);

  // this ====== s1
  // s1.sname ========  this.sname;

  this.sname = sname;
  this.age = age;
  this.course = course;
  this.ratings = ratings;
  this.ratings = ratings == undefined ? "remoker" : ratings;
  this["address"] = "Delhi";
  
  console.log(this);
  // "this" keyword will point to the current instance
}


let s1 = new student("Mana" , 22 , "Mern stack" , "1")
console.log(s1);
s1.name = "Aman";

let s2 = new student("Gautam" , 24 , "Javafull stack" , "1")
console.log(s2);
s1.name = "Gautam";


let s3 = new student("Govind" , 22 , "Javafull-stack" , "4")
console.log(s3);
s1.name = "Gautam";

// & Case 2

function student1(sname , age , course , joiningMonth)
{
  console.log(this);
  this.sname = sname;
  this.age = age;
  this.joiningMonth = joiningMonth;

  this.getName = function(){
    return `Hello user , your name is registered as ${this.name}`
  }

  this.getJoiningMonth = function ()
 {
  return `Your joining Month is ${this.joiningMonth}`
 }

 console.log(this);

}

let s6 = new student1("harsh" , 20 ,"MERN Stack" , "May");
console.log(s6.sname); // harsh
console.log(s6.course); // 20
console.log(s6.getName); // whole function
console.log(s6.getName());


let s4= new student1("Rohit" , 22 , "Java Full-stack" , "March")
console.log(s4.getJoiningMonth);
console.log(s4.getJoiningMonth());

let s5 = new student1("Mohit" , 24 , "Python Full-stack" ,"June");

// case 3

function Bank(balance){


   this.balance = balance;
  //  this.amount = amount;


   this.showBalance = function() {
    return `Hello customert your current balance is ${ this.balance}`;
    // this.keyName , It will refers to the current object,s property
    // keyNamr , it will refers to the parameter
   };


    this.deposit = function(amount){
    this.balance += amount;
     return `You Withdrawl amount is : ${amount} , and total balance is : ${this.balance}`
   }
}

let user1 = new Bank(8000);
console.log(user1);

let user2 = new Bank(8000);
console.log(user2)
console.log(user1.showBalance);
console.log(user1.showBalance()); // 8000
console.log(user2.deposit); 
console.log(user2.deposit(200));
console.log();



// ^ ====== After es6 ===========

class Employee {
  constructor(name , designation , sal){
    this.name = name;
    this.designation = designation;
    this.sal = sal;
  }
  getEmployeeName(){
    return `Employee name is ${this.name}`
  }

  getSalary(){
    return `Employee salaries is : ${this.sal}`
  }

  Incentives(bonus){
    return `Hello your sal is ${this.sal} and incentive is ${this.Incentives} , you got money
    ${this.sal + bonus }`
  }
}

let e1 = new Employee("Shivam" , "Frontend Developer" , 50000);
console.log(e1);
console.log(e1.getEmployeeName);
console.log(e1.getEmployeeName());
console.log(e1.getSalary());
console.log(e1.Incentives(5000));

