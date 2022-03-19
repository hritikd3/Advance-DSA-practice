const demo=(arr,func) =>{
    while(arr.length > 0 && func(arr[arr.length-1]))
        arr=arr.slice(0,-1)
    return arr;
}
console.log(demo([2,3,4,5],n=> n<3))

// function outer(f=inner()){
// function inner() {
//      return 'inner'
// }
//  outer();
// }