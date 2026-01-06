/**
 * Kiểu dữ liệu trong JavaSript
 * 1. Dữ liệu nguyên thủy - Primitive Data là kiểu được tạo ra ghi vào vùng nhớ
 * không thể sửa giá trị ở vùng nhớ đó mà chỉ có thể ghi đè vùng nhớ khác.
 * - number
 * - string
 * - boolean
 * - underfined
 * - null
 * - symbol
 *
 * 2. Dữ liệu phúc tạp - Complex Data
 * - function
 * - object
 */

// Number type
var a = 1;
var b = 2;
var c = 1.5;

console.log(typeof a); // kiểm tra kiểu dữ liệu của biến

// String type
var fullName = 'Ly Vu "Quoc Huy'; // '' hay "" đều như nhau
console.log(fullName);
console.log(typeof fullName);

// Boolean type
var isOpen = false;

console.log(typeof isOpen);

// Undefined type
var age; // khái báo biến nhưng chưa gán giá trị
if (age) {
  console.log("True");
} else {
  console.log("False");
}
console.log(typeof age);

// Null type
var isNull = null; // giá trị null là giá trị không tồn tại
console.log(isNull);
console.log(typeof isNull); // type null lai trả về object (lỗi của JS)

// Symbol type
var id = Symbol("id"); // symbol có tính duy nhất
var id2 = Symbol("id");
console.log(id == id2); // false
console.log(typeof id);
// Function type
var myFunction = function () {
  alert("Hi. Xin chao cac ban!");
};

myFunction();
console.log(typeof myFunction);


// Object types
var myObject = {
  // key - value, key1 - value1,...
  name: "Ly Vu Quoc Huy",
  age: 21,
  adress: "Saigon",
  myFunction: function () {},
};

console.log("myObject: ", myObject);

var myArray = ["JavaScript", "PHP", "Ruby"];
console.log("myArray: ", myArray);

console.log(typeof myObject);
console.log(typeof myArray); // kiểu dữ liệu array cũng là symbol
