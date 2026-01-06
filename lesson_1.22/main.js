/**
 * Mảng trong JavaScript - Array
 * 1. Tạo mảng
 *  - Cách tạo
 *  - Sử dụng cách nào? Tại sao?
 *  - Kiểm tra data type?
 * 2. Truy xuất mảng
 *  - Độ dài mảng
 *  - Lấy phần tử theo index
 */

//1:Ưu tiên cách 1, nhanh, gọn
var langauges = ["Javascript", "PHP", "Ruby", 123, null, NaN, undefined];
var langauges1 = new Array("Javascript", "PHP", "Ruby", 123, null, NaN, undefined);
console.log(langauges);
console.log(langauges1);
console.log(Array.isArray(langauges)); // kiểm tra xem biến có phải array không true
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

console.log('-------------------------');

// index, key
console.log(langauges.length) // độ dài mảng
console.log(typeof langauges.length) // độ dài mảng là kiểu number
console.log(langauges[2]); // vị trí index 2, giá trị là ruby

