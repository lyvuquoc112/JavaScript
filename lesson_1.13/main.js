// Hiểu hơn về câu lệnh điều kiện
// và phép so sánh
// var a = 1;
// var b = 2;

// var result = a < b;
// console.log("result: ", result);

// if (a < b) {
//   console.log("a nhỏ hơn b");
// } else {
//   console.log("a lớn hơn b");
// }

// var result = NaN && "b" && "c";
// nếu là 6 kiểu cái dưới đây thì lập tức sẽ trả về giá trị false
// nếu không phải là thì nó sẽ đi cho tới hết và lấy cái cuối cùng
/**
 * 0
 * false
 * ''
 * null
 * NaN
 * undefined
 */
// console.log("result: ", result);
// if (result) {
//   console.log("Dung");
// } else {
//   console.log("Sai");
// }

var result = "a" || "b" || "" || "d";
console.log("result: ", result);
// nếu không là 6 kiểu dữ liệu false thì nó sẽ lấy thằng đầu tiên và trả về kết quả
// nếu là 6 kiểu dữ liệu thì sẽ tiếp tục di chuyển sang trái

var a = 4;
var b = 6;
var c = 8;

if (a > b && a < c) {
  console.log("sai");
} else {
  console.log("dung");
}

