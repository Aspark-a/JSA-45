function Giai_thua(n) {
    let result = 1;
    for (let index = 1; index <= n; index++){
        result *= index;
    }
    return result;
}

const n = parseInt(prompt("Hay nhap mot so tu nhien:"));
console.log('So giai thua cua ${n} la: ${Giai_thua(n)}');