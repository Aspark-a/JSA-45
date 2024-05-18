// JS CƠ BẢN
// - Nhập xuất dữ liệu --------------------------------
// - 6 hàm built-in thường dùng
// alert("Hello Word");
// confirm("Are you ok?");
// var a = prompt("How old are you?"); // string
// console.log(typeof(a));

// callback: hoãn việc thực thi lệnh
// function write(str) {
//     document.write(str)
// }
// setTimeout(function () {
//     write("Hello world!")
// }, 3000)

//dem tu 1 den 10
//var i = 0;
//var a = setInterval(function () {
//    i++;
//    console.log(i);
//}, 1000);

// sau 10 giay => dung viec dem
//setTimeout(() => {
//    clearInterval(a);
//}, 10000)

// - Biến - let, const, var---------------
// var a = 1; // global variable
// const pi = 3.14; // hang so
// // pi += 2; // error
// for (let index = 0; index < 3; index++) {
//   console.log(index);
// }
// console.log(index); // loi khong tim thay bien

// Comment -----------------------------------
/*
1. ghi chu
2. vo hieu hoa code 
 */

// 1. Toan tu so hoc: Arithmetic (+-*/%)
var c = 10 % 2; // chia lay phan du
console.log(c);

var d = Math.floor(11/2); // chia lay phan nguyen
console.log(d);

var luy_thua = 3**3 
console.log(luy_thua)

// 2. Toan tu gan: Assignment (= -= += *= /= **=)
var a = 1;
a += 5; // a = a + 5;

// 3. Toan tu so sanh: Comparison (< > == >= <=)
if ((a = 7)) { // gan a la 7
  console.log(true); // in ra true 
}
console.log(a);
// 4. Toan tu logic: Logical(|| && !)
// and && (cả 2 vế là True => True, còn lại là false)
var m = 10 < 3 && 3 > 1; // => false
// or || (cả 2 vế là False => False, còn lại là True)
var n = 9 < 6 || 4 > 2; // => true
// not !
var z = m || (!n && !(10 + 2 > 3 * 1)); // => false

// - if - else -------------------------------------
// kiểm tra tuổi
const age = Number.parseInt(prompt("Nhap tuoi"));
if (age < 0) {
    document.write("You aren't born yet")
} else if (age < 18) {
    document.write("You are a teenager")
} else if (age < 60) {
    document.write ("You are an adult")
} else {
    document.write("You are an elderly")
}

// - function - arrow func -------------------------
function sum1(x,y) {
    return x + y;
}

// arrow func
const sum = (x, y) => x + y;
console.log(sum(12,10));

// - Object -----------------------------------------
// {}object, [] list, "" string, 12 number, () function
// key: value => key khong duoc trung
const student = {
    name: "Ngoc Diep",
    grade: 10,
};

// create a new property
student.courses = ["JSB", "JSA", "JSI"]
console.log(student)

// read a property
console.log(student.grade);

// update a property
student.grade++;
console.log(student.grade);

// delete a property
delete student.grade
console.log(student)

// - Array ----------------------------------
let list_1 = [1, 2, 5, 3, 9, 8, 6];

// map
let list_square = list_1.map((item) => item ** 2);
console.table(list_square);

//  foreach --------------------------------
let list_over30 = new Array(); // khai bao danh sach rong

list_square.forEach((element) => {
  if (element > 30) {
    // add in list
    list_over30.push(element);
  }
});
console.table(list_over30);
// cach rut gon => filter
let list_over30_1 = list_square.filter((item) => item > 30);
console.table(list_over30_1);

// update item in list
list_square[3] = 15;

// read list
for (let index = 0; index < list_square.length; index++) {
  console.log(index, list_square[index]);
}

// delete item in list
list_square.splice(3, 1);
list_square.pop(); // xoa phan tu cuoi