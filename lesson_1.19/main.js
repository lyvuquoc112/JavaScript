/**
 * Chuỗi trong JavaScript
 * 1. Tạo chuỗi
 *  - Các cách tạo chuỗi
 *  - Nên dùng cách nào? Lý do?
 *  - Kiểm tra data type
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viêt code cỡ 80 ký tự
 * 5. Template string ES6
 */
//1
var fullName = "Ly Huy"; // cách 1, ưu tiên cách này.
// nhanh, không tạo một instant mới.
// không tạo dữ liệu không mong muốn
var fullName1 = new String("Ly An"); // cách 2
console.log(typeof fullName1); // nó là kiểu object
//2
var fullName2 = "Ly Huy 'la bac si'";
var fullName3 = "Day la dau \\";
console.log(fullName2);
//3
var fullName4 = "Ly Huy";
console.log(fullName4.length);
//4
var fullName5 = "Ly Huy là gì đó \n" + "mà không ai biết";
console.log(fullName5);
//5
var firstName = "Ly";
var lastName = "Huy";
console.log(`Toi la: ${firstName} ${lastName}`);
