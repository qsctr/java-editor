import * as nav from './nav';

qs('#top-bar-nav-button').addEventListener('click', () => {
    nav.toggle();
});