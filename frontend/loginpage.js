// add code here to save the username from the login page
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    function showUserInfo(username) {
        userDisplay.textContent = username;
        loginForm.style.display = 'none';
        userInfo.style.display = 'block';
    }

    function checkLogin() {
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            showUserInfo(savedUsername);
        }
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple login validation (for demonstration purposes)
        if (username && password) {
            localStorage.setItem('username', username);
            showUserInfo(username);
        } else {
            alert('Please enter both username and password.');
        }
    });

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('username');
        loginForm.style.display = 'block';
        userInfo.style.display = 'none';
    });

    checkLogin();
});
