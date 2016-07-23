'use strict';

window.addEventListener('load', () => {
    document.body.classList.add('show');
    setTimeout(() => {
        document.body.style.transition = 'opacity 200ms';
    }, 1000);
});