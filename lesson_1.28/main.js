/**
 * Math object
 * - Math.PI
 * - Math.round()
 * - Math.abs()
 * - MAth.ceil()
 * - Math.floor()
 * - Math.random()
 * - Math.min()
 * - Math.max()
 */
console.log(Math.PI);
console.log(Math.round(2.5123126)); // làm tròn thành số nguyên
console.log("Giá trị tuyệt đối: ", Math.abs(-4));
console.log("Làm tròn trên: ", Math.ceil(4.00000001));
console.log("Làm tròn dưới: ", Math.floor(8.999999999));
console.log("Ngẫu nhiên một số từ 0-1: ", Math.random());
console.log("Ngẫu nhiên một số từ 1-10: ", Math.floor(Math.random() * 10 + 1));
console.log(
  "Số nhỏ nhất trong các số được cho trước: ",
  Math.min(1, 364, 23, -234, 23)
);
console.log(
  "Số lớn nhất trong các số được cho trước: ",
  Math.max(1, 364, 23, -234, 23)
);

var randomNumber = [1, 2, 3, 4];
function getRandomItem(randomNumber) {
  return randomNumber[Math.floor(Math.random() * randomNumber.length)];
}
console.log(getRandomItem(randomNumber));

// quay gach
// có 3 loại
// character 3 star
// character 4 star
// character 5 star
// quay 10 lần

function percentageOfEachPush() {
  return parseFloat((Math.random() * 100).toFixed(1));
}

function getRandomCharacter(categoryCharaters) {
  return categoryCharaters[
    Math.floor(Math.random() * categoryCharaters.length)
  ];
}

const character5Star = ["A", "B", "C", "D"];
const character4Star = ["a", "b", "c", "d", "e", "f", "g"];
const character3Star = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const listCharactersGet = [];
console.log("--- Bắt đầu Gacha 10 lần ---");
for (let i = 0; i < 10; ++i) {
  let character;
  let chance = percentageOfEachPush();
  if (chance <= 0.1) {
    character = getRandomCharacter(character5Star);
    console.log(`lần ${i+1}: ${chance}\%\ lấy được tướng ${character} 5 sao`)
  }
  else if (chance > 0.1 && chance <= 5) {
    character = getRandomCharacter(character4Star);
    console.log(`lần ${i+1}: ${chance}% lấy được tướng ${character} 4 sao`)
  }
  else {
    character = getRandomCharacter(character3Star);
    console.log(`lần ${i+1}: ${chance}% lấy được tướng ${character} 3 sao`)
  }
  listCharactersGet.push(character);
}
console.log(listCharactersGet);
