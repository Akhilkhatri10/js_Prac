/* one way to declare function
function addOne(num){
    return num + 1;
}
console.log(addOne(5)) */


/* another way to declare function by holding it in a variable(in js variables can hold anything )
const x = function addTwo(num){
    return num + 2;
}
console.log(x(3)); */

/* this keyword(used to refer current context)
const user = {
    username: "mohan",
    userid: 234,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to your new job`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "ram"
// user.welcomeMessage()

console.log(this); //this will give an empty object because here the global object is node unlike browser where the global object is the window object  */


/* arrow functions
const arrow = () => {
    console.log("An arrow func")
}
arrow() */

//IIFE - Imediately Invoked Function Expression(used to immediately execute a function)
(arrow = () => {
    console.log("An arrow func")
})();

//similarly it can be written like this 
(() => {
    console.log("An arrow func")
})()

//it is simple like any other function call like this (function)().
//when to IIFEs are used in the code, always seperate them with a semicolon otherwise it will give an error

