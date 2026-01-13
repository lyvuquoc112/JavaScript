// Let, const

//1. var / Let, const: Scope, hosting
//2. Const/ var, let: Assignment

// Code block: if else, loop,{},...

// giống nhau là đều có thể khai báo ra biến
// khác nhau:
// var thì trong ngoài block vẫn dùng được, const và let thì chỉ có thể dùng trong cùng 1 block hoặc là block mà tụi nó đúng bao trùm
// var có hỗ trợ hosting nên có thể gán giá trị trước khi khai báo, 2 cái còn lại thì phải khai báo mới được gán giá trị
// var và let có thể được gán lại, const thì không thể gán lại lần thứ hai cho biến
if (true) {
  var course = "javascript basic";
}
console.log(course);

const a = {
  name: "Java",
};
a.name = "php"; // đây không phải là gán lại biến a, mà là gán lại element trong biến a
//a = 'php' là sẽ lỗix
console.log(a.name);
