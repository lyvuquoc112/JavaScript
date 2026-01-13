// Arrow function

// declaration function
function logger(log) {
  console.log(log);
}
logger("Messsage,....");

// express function
const logger1 = function (log) {
  console.log(log);
};
logger1("Message1,....");

// arrrow function
const logger2 = (log) => {
  console.log(log);
};
const sum = (a, b) => a + b; // như thế này sẽ default return về a+b
// nếu dùng {} thì phải có chữ return
const sum1 = (a, b) => ({ a: a, b: b }); // muốn return object thì () bọc lại hết
const logger3 = (log) => console.log(log); // nếu chỉ có 1 đối số thì bỏ () luôn
logger1("Message2,....");
logger3("Hello,....");

const course = {
  name: "JavaScript",
  // getName: function () {
  //   return this.name;
  // },
  getName: () => {
    return this.name;
  }, // arrow function thì sẽ không nhận được this
};
console.log(course.getName());

const Course1 = function (name, age) {
  this.name = name;
  this.age = age;
};

// const Course2 = (name, age) => {
//   this.name = name;
//   this.age = age;
// }; // sẽ bị lỗi Course1 is not a constructor

const js = new Course1("java", 20);
console.log(js);
