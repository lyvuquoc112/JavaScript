/**
 * Các loại function
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 */

showMessage(); // có thể gọi declarartion function
// trước khi nó được định nghĩa
function showMessage() {
  console.log("Declaration function");
} // declaration function, bắt buộc phải đặt tên

var showMessage2 = function () {
  console.log("Expression function");
}; // expression function, phải xuất hiện toán tử gán
// tên của express function chỉ có chức năng là nói lên tác dụng của nó
showMessage2(); // chỉ được gọi sau khi hàm đã được định nghĩa

setTimeout(function testName() {}); // cũng là một expression function

var myObject = {
  myFunction: function testName() {},
}; // cũng là express
