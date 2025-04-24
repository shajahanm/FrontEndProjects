const eventEl = document.getElementById('event-del');
eventEl.addEventListener('click', function (event) {

    if (event.target && event.target.tagName === 'LI') {
        console.log('Clicked on: ' + event.target.textContent);
    }
})

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(15)); 