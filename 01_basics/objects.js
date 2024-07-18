//objects -> two ways to create 
//1. Singleton (object creation through constructor)
// ex -> (Object.create)

//2. object literals

// const myUser = {
//     name: "Sachin",
//     "full name": "Sachin Tendulkar",
//     age: 25,
//     location: "UP",
//     email: "abc@gmail.com",
//     isLoggedIn: false
// }

//how to use symbol datatype as a key in object
const mySym = Symbol("key1")


const myUser = {
    name: "Sachin",
    "full name": "Sachin Tendulkar",
    age: 25,
    //mySym: "mykey1",
    [mySym]: "myKey1",
    location: "UP",
    email: "abc@gmail.com",
    isLoggedIn: false
}

/*a simple way to access object key
 console.log(myUser.name);*/

/*console.log(myUser[name]);  this will give error because "name" key is treated as a string. To solve this we use below syntax
console.log(myUser["name"]);*/

/* the way to access full name key is this 
console.log(myUser["full name"]);*/

/*how to use symbol datatype as a key in object
// console.log(typeof myUser.mySym]);   this will be of String datatype and not Symbol
console.log(myUser[mySym]); //now mySym will act as a key of Symbol datatype */

/*to freeze an object so that nobody will be able to make changes in our object we use freeze method
Object.freeze(myUser)
//now if we make changes to object , it will not affect the object 
//ex -> myUser.name = "rahul dravid"
console.log(myUser); */

myUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(myUser.greeting);
console.log(myUser.greeting());