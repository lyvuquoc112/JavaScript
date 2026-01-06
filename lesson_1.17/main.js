/**
 * Một số điều cần biết về function
 * 1. Khi function đặt trùng tên? function sau ghi đè lên function trước, về bản chất là do trình biên dịch thông minh
 * 2. Khai báo biến trong hàm? được, phạm vi chỉ trong function đó
 * 3. Định nghĩa hàm trong hàm? được, phạm vi chỉ trong function
 */

// function showMessage() {
//   console.log("Message 1");
// }

// function showMessage() {
//   console.log("Message 2");
// }

//showMessage();


// function showMessage() {
//   var fullName = "Nguyen Van A";
//   console.log(fullName);
// }

function showMessage(){
  function showMessage2(){
    console.log('Message 2');
  }
  showMessage2();
}
showMessage();