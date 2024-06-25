// add code here to save the username from the login page
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const userDisplay = document.getElementById('user-display');
    const userInfo = document.getElementById('user-info');
    const logoutButton = document.getElementById('logout-button');

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

    checkLogin();
});
//redirect to card page after sucessful login
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        showUserInfo(username);
        window.location.href = 'card.html'; // Add this line for redirection
    } else {
        alert('Please enter both username and password.');
    }
});

