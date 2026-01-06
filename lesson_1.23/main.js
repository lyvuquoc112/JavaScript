/**
 * Làm việc với Array
 * 1. To String
 * 2. Join
 * 3. Pop       tác động trực tiếp vào array
 * 4. Push      tác động trực tiếp vào array
 * 5. Shift     tác động trực tiếp vào array
 * 6. Unshift   tác động trực tiếp vào array
 * 7. Splicing  tác động trực tiếp vào array
 * 8. Concat
 * 9. Slicing
 */

var langauges = ["Javascript", "PHP", "Ruby"];

//1
console.log(langauges.toString()); // chuyển array sang string
console.log(typeof langauges.toString);
//2
console.log("-----------------");
console.log(langauges.join(" - ")); // kết nối các phần tử trong mang, biến truyền vào sẽ hiện thị
// với vai trò là nối các phần tử, chỉ cho đep. mục dích thì cái nào cũng được
//3
console.log("-----------------");
console.log(langauges.pop()); // Xóa element cuối mảng và trả gì element đó
console.log(langauges);
//4
console.log("-----------------");
console.log(langauges.push("Dart")); // thêm một elements vào cuối mảng, sẽ hiện ra độ dài mảng,
//có thể thêm nhiều phần tử cùng lúc
console.log(langauges);
//5
console.log("-----------------");
console.log(langauges.shift()); // xóa phần tử đầu mảng và giá về giá trị đó
console.log(langauges);
//6
console.log("-----------------");
console.log(langauges.unshift("Dart", "Java")); // Thêm element vào đầu array, cũng hiện length của mảng
console.log(langauges);
//7
console.log("-----------------");
langauges.splice(1, 2); // vị trí con trỏ và số lượng muốn xóa
console.log(langauges);
langauges.splice(1, 0, "ABC", "BCD"); // vị trí muốn chèn, 0 là nghĩa là không xóa bất cứ ai, có thêm n elements
console.log(langauges);
langauges.splice(1, 3, "DER"); // tại vị trí 1 xóa đủ 3 phần tử, rồi thêm DER vào
console.log(langauges);
langauges.slice(0); // là copy mảng, không dùng arrayCopy vì nó vẫn sẽ là arrayGoc
// trong ES6 arrayCopy = [...arrayGoc]

//8 nối array
console.log("-----------------");
var books1 = [1, 2, 3, 4];
var books2 = ["a", "b", "c", "d"];
console.log(books1.concat(books2));

//9 cắt mảng luôn trả về kiểu mảng
console.log("-----------------");
var langauges3 = ["a", "c", "d"];
console.log(langauges3.slice(1, 2)); //cắt từ vị trí index 1 tới trước 2
console.log(langauges3);
console.log(langauges3.slice(-1)); // lấy phần tử từ bên phải
