// 함수자
const Container = function (val) {
  this.value = val;
};

let testValue = new Container(3);
testValue;
console.log(testValue.value);

Container.of = function (value) {
  return new Container(value);
};

testValue = Container.of(3);
testValue;
console.log(testValue);

const test = Container.of(Container.of(3));
test;

Container.prototype.map = function (fn) {
  return Container.of(fn(this.value));
};
let double = (x) => x + x;
const doubleNum = Container.of(3).map(double);
console.log(doubleNum);
