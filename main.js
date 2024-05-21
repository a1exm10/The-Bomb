let count = 0;
const countElement = document.querySelector('#count-number');

function incrementCount() {
    if (count-number < 100) {
        count++;
        countElement.innerHTML = `<span id="count">${count}</span>`;
        setTimeout(incrementCount, 50); // Adjust the delay between increments (in milliseconds)
    } else {
        // Redirect to another page when the count reaches 100
        window.location.href = 'finale.html'; // Replace 'anotherpage.html' with the desired file name
    }
}

incrementCount();
