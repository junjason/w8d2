// Your code here
Array.prototype.bubbleSort = function() {
    let sorted = false;
    while(!sorted) {
        sorted = true;
        for(let i = 0; i < this.length-1; i++) {
            if (this[i] > this[i+1]) {
                sorted = false;
                let temp = this[i+1];
                this[i+1] = this[i];
                this[i] = temp;
                // this[i], this[i+1] = this[i+1], this[i]
                // swap(this[i], this[i+1])
            }
        }
    }
};

let arr = [5,4,3,2,1];
console.log(arr);
arr.bubbleSort();
console.log(arr);

String.prototype.substrings = function() {
    const result = [];
    const str = this;
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length+1; j++) {
        result.push(str.slice(i, j));
      }
    }
  
    return result;
  };
  
  // Example usage:
  const inputString = "hello";
  const substringArray = inputString.substrings();
  console.log(substringArray);
  