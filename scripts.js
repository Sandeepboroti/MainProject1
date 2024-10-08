// Function to display explore message
function exploreMore() {
    alert("Explore our exciting travel destinations and plan your next trip with us!");
}

// Contact Form Handling
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    document.getElementById('formResponse').innerText = 
        `Thank you, ${name}. We have received your message and will get back to you at ${number} or ${email}.`;
});
