// Object construct, có thể được tái sử dụng
// mô tả thiết kế đối tượng, bản thân nó không phải là đối tượng
// các object nếu tự thêm key vào thì object construct cũng không bị ảnh hưởng
var User = function(firstName, lastName, avatar) { // declaration function hay express function đều được
  // viết hoa chữ cái đầu của object construct
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
};
// khi dùng new thì author mới là một đối tượng
var author = new User("Huy", "Ly", "img");
var user = new User("Hoa", "Thi", "img");

author.title = "Một buổi sáng tốt lành";
user.comment = "Thơ hay";
console.log(author.getName());
console.log(user);
