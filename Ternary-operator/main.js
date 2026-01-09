// toán tử 3 ngôi - Ternary operator
// let coin = 200;
// let coin1 = 300;
// console.log(
//   "Nếu coin lên hơn 280 thì hiện ra giá trị của coin, nếu không thì để là free: ",
//   coin > 280 ? coin : "free"
// );
// console.log(
//   "Nếu coin lên hơn 280 thì hiện ra giá trị của coin, nếu không thì để là free: ",
//   coin1 > 280 ? coin1 : "free"
// );

// var course = {
//   name: "JavaScript",
//   coin: 250,
// };
// const { name, coin } = course;
// console.log(
//   `Nếu coin lên hơn 280 thì hiện ra giá trị của coin, nếu không thì để là free:
//   ${coin1 > 280 ? coin1 : "free"} coins`
// );

// Rèn luyện
//Kiểm tra chẵn lẻ (Cơ bản)
let number = 25;
let result;
if (Number.isInteger(number)) {
  result =
    number % 2 === 0 ? `${number} là một số chẵn` : `${number} là một số lẻ`;
  console.log(result);
} else {
  console.log(`${number} không phải là một số nguyên`);
}
//Bài tập 2: Trạng thái đăng nhập (Boolean)
var isLoggedIn = false;
var message = isLoggedIn
  ? `Tài khoản đã đăng nhập`
  : ` Tài khoản chưa đăng nhập`;
console.log(message);
//Bài tập 3: Tìm số lớn hơn (So sánh)
var a = Math.floor(Math.random() * 100);
var b = Math.floor(Math.random() * 100);
var message = (a == b
  ? "Bằng nhau"
  : a > b
  ? `${a} lớn hơn ${b}`
  : `${a} bé hơn ${b}`);
console.log(message);
//Bài tập 4: Tính phí vận chuyển (Tính toán số học)
var totalBill = Math.floor(Math.random() * 60000);
var shippingfee = 0;
var message =
  totalBill > 50000
    ? `${totalBill} lớn hơn 50000 nên shipping fee là ${shippingfee} đồng`
    : `${totalBill} nhỏ hơn 50000 nên shipping fee là ${
        shippingfee + 30000
      } đồng`;
console.log(message);
//Bài tập 5: Xử lý giá trị null/undefined (Nâng cao một chút)
var userName = null;
var message = userName === null ? "Anoymus guest" : `${userName}`;
console.log("Hello ", message);
