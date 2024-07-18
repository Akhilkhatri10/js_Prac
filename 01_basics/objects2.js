/* singleton object creation
const flipkart = new Object()
flipkart.id = 1
flipkart.userName = "rahul" */


/*nesting can be done in objects also
const amazon = {
    name: "raju",
    fullname: {
        firstName: "rohan",
        lastName: "rastogi"
        //another object can also be nested inside this fullname similarly
    }
}

console.log(amazon.name);
console.log(amazon.fullname);
console.log(amazon.fullname.firstName); */

/* object concatenation through assign
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2, obj3)
console.log(obj5); */

/*object concatenation through spread
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

const obj4 = {...obj1, ...obj2}
console.log(obj4); */

/* some object methods
const flipkart = new Object()
flipkart.id = 1
flipkart.userName = "rahul" 

console.log(flipkart)
console.log(Object.keys(flipkart));
console.log(Object.values(flipkart));
console.log(flipkart.hasOwnProperty('isLoggedIn'))
console.log(flipkart.hasOwnProperty('userName')) */

// object de-structuring 
const course = {
    courseName: "JS world",
    price: 499,
    courseInstructor: "Abhishek Walia"
}

const {courseInstructor: ci} = course
console.log(ci);