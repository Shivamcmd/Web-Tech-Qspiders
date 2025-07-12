//* ======= CRUD on html tags(element) =========

//! create 
let h1 = document.createElement("h1");
console.log(h1);

//? to add content :
h1.textContent = "Hello , I am h1 tag from JS text content";
h1.innerText = "Hello , I am h1 tag from JS text content";
h1.innerHTML = "Hello , I am h1 tag from JS text content";

 //let myContainer = document.getElementById("myContainer");
 //myContainer.appendChild(h1);
 let body = document.body;
 body.appendChild(h1);

 let head = document.head;
 console.log(head);

 //? textContent vs innerText vs innerHTML
 h1.textContent = " <i> Hello , This is <u> very important </u> Class </i>";
 h1.innerText = " <i> Hello , This is <u> very important </u> Class </i>";
 h1.innerHTML = " <i> Hello , This is <u> very important </u> Class </i>";

 //! Update:
 //? content Update
 h1.innerHTML = "I am updated";

 //? Node Update
 let p = document.createElement("p");
 p.innerHTML = "I am para tag";
 console.log(p);
 console.log(h1);
 body.replaceChild(p,h1);

 //! Delete :
//  body.removeChild(p);