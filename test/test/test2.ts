class obj1 {
  arg1: number;
  arg2: number;
}

class obj2 {
  arg1: number;
  arg2: string;
}

const hue1: obj1 = new obj1();
hue1.arg1 = 1;
hue1.arg2 = 2;
const hue2: obj2 = { arg1: 3, arg2: "a" };

console.log(typeof hue1);

Object.assign(hue1, hue2);

console.log(hue1.arg1, hue1.arg2);
console.log(hue1 instanceof obj1);
