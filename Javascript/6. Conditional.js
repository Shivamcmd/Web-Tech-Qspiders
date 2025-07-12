 //* used to check the condition to perform a specific task.
 
 //* 1. if condition
 let aayu=18;

if (aayu >= 18) {
  console.log("You can vote!");
}

 //* 2. if-else condition
let score = 17;

if (score >= 18) {
  console.log("You win!");
} else {
  console.log("You not win.");
}

 //* 3. if else-if else condition
let marks = 60;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}

 //* 4. Nested if condition
let yourage = 20;
let hasVoterID = false;

if (yourage >= 18) {
  if (hasVoterID) {
    console.log("You can vote!");
  } else {
    console.log("You need a voter ID to vote.");
  }
} else {
  console.log("You are too young to vote.");
}

//* 5. Switch condition
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;

  case "Friday":
    console.log("Weekend is coming!");
    break;

  case "Sunday":
    console.log("Relax day");
    break;

  default:
    console.log("Just another day");
}

