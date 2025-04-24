const eventEl = document.getElementById('event-del');
eventEl.addEventListener('click', function (event) {

    if (event.target && event.target.tagName === 'LI') {
        console.log('Clicked on: ' + event.target.textContent);
    }
})