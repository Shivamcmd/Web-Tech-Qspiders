function fun1(){
    console.log("I am the  function 1")
}

let demo = document.getElementById("demo")
function fun2() {
 console.log("I am the  function 2")
 demo.style.cssText = 
 `color: white ;
 background:brown;`
}

function fun3(){
    console.log("I am function 3")
    // demo.style.cssText=
    // ``;
}

//!======================================= //

let productContainer = document.getElementById("productContainer")
console.log("productContainer")
productContainer.style.cssText = 
`border: solid red;`

function addProduct(){
 console.log("i am from add product")
let article = document.createElement("article")
article.style.csstext= 
`height:300px;
 width: 250px;
 border: solid blue;
`
productContainer.appendChild(article)
}