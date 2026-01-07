// thêm key mới bằng biến
var myKey = "email";

// Object trong JavaScript
var myInfo = {
  name: "Huy",
  age: 21,
  city: "Saigon",
  [myKey]: "lyvuquoc",
  getName() {
    // function trong object, việt theo dạng ES6
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
};

// function --> phương thức methods
// others --> thuộc tính properties

// myInfo.email = "lyvuquoc@gmail.com";
// thêm key vào object thì .keyName
// nếu mà key không theo quy tắc thì
// myInfo['birth-of-date'] = '12/02/2000';

// xóa một key
// delete myInfo.age;
// delete myInfo.city;

console.log(myInfo.getName());

// console.log(myInfo[myKey]);

//console.log(myInfo.name); // lấy value của key

//cách thứ hai để lấy value
// var myKey = "city";
// console.log(myInfo[myKey]); // không để trong ngoăc, bởi sẽ nhầm với string

// nếu mà đặt tên key không theo quy tắc
// đặt tên biến thì dùng '' hoặc ""
// var myInfo = {
//   'full-name': "Huy",
//   age: 21,
//   city: "Saigon",
// };
