/**
 * Math object
 * - Math.PI
 * - Math.round()
 * - Math.abs()
 * - MAth.ceil()
 * - Math.floor()
 * - Math.random()
 * - Math.min()
 * - Math.max()
 */
console.log(Math.PI);
console.log(Math.round(2.5123126)); // làm tròn thành số nguyên
console.log("Giá trị tuyệt đối: ", Math.abs(-4));
console.log("Làm tròn trên: ", Math.ceil(4.00000001));
console.log("Làm tròn dưới: ", Math.floor(8.999999999));
console.log("Ngẫu nhiên một số từ 0-1: ", Math.random());
console.log("Ngẫu nhiên một số từ 1-10: ", Math.floor(Math.random() * 10 + 1));
console.log(
  "Số nhỏ nhất trong các số được cho trước: ",
  Math.min(1, 364, 23, -234, 23)
);
console.log(
  "Số lớn nhất trong các số được cho trước: ",
  Math.max(1, 364, 23, -234, 23)
);

var randomNumber = [1, 2, 3, 4];
function getRandomItem(randomNumber) {
  return randomNumber[Math.floor(Math.random() * randomNumber.lenght())];
}
console.log(getRandomItem(randomNumber))