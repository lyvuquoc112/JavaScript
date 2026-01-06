/**
 * Toán tử so sánh - P2
 */

/**
 * ===
 * !==
 */

var a = 1;
var b = "1";
console.log(a == b); // true, nó chỉ quan tâm giá trị
console.log(a === b); // false, nó quan tâm cả kiểu dữ liệu

console.log(a != b); // false, nó chỉ quan tâm giá trị
console.log(a !== b); // true, nó quan tâm cả kiểu dữ liệu


var cars = [] // Dù là mảng "rỗng" vẫn là truthy

if (!cars) {
 console.log('false');    
}else{
  console.log('true');
}