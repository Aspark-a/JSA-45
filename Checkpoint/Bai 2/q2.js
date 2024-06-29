let n = 5; // Nhap mot so tu nhien
for (let index = 1; index <= n; index++) {
    let str = "* ";
    let space = " "
    console.log(space.repeat(n - index) + str.repeat(2 * index - 1));
}
