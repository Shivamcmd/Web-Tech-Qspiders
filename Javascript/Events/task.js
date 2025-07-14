// ! task 1:
/* 
-What is Event Propagation
-How many phases are there?
-What is Event Capturing?
-What is Event Bubbling?
*/

//! task 2:
// red, orange, yellow, green, blue, indigo and violet.

// //? Creating Tags
// let section = document.createElement ("section");

// let red = document.createElement("div");
// let orange = document.createElement("div"); 
// let yellow = document.createElement("div");
// let green = document.createElement("div"); 
// let blue = document.createElement("div");
// let indigo = document.createElement("div");
// let violet = document.createElement("div");

// //? append 
// document.body.appendChild(section);
// section.append(red, orange, yellow, green, blue, indigo, violet);

// //? css
//  section.style.cssText = `
//  // border: solid red;
//  height:100vh;
//  display:flex;
//  `;

//  red.style.cssText = `flex:1;`; 
//  orange.style.cssText = `flex:1;`;
//  yellow.style.cssText = `flex:1;`; 
//  green.style.cssText = `flex: 1;`; 
//  blue.style.cssText = `flex: 1;`;
// indigo.style.cssText = `flex: 1;`; 
// violet.style.cssText = `flex: 1;`;

// // add Event Listeners
// red.addEventListener("mouseover", () => { 
//     red.style.cssText += `background:red`;
// });

// red.addEventListener("mouseout", () => { 
//     red.style.cssText += `background:white`;
// });

// orange.addEventListener("mouseover", () =>
// {
// orange.style.cssText += 
// `background:orange`;
// });

// orange.addEventListener("mouseout", () =>
//      { orange.style.cssText += 
//         `background: white`;
// });

// yellow.addEventListener("mouseover", () =>
// {
// yellow.style.cssText +=
// `background: yellow`;
// });

// yellow.addEventListener("mouseout", () => 
// {
// yellow.style.cssText += 
// `background: white`;
// });

// green.addEventListener("mouseover", () => 
// {
// green.style.cssText += 
// `background:green`;
// });

// green.addEventListener("mouseout", () => 
// {
// green.style.cssText += 
// `background:white`;
// });

// blue.addEventListener("mouseover", () => 
// { blue.style.cssText +=
//      `background:blue`;
// }); 

// blue.addEventListener("mouseout", () =>
// { blue.style.cssText += 
// `background:white`;
// });

// indigo.addEventListener("mouseover", () => 
// { indigo.style.cssText +=
//      `background:indigo`;
// }); 

// indigo.addEventListener("mouseout", () =>
// { indigo.style.cssText += 
// `background:white`;
// });

// violet.addEventListener("mouseover", () => 
// { violet.style.cssText +=
//      `background:violet`;
// }); 

// violet.addEventListener("mouseout", () =>
// { violet.style.cssText += 
// `background:white`;
// });

//! Task 3 === 
// using loops also

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// created the section
const section = document.createElement('section');
document.body.appendChild(section);

// style for section
section.style.cssText = `
  height: 100vh;
  display: flex;
`;

// loop using for...of
for (let color of colors) {
  const box = document.createElement('div');
  section.appendChild(box);

  // style for the each box
  box.style.cssText = `flex:1;
  border:red;`
  ;

  // add events to the section 
  box.addEventListener('mouseover', () => {
    box.style.background = color;
  });

  box.addEventListener('mouseout', () => {
    box.style.background = 'white';
  });
}



