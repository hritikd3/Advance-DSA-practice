// problem no- 881 : https://leetcode.com/problems/boats-to-save-people/

// Two pointer approach
// Time complexity Object(nlog(n)), space O(1)


// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)

function numRescueBoats(people, limit){
    // first of all we need to sort the array
    people.sort((a,b)=>a-b);
//   define boats 
    let boats=0;
    // define pointers left and right 
    let left=0;  //left=0 means its starts from  first position (least weight)
    let right=people.length-1 // for last index ( highest weight)

    while(left <=right){
        boats++;
 
        //if the least weight weight + highest  weight <= given limit so
        if(people[left]+people[right] <=limit){
            //we increament our least person by 1
            left++;
        }
        // else decrease the highest person 
        right--;
    }
    return boats
}

let people=[3,2,2,1];
let limit=3;
console.log(numRescueBoats(people,limit))