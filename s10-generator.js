function* gen() {
  return "first generator";
}

let generatorResult = gen();

console.log(generatorResult);
console.log(generatorResult.next().value);
console.log(generatorResult.next().value);

function* generatorSequence() {
  yield "first";
  yield "second";
  yield "third";
}

let generatorSequenceVariable1 = generatorSequence();
console.log(generatorSequenceVariable1.next().value);
console.log(generatorSequenceVariable1.next().value);
console.log(generatorSequenceVariable1.next().value);
console.log(generatorSequenceVariable1.next().value);
let generatorSequenceVariable2 = generatorSequence();
console.log(generatorSequenceVariable2.next());
console.log(generatorSequenceVariable2.next());
console.log(generatorSequenceVariable2.next());
console.log(generatorSequenceVariable2.next());

for (let value of generatorSequence()) console.log(value);

// 제너레이터에 데이터 넣기
function* sayFullName() {
  var firstName = yield;
  var secondName = yield;
  console.log(firstName + secondName);
}
// 제너레이터 인스턴스를 생성
let fullName = sayFullName();

fullName.next();
fullName.next("anto");
fullName.next("anto");

let generator;
const getDataOne = (cb) => {
  setTimeout(function () {
    // cb("dummy data one");
    generator.next("dummy data one");
  }, 1000);
};

const getDataTwo = (cb) => {
  setTimeout(function () {
    // cb("dummy data two");
    generator.next("dummy data two");
  }, 1000);
};

function* main() {
  const one = yield getDataOne();
  const two = yield getDataTwo();
  console.log(one);
    console.log(two);
}

generator = main();
generator.next();
