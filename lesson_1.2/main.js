/**
 * Giới thiệu về toán tử trong Javascript
 * 1. Toán tử số học - Arithmetic
 * 2. Toán tử gán - Assignment
 * 3. Toán tử so sánh - Comparison
 * 4. Toán tử logic - Logical
 */

var a = 1+2; // Toán tử số học gồm: + - * / % ++ --
console.log(a);

var fullName = "Nguyen Van A"; // Toán tử gán gồm: = += -= *= /=
console.log(fullName);

var b = 1;
var c =2;
if(b > c){// Toán tử so sánh gồm: > < >= <= == === != !==
    console.log(b +" bigger than "+c)
}
if(b < c){// Toán tử so sánh gồm: > < >= <= == === != !==
    console.log(b +" smaller than "+c)
}

var d = 1;
var e = 2;
if(d > 0 && e >0){
    alert('d and e are both positive numbers');// Toán tử logic gồm: && (AND), || (OR), ! (NOT)
}