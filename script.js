// Target the HTML elements using their unique IDs
const messageHeading = document.getElementById('message');
const actionButton = document.getElementById('actionBtn');

// Define what happens when the user clicks the button
actionButton.addEventListener('click', function() {
    // Change the text header content
    messageHeading.textContent = 'Hello, World!';
    
    // Change the button background color directly
    actionButton.style.backgroundColor = '#28a745';
});
