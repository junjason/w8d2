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
    let mapped = [];
    for(let i = 0; i < this.length; i++) {
        mapped.push(callback(this[i]));
    }
    return mapped;
};

// let arr = [1,2,3,4];
// function double(i) {
//     return i*i;
// }
// let doubled = arr.myMap(double);
// console.log(doubled);

Array.prototype.myReduce = function(callback, initialValue) {

}