
//* node.addEventListener("eventName", callback , useCapture);

let body = document.body;

//! example 1 
let h1 = document.createElement("h1");
h1.innerHTML = "I am h1 tag ";

body.appendChild(h1);

h1.addEventListener("mouseover", () => {
console.log("I am from mouseover event");

h1.style.cssText += 
`color: blue`;
});

h1.addEventListener("click", () => {

    h1.style.cssText +=
    `text-align:center`;
});

//! example 2

let students = [
    {
        sname:"shivam",
        course: "java full stack",
        location:"faridabad"
    },
    {
        sname:"dhruva",
        course: "mern  full stack",
        location:"faridabad"
    },
    {
        sname:"Rangareddy",
        course: "python full stack",
        location:"faridabad"
    },
    {
        sname:"Jagannath",
        course: "java full stack",
        location:"faridabad"
    },
];

let btn = document.createElement("button");
btn.innerHTML = "get student details";

body.appendChild(btn);

btn.addEventListener("click", () => {
students.map(student => {
    let p = document.createElement("p");

    p.innerHTML = `
    <b> Name: $(student.sname) </b>
    <i> Name: $(student.course) </i>
    <i> Name: $(student.skills) </i>
    `;
    body.appendChild(p);
})
    
})

//! example 3
// let user_name = document.getElementById("user_name");
// console.log(user_name);

// user_name.addEventListener("focus", () =>{
// user_name.style.cssText += 
// ` border: 2px solid red;
//   outline:2px solid red;
//   border-radius: 10px
// `;
// });

// user_name.addEventListener("blur", () => {
//     user_name.style.cssText = ``;
// });

//! example 4
let scrollInfo = document.getElementById("scrollInfo");

window.addEventListener("scroll", () => {
    console.log("scrolling");
    console.log("window.scrollX");
    console.log("window.scrollY");

    scrollInfo.innerHTML = `scroll x :${Math.trunc(scrollX)}px , 
   scroll y :${Math.trunc(scrollY)}px`;
});