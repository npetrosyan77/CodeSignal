//Given an array of integers, find the pair of adjacent elements
// that has the largest product and return that product.

function solution(inputArray) {
    let productArray = [];
    for(let i =0; i<inputArray.length-1; i++){
        productArray.push(inputArray[i] * inputArray[i+1]);
    }

    let maxProduct = productArray[0];
    for (let i = 0; i < productArray.length; i++) {
        if (maxProduct < productArray[i]) {
            maxProduct = productArray[i];
        }
    }
    return(maxProduct)
}
