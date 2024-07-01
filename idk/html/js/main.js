// Dong bo: cahy code tu tren xuong duoi
// let a = 10 < 2
// let c = a;

// Bat dong bo: 1 code bij dung lai
// console.log(a);
// setTimeout(() => {
//     console.log("first");
// }, 0);
// console.log(c);

// Data => chua kip chay het (pending) => render giao dien
// callback
// [1, 2, 3].filter((e) => e > 0);

// function myFilter(cb) {
//     let newlist = [];
//     this.array.forEach(element => {
//         if(cb(element, index, this)) {
//             newlist.push(element);
//         }
//     });
//     return newlist;
// }

// promise: resolve, reject
const pm1 = new Promise((resolve, reject) => {
    if (12 > 2) {
        resolve({a: "true"});
    } else {
        reject({err: "Not found"});
    }
});

pm1
.then((data) => console.log(data))
.catch((err) => console.log(err));

// async-await
const exeAsync = async () => {
    const x = await pm1
    console.log(x);
};

exeAsync().catch(err => console.log(err));


// Call API 
function renderData(dataList) {
    const container = document.querySelector("#result-list");
    dataList?.forEach(element => {
        const li = document.createElement("li");
        li.innerText = element.username;
    
        container.appendChild(li);
    });
}
async function getData() {
    const dataList = await fetch('https://fakestoreapi.com/users?limit=5')
    // console.log(await dataList.json);
    localStorage.setItem("users", dataList)
}

function getDataPromise() {
    fetch('https://fakestoreapi.com/users?limit=5')
    .then(res=>res.json())
    .then((json) => {
        localStorage.setItem("users", JSON.stringify(json))
    });
}

// getData().catch((err) => console.log(err));

function searchData(dataList) {
    const search = document
    .getElementById('search-div')
    .getElementsByTagName("input").value

        const newlist = dataList.filter((e) => e.username.includes(search));
        renderData(newlist);
}

// bat su kien cho thanh search
document.querySelector('#search-div input').onkeyup = () => {
    const dataList = JSON.parse(localStorage.getItem("users"));
    if (!dataList) {
    getDataPromise();
    }
    searchData(dataList);
};
