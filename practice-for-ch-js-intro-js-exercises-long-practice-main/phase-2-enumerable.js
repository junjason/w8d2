// Your code here
Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

// let arr = [1,2,3,4];
// function print(n) {
//     console.log(n);
// }
// arr.myEach(print);

Array.prototype.myMap = function(callback) {
    // let mapped = [];
    // for(let i = 0; i < this.length; i++) {
    //     mapped.push(callback(this[i]));
    // }
    // return mapped;

    //myEach version
    let mapped = [];
    this.myEach(function(element) {
        mapped.push(callback(element));
    });
    return mapped;
};

// let arr = [1,2,3,4];
// function double(i) {
//     return i*i;
// }
// let doubled = arr.myMap(double);
// console.log(doubled);

Array.prototype.myReduce = function(callback, initialValue) {
//     let i = 0;
//     if (!initialValue) {
//         initialValue = this[0];
//         i++;
//     }
//     let acc = initialValue;
//     for (; i < this.length; i++) {
//         acc = callback(acc, this[i]);
//     }
//     return acc;

    let i = 0;
    if (!initialValue) {
        initialValue = this[0];
        i = 1;
    }
    let acc = initialValue;
    this.myEach(function(element) {
        acc = callback(acc, element);
    });
    if (i == 1) {
        acc -= initialValue;
    }
    return acc;
}

let arr = [1,2,3];
function add(num1, num2) {
    return num1+num2;
}
let result = arr.myReduce(add);
let result2 = arr.myReduce(add, 25);
console.log(result);
console.log(result2);