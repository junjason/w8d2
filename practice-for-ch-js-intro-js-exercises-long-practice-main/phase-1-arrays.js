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