var a = {};
console.log(typeof a);

var b = null && true; // and
console.log(b);
if (b) {console.log("first")} 

var c = null || false; // or
console.log(c);
if(a) console.log("first")

// de quy ------------------------------
// giai thua
var n = 5;
var result = 1;
for (let index = 1; index <= n; index++) {
  result *= index;
}
// console.log(result);

function de_quy(num, res) {
  // kiem tra truong hop sai
  if (num == 0) {
    return res;
  }
  res *= num;
  console.table({ res: res, num: num });
  return de_quy(num - 1, res);
}
de_quy(n, 1);