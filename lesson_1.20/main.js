// LÀM VIỆC VỚI CHUỖI
var myString = "Hoc JS tai JS JS JSdau do!";
//1. Length
console.log(myString.length);
//2. Find index
console.log(myString.indexOf("JS")); // trả về vị trí đầu tiên tìm được (index)
console.log(myString.indexOf("JS", 6)); // có thể quy định vị trí bắt đầu đếm
// Có thể sử dụng hàm tìm vị trí đầu tiên, để từ đó +1 để tìm
// ở vị trí thứ hai
console.log(myString.lastIndexOf("JS")); // trả về vị trí cuối cùng
console.log(myString.indexOf("ABC")); // nếu không tìm tháy thì là -1
console.log(myString.search("JS")); // search
// không truyền vào vị trí bắt đầu, chỉ tìm cái đầu tiên
// khác nữa là nó hỗ trợ tìm kiếm theo biểu thức chính quy
//3. Cut string
var myString1 = "Hoc JS tai dau do!";
console.log(myString1.slice(4, 6)); // cắt từ index1 đến index2
console.log(myString1.slice(4)); // cắt từ index1 đến hết
console.log(myString1.slice(0)); // cắt từ index1 đến hết
console.log(myString1.slice(-3, -1)); // cắt từ phải sang trái thì thêm số âm

//4. Replace
var myString2 = "Hoc JS tai dau do!";
console.log(myString.replace("JS", "JavaScript")); // tìm giá trị và thay đổi giá trị
console.log(myString.replace(/JS/g, "JavaScript")); // dùng biểu thức chính quy, g là toàn bộ

//5. Convert to upper case
console.log(myString.toUpperCase());
//6. Convert to lower case
console.log(myString.toUpperCase());

//7. Trim
console.log(myString.trim()); // loại bỏ khoảng trắng đầu và cuối
//8. Split
var language = 'JavaScript, PHP, Ruby';
console.log(language.split(', ')); // dùng để tách chuỗi thành array
// phải có điểm chung như là dấu phẩy hay gì đó, thì mới tách đúng
console.log(language.split('')); // cắt mỗi chữ cái thành một phần tử trong array
//9. Get a character by index
const myString3 = 'Ly Huy';
console.log(myString3.charAt(1))
console.log(typeof myString3.charAt(100)) // nếu là một index
// mà chỗ đó không chứa ký tự thì nó sẽ trả về
// chuỗi rỗng kiểu string
console.log(typeof myString3[100]) // ngoặc vùng thì sẽ trả undefined
