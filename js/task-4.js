
const form = document.querySelector('.login-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    if (email === "" || password === "") {
        alert('All form fields must be filled in');
        return;
    } else {
        const userData = { email, password };
        console.log(userData);
        form.reset();
    }

});