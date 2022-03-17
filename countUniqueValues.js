// implement a function which accepts sorted array and count unique values in the array.
// their can be negative number in the array but it will be always in sorted order

// input: [1,2,2,2,3,5,7,1] 
// output: 5
//  explaination: in the given array if we check the unique values results n 5 , we do not have to count repetative values.

// Time complexity of this is O(n)
function countUniqueValues(arr){
    if(arr.length ===0) return 0;  //check if arr ka length ==0 so simply return 0 i.e, if array is empty return 0
   var i=0 //pointer1

    for(var j=1; j< arr.length; j++) //looping over pointer2 (i.e, j)
    {
        if(arr[i]!== arr[j]){ //checking if both pointer doesn't match so increament i
            i++;
            arr[i]= arr[j];  //and value of arr[j] transfers to arr[i]
            // console.log(arr[i]);
        }
        // console.log(i,j)
    }
    return i+1; 
}
console.log(countUniqueValues([1,2,2,5,7,8,8,99]))