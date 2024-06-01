// Bai tap 1
// const array = [3,4,5,6]
// for (const key in array) {
//     const key = array[key]
// }

// for (const key of array) {
//     const key = array[key]
// }
// console.log(array[key])
// Bai tap 2
//  let maxValue = 10;
//  let minValue = 1;

//  for (const key in array) {
//      const value = array[key];
//      maxValue = Math.max(maxValue, value);
//      minValue = Math.min(minValue, value);
// }

//  for (const value of array) {
//      maxValue = Math.max(maxValue, value);
//      minValue = Math.min(minValue, value);
// }

// console.log("Gia tri lon nhat:" + maxValue)
// console.log("Gia tri nho nhat:" +  minValue)
// Bai tap 3
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newwArray = [...array1, ...array2];

for (const key in array1) {
    newwArray.push(array1[key]);
}

for (const key in array2) {
    newwArray.push(array2[key]);
}

console.log(newwArray);