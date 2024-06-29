const form = document.getElementById('register-form');
const signupBtn = document.getElementById('register-btn');

signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const Password = document.getElementById('Password').value;
    const Birthday = document.getElementById('Birthday').value;

    if (!name || !Password || !Birthday) {
        alert('Please fill in the blank')
        return;
    }

    localStorage.setitem('user', JSON.stringify({name, Password, Birthday}));
    location.href = "show.html";
});
