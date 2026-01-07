/**
 * Object prototype - Basic
 * nếu object constructor là bản thiết kế
 * thì object prototype là nguyên liệu để xây nên
 * 1. Prototype là gì?
 * thêm thuộc tính vào object construct (thêm từ vị trí bên ngoài)
 * 2. Sử dụng khi nào?
 */
var User = function (firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
};

User.prototype.className = 'F9'; // làm bằng cách này thì không thể gán thông qua this
User.prototype.getClasName = function(){
  return this.className; // làm bằng cách này thì mới lấy được từ this
}

var author = new User("Huy", "Ly", "img");
var user = new User("Hoa", "Thi", "img");

console.log(author.className)
console.log(user.getClasName())
