let count = 0;
const countElement = document.getElementById('count');

function incrementCount() {
    if (count < 100) {
        count++;
        countElement.textContent = count;
        setTimeout(incrementCount, 50); // Adjust the delay between increments (in milliseconds)
    } else {
        // Redirect to another HTML page when count reaches 100
        window.location.href = 'finale.html'; // Replace 'anotherpage.html' with the desired file name
    }
}

incrementCount();
