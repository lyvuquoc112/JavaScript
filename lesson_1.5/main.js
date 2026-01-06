// Toán tử ++ và --
// Prefix và Postfix

var a = 6;
// Prefix: ++a, --a
// việc 1: +1 cho a, a = a + 1 => a = 7
// việc 2: Trả về a sau khi được +1
// console.log(--a);
// console.log(++a);
// var output = ++a;
// console.log('output: ', output);

// Postfix: a++, a--
// việc 1: 'a copy', 'a copy' = 6
// việc 2: cộng 1 của a, a = a - 1 => a = 6-1
// việc 3: trả về 'a copy' (6)
// var output = a++;
// console.log('output: ', output);
// console.log('a sau khi thực hiện: ', a)

// var number = 6;
// var output = number++ + --number;
// // 6 + (--7) = 6 + 6 = 12
// console.log('output: ', output);

var number = 6;
var output = ++number * 2 - number-- * 2;
// 7 * 2 - 7 * 2
console.log("output: ", output);
