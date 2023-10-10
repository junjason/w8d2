function range(start, end, result =[]) {
    // Base case: If start is greater than end, return an empty array.
    if (start > end) {
      return result;
    }
    result.push(start);
    return range(start + 1, end, result);
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
        return [1];
    }
    if (n === 2) {
        return [1,1]
    }
    mem = fibonacci(n-1);
    mem.push(mem[mem.length-1] + mem[mem.length-2]);
    return mem;
}
const result = fibonacci(6);
console.log(result);

function deepDup