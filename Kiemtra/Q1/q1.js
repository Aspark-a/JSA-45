let menu = ["rau xào", "thịt luộc", "gà rán"];

function create() {
  let newDish = prompt("Mời người dùng nhập món ăn muốn thêm vào menu");
  menu.push(newDish);
  localStorage.setItem("menu", JSON.stringify(menu));
  alert("Món ăn mới đã được thêm vào");
}

function read() {
  let storedMenu = localStorage.getItem("menu");
  if (storedMenu) {
    menu = JSON.parse(storedMenu);
  }
  alert("Menu mới nhất: " + menu.join(", "));
}

function update() {
    let dishToUpdate = prompt("Mời người dùng nhập vào tên món muốn update");
    let index = menu.indexOf(dishToUpdate);
    if (index !== -1) {
        let newDishName = prompt("Mời người dùng nhập vào tên món ăn mới")
        menu[index] = newDishName;
        localStorage.setItem("menu", JSON.stringify(menu));
        alert("Món ăn đã được cập nhật");
    } else {
        alert("Không tìm thấy món ăn")
    }
}

function deleteDish() {
    let dishToDelete = prompt("Mời người dùng nhập vào tên món muốn Delete");
    let index = menu.indexOf(dishToDelete);
    if (index !== -1) {
        menu.splice(index, 1);
        localStorage.setItem("menu", JSON.stringify(menu));
        alert("Món ăn đã được delete");
    } else {
        alert("Không tìm thấy món ăn");
    }
}

function handleInput() {
    switch (input) {
        case "C":
            create();
            break;
        case "R":
            read();
            break;
        case "U":
            update();
            break;
        case "D":
            deleteDish();
            break;
        default:
            alert("Invalid input");
    }
}

let userInput = prompt("Người dùng chỉ có thể nhập những ký tự sau: C, R, U, D");
handleInput(userInput);