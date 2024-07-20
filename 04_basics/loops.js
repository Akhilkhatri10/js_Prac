//-------------------------for-of loops-----------------------
// const arr = [1,2,3,4,5]
// for (const val of arr) {
//     console.log(val);
// }

// const greetings = "hello viewers"
// for (const greet of greetings) {
//     if(greet === " "){
//         console.log("--------------------")
//     }
//     else{
//         console.log(`character is ${greet}`)
//     }
// }

//---------------Maps----------------(contain unique values)
// const map = new Map()
// map.set("IN", "India")
// map.set("AUS", "Australia")
// map.set("FR", "France")

// // console.log(map);

// for (const [key, value] of map) {
//     console.log(`${key} = ${value}`);
// }


//---------------------------for-in loop-----------------------
// const myObj = {
//     js: "javascript",
//     cpp: "c++",
//     py: "python",
//     dj: "django"
// }

// for (const key in myObj) {
//     console.log(myObj[key]);
// }


//----------------------------foreach loop-------------------------------
// const coding = ["js", "python", "java", "ruby", "ML"]
// coding.forEach((key, index, arr) => {
//     console.log(key, index, arr);
// })


// const myCoding = [
//     {
//         langName: "javascript",
//         langFileName: "js"
//     },
//     {
//         langName: "java",
//         langFileName: "java"
//     },
//     {
//         langName: "python",
//         langFileName: "python"
//     }
// ]

// myCoding.forEach((item) => {
//     console.log(item.langName);
//     console.log(item.langFileName);
//     console.log("------------");
// })



//----------------Higher Order Functions(map, filter, reduce)-------------------------------

//------------filter-----------------
// const nums = [1,2,3,4,5,6,7,8,9]
// console.log(nums.filter( (num) => num > 5 ))

// ------------map------------------
// console.log(nums.map((num) => num+=10))

//-------------reduce---------------
// const nums = [1,2,3]
// const total = nums.reduce((acc,currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// },0)
// console.log(total);