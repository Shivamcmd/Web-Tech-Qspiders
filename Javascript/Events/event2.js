let body=document.body;

let h1=document.createElement("h1");
h1.innerHTML="i am h1 tag";

body.appendChild(h1);

console.log(h1);

h1.onclick=function(){
    console.log("i am function 1")
};

h1.onclick=function(){
    console.log("i am function 2")
};
console.log(h1.onclick);

//* =================================

let btn = document.createElement("button");
btn.innerHTML="click here";
body.appendChild(btn);

btn.onmouseover=function(event){
    alert("hello user,dont touch me");
    console.log(event);
};

//* ===========================

let userName=document.getElementsByName("userName")[0];
console.log(userName);

userName.onchange=function(event){
    console.log("user name is changing");
    console.log(event);
     console.log(event.target.value);
};

let form=document.querySelector("form");
console.log(form);

form.onsubmit=function(e){
    e.preventDefault(); //it will remove the default behaviour of submit.
    console.log(e);

    //alert("form submitted");
    console.log("for submitted");

    let userName=document.getElementsByName("userName")[0].value;
    let userEmail=document.getElementsByName("userEmail")[0].value;
    let userPassword=document.getElementsByName("userPassword")[0].value;

    console.log({
      userName:userName,
      userEmail:userEmail,
      userPassword:userPassword,
    });
};