// Viet ham tinh chu vi va dien tich hinh chu nhat
// param: w, h
// return: obj{
//  w: w;
//  h: h,
//  cv: ...,
//  dt: ...,
//  }

function hinhchunhat(w, h) {
    return { 
    w: w,
    h: h,
    cv: (w + h) * 2,
    dt: h * w
    };
}
// arrow function
const objHCN = (w, h) => new Object({ w: w, h: h, cv: (w + h) * 2, dt: h * w })
console.log(hinhchunhat(4, 4));
console.log(objHCN(3, 5));

// deu tra ve obj
const a = new Number(12);
console.log(typeof null);