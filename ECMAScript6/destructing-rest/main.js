var array = ["Jv", "Ruby", "Php", "DS"];
// const [a, , c] = array;
const [a, ...rest] = array;
console.log(a);
//console.log(b);
// console.log(c);
console.log(rest);

var course = {
  name: "JavaScript",
  price: 1000,
  image: "image-add",
  // childre: {
  //   name: "ReactJs",
  //   age: 20,
  // },
  // description: "Description",
};

// đây là cách đổi tên key, do đổi tên rồi thì tên cũ sẽ không dùng được
// var {
//   name: parentName,
//   childre: { name: childrenName },
// } = course;
// console.log(parentName);
// console.log(childrenName);
// var { name, ...rest1 } = course;
// console.log(name);
// course.price = 2000;
// console.log(rest1); // đây là cách xóa một key đầu mà không dùng delete
// console.log(course);

// nếu gọi một thuộc tính không tồn tại trong obj, sẽ trả về undefined, nên là định nghĩa nó luôn
var { name, description = "Default description" } = course;
console.log(name);
console.log(description);

// ... khi dùng với destructing hay là đối số thì là rest
function logger(...params) {
  console.log(params); // nó trả về array
}
console.log(logger(1, 2, 3, 4, 5, 6));
