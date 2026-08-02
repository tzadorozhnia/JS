// #gsKLAsNWM
//
// Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

let arr = [1, 2, 3, 4, 5];

arr.myForEach((value) => console.log(value * 2));

let result = arr.myFilter(value => value > 2);
console.log(result);