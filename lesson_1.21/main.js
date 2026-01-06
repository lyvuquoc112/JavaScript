/**
 * Kiểu số (Number) trong JavaScript
 * 1. Tạo giá trị Number
 *  - Các cách tạo
 *  - Dùng cách nào? Tại sao?
 *  - Kiểm tra data type
 * 2. Làm việc với number
 *  - To String
 *  - To Fixed
 */

//1
// dùng cách số 1
// bởi vì gọn, không tạo đối tượng không mong
// muốn
var age = 18;
var PI = Math.PI;
var weight = 10.5;

var otherNumber = new Number(50);
console.log(typeof PI);

var result = 20 / "abc";
var result1 = 20 / 1;
console.log(result); //NaN là đại diện cho 1 số không hợp lệ
console.log(typeof result); // vẫn là kiểu number
console.log(isNaN(result)); // kiểm tra giá trị có phải NaN không, nếu đúng thì là tru
console.log(isNaN(result1)); // nó sẽ ra false

//2
console.log("-----------------");
var myString = age.toString();
console.log(age.toString()); // chuyển number thành string
console.log(typeof myString);
console.log(typeof age.toString());

console.log(PI.toFixed()); // làm tròn, mặc định là số 0, nghĩa là không có số phẩy
console.log(PI.toFixed(1)); // làm tròn 1 số sau dấu phẩy
console.log(PI.toFixed(2)); // làm tròn 2 số sau dấu phẩy
console.log(PI.toFixed(3)); // làm tròn 3 số sau dấu phẩy
console.log(typeof PI.toFixed(3)); // khi làm tròn thì kiểu sẽ là string
console.log(parseFloat (PI.toFixed(3))); // chuyển sang string sang float
console.log(typeof parseFloat (PI.toFixed(3)));
console.log(parseInt (PI.toFixed(3)));
console.log(typeof parseInt (PI.toFixed(3)));
 