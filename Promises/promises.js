const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is completed")
        resolve()
    }, 1000);
})

promiseOne.then(() => {
    console.log("Promise Consumed")
})

//--------------------------------------------------------------------------------------------------
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is completed")
        resolve()
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved")
})

//--------------------------------------------------------------------------------------------------

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: 'aman', email: 'aman@example.com'})
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
})

//--------------------------------------------------------------------------------------------------

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: 'abhilash', email: 'sachivji@example.com'})
        }
        else{
            reject('ERROR: Something is wrong')
        }
    }, 1000);
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((myusername => {
    console.log(myusername);
}))
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log('this promise is either resolved or rejected');
})

//--------------------------------------------------------------------------------------------------

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: 'raftaar', email: 'rapper@example.com'})
        }
        else{
            reject('ERROR: Something is wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

//--------------------------------------------------------------------------------------------------

// async function getAllusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E:', error);
//     }
// }

// getAllusers()

fetch('https://api.github.com/users/Akhilkhatri10')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

