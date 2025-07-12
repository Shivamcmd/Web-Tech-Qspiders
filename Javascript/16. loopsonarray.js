//! ======== Loops on Arrray ========== //
/* To iterate over an array we having.              */

/*// * for of //
// it will iterate on values 
// syntax: for ( let i of collections) {----} */

var ar = [23 , 34 , 56 , 34 , 68]
for (let i of ar){
     console.log(i);
}

var ar = ["ramu" , "shyamu", "neta" , "abhineta"]
for (let i of ar){
     console.log(i);
}

// * for in //
// it will iterate on indexes
// syntax: for ( let i in collections) {----}

var ar =[23 , 34 , 56 , 34 , 68]
for (let i in ar){
     console.log(i);
}

var ar =["ramu" , "shyamu", "neta" , "abhineta"]
for (let i in ar){
    console.log(i);
}

//* foreach()
// higher order function(which accepts another function as argument.)
// it will iterate on both indexes and values
// it require callback functions with 2 parameters(values,indexing)

ar.forEach((val,ind) => {
    console.log(val,ind);
});



