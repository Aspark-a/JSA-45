const userInfoDiv = document.getElementById('user-info');
const userData = JSON.parse(localStorage.getItem('user'));

if (userData) {
    userInfoDiv.innerHTML = `
    <p>Name: ${userData.name}</p>
    <p>Password: ${userData.Password}</p>
    <p>Birthday: ${userData.Birthday}</p>
    `;
} else {
    userInfoDiv.innerHTML = 'No user data found';
}