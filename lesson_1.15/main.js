/**
 * Tham số hàm - JavaScript cơ bản
 *
 * 1. Tham số?
 *  - Định nghĩa? là giá trị truyền vào function khi được định nghĩa
 *  - Kiểu dữ liệu? không giới
 *  - Tính private?
 *  - 1 tham số
 *  - Nhiều tham số
 * 2. Truyền tham số
 *  - 1 tham số
 *  - Nhiều tham số
 * 3. Arguments?
 *  - Đối tượng arguments
 *  - Giới thiệu vòng for of
 */
function writeLog(message) {
  // message ở dây gọi là tham số
  console.log(message);
}
writeLog("Text message 1"); // truyền 1 tham số vào hàm thì ở đây gọi là đối số

function checkType(message, message2) {
  console.log(typeof message);
  console.log(typeof message2);
}
checkType(123, ["a", "b", "c"]);

function writeLog2() {
  console.log(arguments); // arguments là 1 đối tượng chứa tất cả các đối số được truyền vào hàm
}
writeLog2("Log 1", "Log 2", "Log 3");

function writeLog3() {
  var myString = "";
  for (var param of arguments) {
    myString += `${param} - `;
  }
  console.log(myString);
}
writeLog3("Log 1", "Log 2", "Log 3");
