const localStorageKey = 'PRESS_FREQUENCY';

if (typeof Storage != 'undefined') {
    if (localStorage.getItem(localStorageKey) === null) {
        localStorage.setItem(localStorageKey, '0');
    }

    const incrementButton = document.getElementById('incrementButton');
    const clearButton = document.getElementById('clear');
    const countDisplay = document.getElementById('count');

    countDisplay.innerText = localStorage.getItem(localStorageKey);

    incrementButton.addEventListener('click', () => {
        let count = localStorage.getItem(localStorageKey);
        count++;
        localStorage.setItem(localStorageKey, count);
        countDisplay.innerText = localStorage.getItem(localStorageKey);
    });

    clearButton.addEventListener('click', () => {
        localStorage.setItem(localStorageKey, '0');
        countDisplay.innerText = localStorage.getItem(localStorageKey);
    });
} else {
    alert('Sorry, your browser does not support Web Storage...');
}
