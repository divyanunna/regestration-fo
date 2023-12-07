function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    // Send data to the server using fetch or XMLHttpRequest
    // Example using fetch and assuming you have a server endpoint "/register" handling the registration
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Registration successful!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
    });
}