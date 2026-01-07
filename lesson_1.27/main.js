// Đối tượng date
var date = new Date();
console.log(date.toString()); // thời gian hiện tại
console.log(typeof date); // nếu có new Date thì trả về object
//console.log(typeof date) // nếu ko có new Date thì trả về string
console.log(date.getFullYear()); // lấy năm
var year = date.getFullYear();
var month = date.getMonth() + 1; // tháng thì nó lấy 0-11
var day = date.getDay(); // ngày trong tuần
day = date.getDate(); // ngày trong tháng
console.log(day);
console.log(`${day}/${month}/${year}`)