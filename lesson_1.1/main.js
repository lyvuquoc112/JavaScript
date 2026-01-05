/**
 * Giới thiệu một số hàm built-in trong JavaScript
 * 1. Alert
 * 2. Console
 * 3. Confirm
 * 4. Prompt
 * 5. Set timeout
 * 6. Set interval
 */

// console.log('Day la 1 dong log')
// console.log(123);
// var fullName = 'Nguyen Van A';
// console.log(fullName); // dùng để debug
// console.error('Day la dong loi'); // in ra loi
// console.warn('Day la dong canh bao'); // in ra canh bao

// confirm('Xac nhan ban du tuoi'); // tạo hộp thoại confirm, trả về true/false

// prompt('Xac nhan ban du tuoi'); // tạo hộp thoại cùng với ô nhập liệu

// setTimeout(function() {
//     alert('Thong bao sau 1s');
// }, 1000); // hàm thực thi sau 1 khoảng thời gian (ms)

setInterval(function() {
    console.log('Day la dong thong bao lap di lap lai sau 1s'+Math.random());
}, 1000); // hàm thực thi lặp đi lặp lại sau 1 khoảng thời gian (ms)