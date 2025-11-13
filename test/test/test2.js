var obj1 = /** @class */ (function () {
    function obj1() {
    }
    return obj1;
}());
var obj2 = /** @class */ (function () {
    function obj2() {
    }
    return obj2;
}());
var hue1 = { arg1: 1, arg2: 2 };
var hue2 = { arg1: 3, arg2: "a" };
Object.assign(hue1, hue2);
console.log(hue1);
