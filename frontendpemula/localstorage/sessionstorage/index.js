const sessionStorageKey = 'PRESS_FREQUENCY';

if (typeof Storage != 'undefined') {
    if (sessionStorage.getItem(sessionStorageKey) === null) {
        sessionStorage.setItem(sessionStorageKey, '0');
    }

    const incrementButton = document.getElementById('incrementButton');
    const clearButton = document.getElementById('clear');
    const countDisplay = document.getElementById('count');

    countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);

    incrementButton.addEventListener('click', () => {
        let count = sessionStorage.getItem(sessionStorageKey);
        count++;
        sessionStorage.setItem(sessionStorageKey, count);
        countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);
    });

    clearButton.addEventListener('click', () => {
        sessionStorage.setItem(sessionStorageKey, '0');
        countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);
    });
} else {
    alert('Sorry, your browser does not support Web Storage...');
}
