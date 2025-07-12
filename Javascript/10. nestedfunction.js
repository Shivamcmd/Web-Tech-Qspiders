// ! ============ Nested Functions ============= ! //
// A function inside another function is called nested function

console.log("Start");

var a = 10;        // basic I/O
var b = 20;
let c = 40;
console.log(a+b+c);

function greet(){        //parent function
  var sname = "Ketan";
  var course = "PFS"
  var age = 20;
  var address = "Delhi";

  function printMessage(){  // child function
    var skills = "Python";

    var message = "hello" + sname +" You have Opted for "+course +" because of your skills is "+skills;

    return message;
  }

  return printMessage();
}

console.log(greet());
console.log("end");