const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Sample user data
const users = [
    { username: 'john', password: '12345' },
    { username: 'jane', password: '67890' },
];

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Check if username and password are not empty
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
        return;
    }

    // Check if username and password match with the sample user data
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
        // Login successful
        console.log('Login successful');
        // You can redirect to another page or perform other actions here
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});