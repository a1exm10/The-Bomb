window.onload = function() {
    const textElement = document.getElementById('rtext');
    let text = textElement.textContent;
    let index = 0;

    function removeLetter() {
        if (index < text.length) {
            textElement.textContent = text.slice(0, index) + text.slice(index + 1);
            setTimeout(removeLetter, 1000); // Call removeLetter every second
        }
        index++;
    }

    removeLetter();
};





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
