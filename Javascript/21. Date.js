//* Date is an inbuilt object 
//* allows to access system data & time .
//* we can create custom dates and time .

//& we have to create a date object by using a new keyword. //
// let date = new Date();
// console.log(date); //^ return date acc to system 

// let nayadate = new Date("2025 june 30, 23:12:45:3456");
// console.log(nayadate); //^ it will return custom date 

//? ==== Get Methods ===
// getFullYear()
// getMoth()
// getDate()
// getDay()
// getTime()
// getHours()
// getMinutes()
// getSeconds()
// getMilliseconds()

var date = new Date();
console.log(date);
console.log(date.getFullYear());

//? ==== Set Methods ====
// setFullYear()
// setMoth()
// setDate()
// setDay()
// setTime()
// setHours()
// setMinutes()
// setSeconds()
// setMilliseconds()

var date = new Date("2024 may 21 , 22:45:34:2022");
console.log(date);  // it return custom date 

console.log(date.setFullYear(2030));
console.log(date.setMonth(6));



let x = date.setFullYear(2025,6,23);
console.log(x)
console.log(x.toLocaleDateString())




