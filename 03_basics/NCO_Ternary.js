//falsy values = false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values = true, "0", 'false', " ", [], {}, function(){}

//Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10
// console.log(val1);

// val1 = null ?? 10
// console.log(val1);

// val1 = undefined ?? 10
// console.log(val1);

// val1 = null ?? 10 ?? 20
// console.log(val1);


//ternary operator
//condition ? true : false

const price = 310
price <300 ? console.log("less than 300") : console.log("greater than 300")