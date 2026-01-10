/**
 * Array methods:
 *  forEach() // sẽ gọi từng element trong array
 * array.forEach(function(currentValue, index, arr), thisValue). giá trị hiện tại, index của nó, và arr chứa nó
 *  every()
 *  some()
 *  find()
 *  filter()
 *  map()
 *  reduce()
 */

var courses = [
  { id: 1, name: "JavaScript", coin: 250 },
  { id: 2, name: "HTML, CSS", coin: 0 },
  { id: 3, name: "Ruby", coin: 0 },
  { id: 4, name: "PHP", coin: 250 },
  { id: 5, name: "React", coin: 250 },
  { id: 6, name: "Ruby", coin: 1 },
];

console.log("For each---------------------");
courses.forEach((course, index) => {
  // truyền hàm vào, hàm được truyền dưới dạng tham số được gọi là callBack
  //Tham số được truyền vào tên chỉ cần đúng nguyên tắc là được
  console.log(index);
  console.log(course);
});

console.log("every---------------------");
var isFree = courses.every((course, index) => {
  // truyền hàm vào, hàm được truyền dưới dạng tham số được gọi là callBack
  //Tham số được truyền vào tên chỉ cần đúng nguyên tắc là được
  // every là để kiếm tra các object trong array có thỏa hết điều kiện không, trả về boolean, true là nếu thỏa hết, false là khi 1 cái không thỏa
  // giống toán tử logic &&, kiểm cho tới khi nào gặp false, nếu không gặp thì trả về thằng cuối cùng
  return course.coin === 0;
});
console.log(isFree);

console.log("some---------------------");
var isFree1 = courses.some((course, index) => {
  // truyền hàm vào, hàm được truyền dưới dạng tham số được gọi là callBack
  //Tham số được truyền vào tên chỉ cần đúng nguyên tắc là được
  // some là để kiếm tra 1 object trong array có thỏa hết điều kiện không, trả về boolean, true là nếu thỏa hết, false là khi 1 cái không thỏa
  // giống toán tử logic ||, kiểm cho tới khi nào gặp true, nếu không gặp thì trả về thằng cuối cùng
  return course.coin === 0;
});
console.log(isFree1);

console.log("find---------------------");
var isFree2 = courses.find((course, index) => {
  // truyền hàm vào, hàm được truyền dưới dạng tham số được gọi là callBack
  //Tham số được truyền vào tên chỉ cần đúng nguyên tắc là được
  // nếu không tìm được thì sẽ trả về undefined
  // nó sẽ lặp qua array, mỗi object sẽ bỏ vào function để kiểm tra điều kiện, nếu true thì nó sẽ trả về phần tử đó
  // chỉ kiểm tra được thằng đầu tiên, không kiểm tra được thằng thứ hai
  return course.name === "Ruby";
});
console.log(isFree2);

console.log("filter---------------------");
var listCourses = courses.filter((course, index) => {
  // truyền hàm vào, hàm được truyền dưới dạng tham số được gọi là callBack
  //Tham số được truyền vào tên chỉ cần đúng nguyên tắc là được
  // nếu không tìm được thì trả về array[] rỗng
  // nếu tìm được thì trả về array[ob1,ob2]
  // sẽ tìm hết
  // tạo mảng mới
  return course.name === "Ruby";
});
console.log(listCourses);

console.log("Map---------------------"); // tạo một mảng mới, thay đổi mảng đó, thường là dùng để render ra nội dung
function handelFunction(course, index, originArray) {
  // console.log(course)
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    coin: course.coin,
    conText: `Gia: ${course.coin}`,
    index: index,
    originArray: courses,
  };
}
function takeCoursesName(course, index) {
  // console.log(course)
  return {
    name: course.name,
    index: index,
    originArray: courses,
  };
}
var newCourses = courses.map(takeCoursesName);
console.log(newCourses);

console.log("Reduce---------------------"); // trả về giá trị
// var i = 0;
// function coinHandel(accumulator, currentValue, currentIndex, originArray) {
//   // accumulator là biến lưu trữ
//   i++;
//   var total = accumulator + currentValue.coin;
//   console.table({
//     "Lượt chạy: ": i,
//     "Biến lưu trữ: ": accumulator,
//     "Giá trị cộng thêm: ": currentValue.coin,
//     "Tích trữ được hiện tại: ": total,
//   });
//   return total;
// }
//var toatalCoin = courses.reduce(coinHandel, 0); // số không là đang tạo biến lưu trữ cũng là giá trị khởi tạo, nghĩa là ở lần đầu tiên biến
// lữu trữ được tạo ra thì nó bằng 0

var totalCoin = courses.reduce((total, course) => {
  return total + course.coin;
}, 0); // nếu không inital value thì nó sẽ lấy phần tử đầu tiên của mảng, nghĩa là lần đầu tiên nó sẽ là lấy 2 element trong mảng

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce((flat, depthItem) => {
  return flat.concat(depthItem);
}, []);
console.log(flatArray);

var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "HTML, CSS",
      },
      {
        id: 2,
        title: "JS",
      },
    ],
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "PHP",
      },
      { id: 2, title: "SQL" },
    ],
  },
];
var newCourses1 = topics.reduce((acc, topic) => {
  return acc.concat(topic.courses);
}, []);
console.log(newCourses1);
// console.log("-----------------Bài tập-------------------");
// console.log("-----------------For Each-------------------");
// var products = [
//   {
//     id: 1,
//     name: "Iphone 13 Pro",
//     price: 30000000,
//     quantity: 2,
//     category: "Phone",
//   },
//   {
//     id: 2,
//     name: "Samsung Galaxy S21",
//     price: 25000000,
//     quantity: 0,
//     category: "Phone",
//   },
//   {
//     id: 3,
//     name: "Macbook Air M1",
//     price: 28000000,
//     quantity: 1,
//     category: "Laptop",
//   },
//   {
//     id: 4,
//     name: "Chuột Logitech",
//     price: 500000,
//     quantity: 5,
//     category: "Accessories",
//   },
//   {
//     id: 5,
//     name: "Tai nghe Sony",
//     price: 3000000,
//     quantity: 0,
//     category: "Accessories",
//   },
// ];

// /**
//  * Bài tập 1: Dùng forEach()
// Yêu cầu: Hãy in ra màn hình console thông tin của từng sản phẩm theo cấu trúc câu: "Sản phẩm [Tên] có giá [Giá] và số lượng [Số lượng]".
//  */
// products.forEach((product) => {
//   console.log(
//     `Sản phẩm ${product.name} có giá trị ${product.price} và số lượng ${product.quantity}`
//   );
// });

// /**
//  * Bài tập 2: Dùng every()
// Yêu cầu: Kiểm tra xem tất cả sản phẩm trong giỏ hàng có phải đều còn hàng (tức là quantity > 0) hay không?
// Kết quả mong đợi: Trả về true hoặc false.
//  */
// console.log("-----------------Every-------------------");
// var isStock = products.every((product) => {
//   return product.quantity > 0;
// });
// console.log(isStock);
// /**
//  * Bài tập 3: Dùng some()
// Yêu cầu: Kiểm tra xem trong giỏ hàng có sản phẩm nào thuộc danh mục (category) là 'Laptop' hay không?

// Kết quả mong đợi: Trả về true hoặc false.
//  */
// console.log("-----------------Some-------------------");
// var isLaptop = products.some((product) => {
//   return product.category === "Laptop";
// });
// console.log(isLaptop);

// /**
//  * Bài tập 4: Dùng find()
// Yêu cầu: Tìm xem có sản phẩm nào có giá (price) lớn hơn 29.000.000 không?

// Lưu ý: Hàm này chỉ trả về sản phẩm đầu tiên nó tìm thấy.
//  */
// console.log("-----------------Find-------------------");
// var highPrice = products.find((product) => {
//   return product.price > 29000000;
// });
// console.log(highPrice);

// /**
//  *Bài tập 5: Dùng filter()
// Yêu cầu: Cửa hàng muốn lọc ra danh sách các sản phẩm đã hết hàng (tức là quantity bằng 0) để nhập thêm.
// Hãy tạo ra một mảng mới chỉ chứa các sản phẩm này.
//  */
// console.log("-----------------Filter-------------------");
// var listOutStock = products.filter((product) => {
//   return product.quantity === 0;
// });
// console.log(listOutStock);

/**
 * Bài tập 6: Dùng map()

Yêu cầu: Tạo ra một mảng mới, mảng này chỉ chứa các chuỗi text theo định dạng: "[Tên sản phẩm] - [Giá] VNĐ".

Gợi ý: map giúp biến đổi (transform) mảng cũ thành mảng mới với số lượng phần tử y hệt.
 */
// console.log("-----------------Map-------------------");
// var newList = products.map((product) => {
//   return `[${product.name}] - [${product.price}] VNĐ`;
// });
// console.log(newList);

/**
 * Bài tập 7: Dùng reduce()

Yêu cầu: Tính tổng số lượng (quantity) của tất cả các sản phẩm đang có trong giỏ hàng (kể cả những sản phẩm có số lượng = 0 thì cộng vào vẫn là chính nó).

Kết quả mong đợi: Một con số duy nhất (Ví dụ: 2 + 0 + 1 + 5 + 0 = 8).
 */
// console.log("-----------------reduce-------------------");
// var totalStock = products.reduce((stock, product) => {
//   return stock + product.quantity;
// }, 0); // 0 là giá trị khởi tạo ở chỗ này,
// console.log(totalStock);

// var groupProducts = products.reduce((acc, product) => {
//   var category = product.category;
//   if (acc[category] === undefined) {
//     acc[category] = [];
//   }
//   acc[category].push(product);
//   return acc;
// }, {});
// console.log(groupProducts)
