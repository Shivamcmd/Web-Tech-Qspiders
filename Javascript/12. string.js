              // ! === String ===
//* string is collection of characters which
//* are enclosed in  "", '', ``
 
//^   for example : 
var s = "javascript";
var s = 'java shava';
var s = `javass`;
console.log(s);

//? String Interpolation:
//* process of accessing variables in a string

//^ for example:
var Ename = "shiva";
var sal = 5000000;

console.log(`Dear ${Ename} , your salary is ${sal}`);
//& here we have to use backticks (``) only.

//? Length Property :
//* help to find collection length

var s = "length";
console.log(s);
console.log(s.length);

      //!===== STRING METHODS =======
/* 
toLowerCase(), toUpperCase(), toString(), trimStart(),
trimEnd(), trim(), replace(), replaceAll(), substr(),
subString(), slice() , split(), concat(), indexof(),
lastIndexof() , includes(), charAt(), charCodeAt(),
String.fromCode()
*/

var p = "Web TECHNOLOGIES";
console.log(p);

//? toLowerCase()
//* convert characters into lowercase.
console.log(p.toLowerCase());

//? toUpperCase()
//* convert characters into Uppercase.
console.log(p.toUpperCase());

//? toString()
//* convert datatype into string format.
var p = 10;  
console.log(p);        
console.log(typeof p);        // number

var t = p.toString();
console.log(t);
console.log((typeof t)); //string

//? trimStart(), trimEnd(), trim():
//* this remove unwanted space from a string at 
//* initial/starting positions.

var s = "     Javascript       ";
console.log(s);  //"_____Javascript_____"
console.log(s.length);  //22

console.log(s.trimStart());  //"JavaScript________"
console.log(s.trimStart().length);  //15

console.log(s.trimEnd());  //"________JavaScript"
console.log(s.trimStart().length);  //15

console.log(s.trim());  //"JavaScript"
console.log(s.trim().length);  //10

//? replace ();
//* replace first matching character with new character in string 
//* syntax: varName.replace("existingChar", "newChar");

var s = "Hi buraahh";
console.log(s.replace("Hi", "bye")); //bye buraahh

//? replaceAll()
//* replace all matching characters with new string 
//* syntax: varName.replaceAll("existingChar","newChar");

var s = "hlo hlo";
console.log(s.replaceAll("hlo", "bye")); //bye bye

//? substr():
//* extract subpart of string 
//* syntax: varName.substr(SI, length);

var s = "I love the world";
console.log(s.substr(2,14));

//? substring():
//* extract subpart also (here SI and EI followed).
//* syntax: varName.substring(SI, EI);

var s = "I love the world";
console.log(s.substring(2,6));

//? slice():
//* extract the subpart of string.
//* similar to substring() method.

var s = "I love the world";
console.log(s.slice(2,6));

//? split ():
//* convert the string into array based parameter.
 
var s = "I love the world";
console.log(s.split(" ")); // ["I", "Love", "javascript"];

var s = "I$love$the$world";
console.log(s.split("$")); // ["I", "Love", "javascript"];

//? concat():
//* merge 2 or more string into newString

var first = "Banaras";
var second = "Hindu";
var third = "University";

console.log(first + " " + second + " " + third); //BHU
console.log(first.concat(" ", second , " ", third)); //BHU

//? indexof():
//* return the index value of character(first matching)

var s = "Javascript";
console.log(s.indexOf("a")); //1

//? lastindexof():
//* return index value of character(last matching)

var s = "Javascript";
console.log(s.lastIndexOf("a")); //3

//? includes():
//* if character is present or not then it will return boolean value
var s = "Javascript";
console.log(s.includes("a")); //true
console.log(s.includes("k")); //false

//? charAt():
//* return the character present at the specific index position.
var s = "Javascript";
console.log(s.charAt(5)); //s

//? charCodeAt():
//* return the character ASCII code present
//* at specific index position
//* convert char to ASCII

var s = "Javascript";
console.log(s.charCodeAt(5)); //99

//? String.fromCharCode():
//* used to convert ASCII to char 

var s = "Javascript";
console.log(String.fromCharCode(70)); //F







