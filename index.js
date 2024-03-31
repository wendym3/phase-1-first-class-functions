function receivesAFunction(codingInJs) {
  codingInJs();
}

function loveCodingInJs() {
    console.log("This is my codingInJs function.");
}
receivesAFunction(loveCodingInJs);



function returnsANamedFunction() {
   
    function codeWithJs() {
        console.log("This is how to code with Js");
    }
    return codeWithJs; 
}


let myFunction = returnsANamedFunction();

myFunction();


function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function");
    };
}
let anonymousFunc = returnsAnAnonymousFunction();

anonymousFunc();

