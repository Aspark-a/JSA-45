// Tao data
var obj1 = {
    name: 'Nguyen Van A',
    age: 26
};
var obj2 = {
    name: 'Nguyen Van B',
    age: 16
};
var obj3 = {
    name: 'Nguyen Van C',
    age: 38
};
var obj4 = {
    name: 'Nguyen Thi D',
    age: 27
};
var obj5 = {
    name: 'Nguyen Cong Van',
    age: 22
};

// const data_list = [obj1, obj2, obj3, obj4, obj5];

// function getRequest() {
//     const request = prompt("Nhap gi do...")
//     return request.trim().toLowerCase();
// }

// function searchDataByReq(req) {
//     data_list.map((object) => {
//         for (const key in object) {
//             if (object[key] == req) {
//                 result_list.push(object);
//             }
//         }
//     });
//     return result_list;
// }

// function createHTMLCode(lis) {
//     const list_container = document.querySelector("data-list")
//     lis?.forEach((element) => {
//         list_container.innerHTML += `<li>${JSON.stringify(element)}</li>`
//     })
// }

// createHTMLCode(searchDataByReq(getRequest()));

// While -------------------------------
// Tien to prefix - hau to posfix
// x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
// ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
// x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
// --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảm
// let a = 10;
// console.log(++a);
// console.log(a++);

// chac chan co it nhat 1 lan thuc hien lenh trong do
// let i =0;
// do {
//     ++i;
// } while (i < 5);
// console.log(i);

/** 6 kieu du lieu sau khi convert => boolean => false (con lai deu la true)
 * 0
 * false
 * chuoi rong '' / ""
 * undefined
 * null
 * NaN
 */

let userInput = "";
while (!userInput) {
    userInput = Number.parseInt(prompt("Nhap tuoi"));
    // kiem tra so nguyen va so duong
    if (Number.isInteger(userInput) && Number.parseInt(userInput) > 0) {
        document.write(userInput);
        break;
    } else {
        userInput = "";
    }
    
}