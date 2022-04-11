# BINARY SEARCH

## Description
Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n). 

**Binary Search Algorithm: The basic steps to perform Binary Search are:**

- Begin with an interval covering the whole array.
- If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.
Otherwise, narrow it to the upper half.
- Repeatedly check until the value is found or the interval is empty.

**Step-by-step Binary Search Algorithm: We basically ignore half of the elements just after one comparison.**

- Compare x with the middle element.
- If x matches with the middle element, we return the mid index.
- Else If x is greater than the mid element, then x can only lie in the right half subarray after the mid element. So we recur for the right half.
- Else (x is smaller) recur for the left half.