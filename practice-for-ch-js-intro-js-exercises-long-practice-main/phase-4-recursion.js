function range(start, end) {
    // Base case: If start is greater than end, return an empty array.
    if (start > end) {
      return [];
    }
    let result = [];
    result.push(start);
    return result.concat(range(start + 1, end));
}
  
// Example usage:
// const result = range(2, 7);
// console.log(result); // Output: [1, 2, 3, 4, 5]


function sumRec(arr) {
    if(arr.length === 0){
        return 0;
    }
    let sum = arr[0];
    return sum + sumRec(arr.slice(1));
}
// const result = sumRec([1, 2, 3, 4, 5]);
// console.log(result);

function exponent(base, exp) {
    if (exp === 0){
        return 1;
    }
    return base * exponent(base, exp-1);
}
// const result = exponent(2,4);
// console.log(result);

function fibonacci(n) {
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0,1];
    }
    mem = fibonacci(n-1);
    mem.push(mem[mem.length-1] + mem[mem.length-2]);
    return mem;
}
// const result = fibonacci(6);
// console.log(result);

// function deepDup

function deepDup(arr) {
    if (Array.isArray(arr)) {
      // If the input is an array, create a new array to hold the copied elements.
      const copy = [];
      for (const element of arr) {
        copy.push(deepDup(element)); // Recursively copy each element.
      }
      return copy;
    } else {
      // If the input is not an array (e.g., it's a primitive value), return it as is.
      return arr;
    }
  }
  
//   // Example usage:
//   const originalArray = [1, 2, [3, 4, [5, 6]]];
//   const duplicatedArray = deepDup(originalArray);
  
//   console.log(originalArray); // Original array
//   console.log(duplicatedArray); // Deep copy of the original array

function bsearch(arr, target) {
    if (arr.length === 0) {
        return -1;
    }

    const mid = Math.floor(arr.length / 2);
    if (arr[mid] === target) {
        return mid;
    } 
    else if (target < arr[mid]) {
        return bsearch(arr.slice(0, mid), target);
    }
    else {
        const result = bsearch(arr.slice(mid+1), target);
        // debugger
        if (result === -1) {return -1;}
        else {return mid + 1 + result;}
    }
}
  
// let arr = [0,1,2,3,4,5,6,8,9];
// let index = bsearch(arr, 3);
// let index2 = bsearch(arr, 9);
// let index3 = bsearch(arr, 7);
// console.log(index);
// console.log(index2);
// console.log(index3);

function mergesort(arr) {
    



}