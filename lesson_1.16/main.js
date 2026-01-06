// Return trong hàm - JavaScript cơ bản
// var isConfirm = confirm('Message?');
// các hàm bật ra hộp thoại sẽ khiến các dòng lệnh
// phía sau nó sẽ không được thực thi cho tới
// khi hộp thoại tắt đi
// console.log(isConfirm);
function sum(a, b) {
  return a + b; // nếu không có return thì mặc định là undefined
}

var result = sum(10, 20);
console.log('Result: ', result);
