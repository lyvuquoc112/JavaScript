/**
 * Toán tử logical
 * 1. && - And
 * 2. || - Or
 * 3. !- Not
 */

var a = 1;
var b = 2;
var c = 3;
// if (a > 0 && b > 0 && c > 0) {
//   console.log("DIEU KIEN DUNG!");
// }else{
//     console.log("DIEU KIEN SAI!");
// }

if (a < 0 || b < 0 || c > 0) {
  console.log("DIEU KIEN DUNG!");
}else{
    console.log("DIEU KIEN SAI!");
}

if (!(a < 0)) {
  console.log("DIEU KIEN DUNG!");
}else{
    console.log("DIEU KIEN SAI!");
}
