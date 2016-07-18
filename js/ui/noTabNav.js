'use strict';

window.addEventListener('load', () => {
    document.querySelector('.mdl-layout__drawer-button').removeAttribute('tabindex');
    [...document.querySelectorAll('.mdl-layout__header button')].forEach(x => {
        x.tabIndex = -1;
    });
});