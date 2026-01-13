//1. Định nghĩa key: value cho object
//2. Định nghĩa method cho object
//3. Định nghĩa key cho object dưới dạng biến
var name = "JavaScript";
var price = 1000;
// key cùng tên với biến thì nó tự động lấy
var course = {
  name,
  price,
  getName() {
    return name;
  },
};
console.log(course.getName());

var fieldName = "name";
var fieldPrice = "price";
const course1 = {
  [fieldName]: "JavaScript",
  [fieldPrice]: 5000,
};
console.log(course1.name);
