//write a function called sumZero which accepts a sorted array of ineteger. 
//The function should find the first pair where the sum is 0. Return an array which includes both values that sum to zero else return undefined if a pair doenot exist.

//for exmaple : [-3,-2,-1,0,1,2,3] ans-> [-3,3] bec their sum results in 0
// example: [-2,0,1,3]  and-> undefined bec -2+3= 1 which != 0

// This is the naive approach gives the O(n^2)
function sumZero(arr){
    // we will interate over first index
    for(let i=0;i<arr.length; i++){
        // meanwhile checks the rest array(thatswhy we did j=i+1) that any element in array matches with first index which gives addition to zero
        for(let j=i+1;j< arr.length; j++){
            //if sum results in zer0 -3+3=0
            if(arr[i] + arr[j] ===0){
                // return that element [-3,3]
                return (arr[i], arr[j])
            }
        }
    }
}
sumZero([-3,-2,-1,0,1,2,3])