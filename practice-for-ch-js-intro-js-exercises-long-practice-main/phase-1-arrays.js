// Your code here

Array.prototype.uniq = function() {
    // return this;
    // let unique = [];
    // for(let i = 0; i < this.length; i++) {
    //     if (!unique.includes(this[i])) {
    //         unique.push(this[i]);
    //     }
    // }
    // return unique;

    const set = new Set(this);  // set = [1,2,3]
    let unique = [];
    for (const element of set) {    // element is equal to each element in set
        unique.push(element)
    }
    return unique;
};

// const arr = [1,2,2,3,3,3];
// const unique = arr.uniq();
// console.log(arr);
// console.log(unique);

Array.prototype.twoSum = function() {
    let result = [];
    for(let i = 0; i < this.length-1; i++){
        for(let j = i+1; j < this.length; j++){
            if (this[i]+this[j] === 0){
                result.push([i,j]);
            }
        }
    }
    return result;
};

// const arr = [-1, 0, 2, -2, 1];
// const sums = arr.twoSum();
// console.log(arr);
// console.log(sums);

