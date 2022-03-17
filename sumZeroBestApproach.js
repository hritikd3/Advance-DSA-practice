//write a function called sumZero which accepts a sorted array of ineteger.
//The function should find the first pair where the sum is 0. Return an array which includes both values that sum to zero else return undefined if a pair doenot exist.

//for exmaple : [-3,-2,-1,0,1,2,3] ans-> [-3,3] bec their sum results in 0
// example: [-2,0,1,3]  and-> undefined bec -2+3= 1 which != 0

// This can be the best aproach whhich gives O(n) as time comp

function sumZero(arr) {
  // we will start with very first pointer so
  let left = 0;
  // the end pointer will be
  let right = arr.length - 1;
  
}
