// 1. The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
// 2. The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data


function job() {
    return new Promise((resolve, reject) => {
        console.log('hello  world')
        resolve()
    }, 2000);
}
module.exports = job;



//Modify the code below based on the following rules:

// Function must always return a promise
// If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

//1
function job(data) {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number') {
            reject("error")
        } else if (data % 2 !== 0) {
            setTimeout(() => {
                resolve("odd")
            }, 1000)
        }
        else if (data % 2 === 0) {
            setTimeout(() => {
                reject("even")
            }, 2000)
        }
    })
}

module.exports = job;

//2
function job(data) {
    return new Promise((resolve, reject) => {
        if (isNaN(data) === true) {
            reject("error")
        } else if (data % 2 !== 0) {
            setTimeout(() => {
                resolve("odd")
            }, 1000)
        }
        else if (data % 2 === 0) {
            setTimeout(() => {
                reject("even")
            }, 2000)
        }
    })
}

module.exports = job;