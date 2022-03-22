// Refer ques from here:-
// https://leetcode.com/problems/linked-list-cycle/

// Input: head = [3,2,0,-4], pos = 1
// Output: true
 // Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).


//  solution- time complexity O(n)

const hasCycle = (head) => {
  let fastPtr = head;
  while (fastPtr && fastPtr.next) {
    head = head.next;
    fastPtr = fastPtr.next.next;
    if (head === fastPtr) return true;
  }
  return false;
};


// // understanding:-
// We just need to follow the strategy above - make a slower pointer and a faster pointer. Then we loop and loop again:

// if the fast pointer catch up with slow pointer, then it's a circular linked list
// if the fast pointer get to the end, then it's not a circular linked list