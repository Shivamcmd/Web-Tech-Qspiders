let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let div = document.querySelector("div");
let input = document.querySelector("input");
let img = document.querySelector("img");


console.log(h1);
console.log(h2);
console.log(input);
console.log(img);

//! Create 
h1.setAttribute("id", "heading1");
h1.setAttribute("style", "text-align:center");
h1.setAttribute("style", "color:crimson");
console.log(h1);

h2.setAttribute("id", "heading2");
h2.setAttribute("style", "color:blue");
console.log(h2);

div.setAttribute("class", "demo demo1 demo2 demo3");
// input.setAttribute("value", "Shivam the Achiever");
img.setAttribute(
    "src", "https://cdn.pixabay.com/photo/2023/12/13/22/29/young-woman-8447841_1280.jpg"
);

img.setAttribute("height", "200px")

//! Read 
console.log(h1.getAttribute("id"));
console.log(h1.getAttribute("class"));
console.log(h1.getAttribute("src"));
console.log(h1.getAttribute("class"));

//! Update 
// same as create

//! Delete 
h1.removeAttribute("id");
h1.removeAttribute("style");
h2.removeAttribute("id");
h2.removeAttribute("style");
div.removeAttribute("class");
h1.removeAttribute("src");
h1.removeAttribute("height");

console.log(input.getAttribute("value"));







