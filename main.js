


let count = 0;
const counterElement = document.getElementById('counter');

// Adjustable interval in milliseconds
let interval = 1000; // Change this value to adjust the rate (1000ms = 1 second)

function updateCounter() {
    count++;
    counterElement.textContent = count;
}

// Start the counter
setInterval(updateCounter, interval);
