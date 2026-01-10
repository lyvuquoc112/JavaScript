// Callback?
// là hàm (funciton) được truyền qua đối số
// khi gọi hàm
//1. là hàm
//2. Được truyền qua đối số
//3. được gọi lại, tại hàm mà nó làm đôi số

function myFunction(param) {
  if (typeof param === "function") param("Hello mọi người");
}
function myCallback(value) {
  console.log("Value: ", value);
}
myFunction(myCallback);
// gọi hàm myFunction truyền tham đối số myCallback
// myCallback('Hello mọi người)
// console.log('Value: , hello mọi người)

// Call back

Array.prototype.map2 = function (callBack) {
  var output = [];
  var lengthArray = this.length;
  for (let i = 0; i < lengthArray; ++i) {
    var result = callBack(this[i], i);
    output.push(result);
  }

  return output;
};

var courses = ["JS", "Ruby", "PHP"];

var htmls = courses.map2(function (course) {
  return `<h1>${course}</h1>`;
});

console.log(htmls.join(","));

Array.prototype.filter2 = function (callBack) {
  var output = [];
  var lengthArray = this.length;
  if (typeof callBack !== "function") {
    return "Không phải là function";
  }
  for (let i = 0; i < lengthArray; ++i) {
    var result = callBack(this[i], i, this);
    if (result) {
      output.push(this[i]);
    }
  }

  return output;
};

var htmls1 = courses.filter2(function (course) {
  return course === "JS";
});
console.log(htmls1.join(""));

Array.prototype.forEach2 = function (callBack) {
  var lengthArray = this.length;
  if (typeof callBack !== "function") {
    return "Không phải là function";
  }
  for (let i = 0; i < lengthArray; ++i) {
    if (i in this) {
      callBack(this[i], i, this);
    }
  }
};
var htmls2 = courses.forEach2(function (course) {
  console.log(course);
});
console.log(htmls2);

Array.prototype.find2 = function (callBack) {
  var lengthArray = this.length;
  if (typeof callBack !== "function") {
    return "Không phải là function";
  }
  for (let i = 0; i < lengthArray; ++i) {
    var result = callBack(this[i], i, this);
    if (result) {
      return this[i];
    }
  }
};

var htmls1 = courses.find2(function (course) {
  return course === "JS";
});
console.log(htmls1);

Array.prototype.reduce2 = function (callBack) {
  var lengthArray = this.length;
  if (typeof callBack !== "function") {
    return "Không phải là function";
  }
  for (let i = 0; i < lengthArray; ++i) {
    var result = callBack(this[i], i, this);
    if (result) {
      return this[i];
    }
  }
};

var htmls1 = courses.reduce2(function (course) {
  return course === "JS";
});
console.log(htmls1);

var courses1 = [
  { id: 1, coin: 100 },
  { id: 2, coin: 200 },
  { id: 3, coin: 300 },
];

Array.prototype.reduce2 = function (callBack, initalValue) {
  var arrayLength = this.length;
  var result;
  let i = 0;
  if (typeof callBack !== "function") {
    return `Khoong phải là function`;
  }
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  } else {
    i = 0;
    result = initalValue;
  }
  for (; i < arrayLength; i++) {
    result = callBack(result, this[i], i, this);
  }
  return result;
};

var totalCoin = courses1.reduce2(function (total, course) {
  return total + course.coin;
}, 0);
console.log(totalCoin)

const courses3 = [100, 2000, 502]

var totalCoin1 = courses3.reduce2(function (total, course) {
  return total + course;
});
console.log(totalCoin1)


Array.prototype.every1 = function(callBack){
  var lengthArray = this.length;
  if(typeof callBack !== 'function'){
    return "Không phải là funciton"
  }
  for(let i=0;i<lengthArray;++i){
    var result = callBack(this[i],i,this);
    if(!result){
      return false;
    }
  }

  return true;
}
var isTrue = courses1.every1(function(course){
  return course.coin > 10
})
console.log(isTrue)

Array.prototype.some1 = function(callBack){
  var lengthArray = this.length;
  if(typeof callBack !== 'function'){
    return "Không phải là funciton"
  }
  for(let i=0;i<lengthArray;++i){
    var result = callBack(this[i],i,this);
    if(result){
      return true;
    }
  }

  return false;
}
var isTrue = courses1.some1(function(course){
  return course.coin  < 200
})
console.log(isTrue)